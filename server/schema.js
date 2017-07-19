const { makeExecutableSchema } = require("graphql-tools");

const { find, filter } = require("lodash");

const { Job } = require("./models");

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
      return Job.findAll()
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
      let jobId = jobs.pop();
      return Job.findOne({
        where: {
          id: jobId
        }
      }).then(job => {
        job.status = "processing";
        job.save();
        return job;
      });
    }
  }
};

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});
