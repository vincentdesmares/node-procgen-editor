const { makeExecutableSchema } = require("graphql-tools");

const { find, filter } = require("lodash");

const { Job, Project } = require("./models");

const { PubSub } = require("graphql-subscriptions");
const pubsub = new PubSub();

const typeDefs = `
  type Job {
    id: Int!
    type: String
    name: String
    input: String
    output: String
    status: String
    # posts: [Post]
  }
  type Project {
    id: Int!
    name: String
  }
  # the schema allows the following query:
  type Query {
    jobs: [Job]
    job(id: Int!): Job
  }
  # this schema allows the following mutation:
  type Mutation {
    addJob (
      type: String!
    ): Job
    
    getNextJob (
      type: String!
    ): Job
    updateJob(
      id: String
      type: String
      name: String
      input: String
      output: String
      status: String
    ): Job
    deleteAllJobs (
      type: String
    ): String

    addProject (
      name: String!
    ): Project
  }
  type Subscription {
    jobUpdated(type: String!): Job
  }
`;

// Load initial jobs
let jobs = [];
Job.findAll({
  where: {
    status: "pending"
  }
})
  .then(pendingJobs => {
    console.log(
      "Jobs still pending are loaded at server start",
      pendingJobs.map(job => job.id)
    );
    jobs = pendingJobs.map(job => job.id);
  })
  .catch(error => {
    console.log(error);
  });

const resolvers = {
  Query: {
    jobs: () => {
      return Job.findAll({ order: [["id", "desc"]] })
        .then(jobs => {
          return jobs;
        })
        .catch(function() {
          return [];
        });
    },
    job: (_, { id }) => Job.findById(id)
  },
  Mutation: {
    updateJob: (_, { id, type, name, input, output, status }) => {
      return Job.findById(id).then(function(job) {
        job.output = output;
        job.status = status;
        job.save();
        pubsub.publish("jobUpdated", { jobUpdated: job });
        return job;
      });
    },
    addJob: (_, { type }) => {
      return Job.create({
        type: type,
        name: "test 1",
        input: "test",
        output: "test2",
        status: "pending"
      }).then(function(job) {
        jobs.push(job.id);
        return job;
      });
    },
    getNextJob: (_, { type }) => {
      if (jobs.length == 0) {
        return null;
      }
      let jobId = jobs.shift();
      return Job.findOne({
        where: {
          id: jobId
        }
      }).then(job => {
        job.status = "processing";
        job.save();
        pubsub.publish("jobUpdated", { jobUpdated: job });
        return job;
      });
    },
    deleteAllJobs: (_, { type }) => {
      jobs = [];
      return Job.destroy({ where: {} }).then(() => "destroyed");
    },
    addProject: (_, { name }) => {
      return Project.create({
        name
      }).then(function(project) {
        return project;
      });
    }
  },
  Subscription: {
    jobUpdated: {
      subscribe: () => pubsub.asyncIterator("jobUpdated")
    }
  }
};

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});
