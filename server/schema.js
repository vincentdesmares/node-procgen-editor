const { makeExecutableSchema } = require("graphql-tools");

const { find, filter } = require("lodash");

const { Job, Project, Scene, Batch } = require("./models");

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
    batch: Batch
  }
  type Scene {
    id: Int!
    name: String
    status: String
    batches: [Batch]
  }
  type Batch {
    id: Int!
    status: String
    metadata: String
    project: Project
    scene: Scene
    jobs: [Job]
  }
  type Project {
    id: Int!
    name: String
    scenes: [Scene]
  }
  # the schema allows the following query:
  type Query {
    jobs: [Job]
    job(id: Int!): Job
    projects: [Project]
    project(id: Int!): Project
    scenes(projectId: Int): [Scene]
    scene(id: Int!): Scene,
    batches: [Batch]
    batch(id: Int!): Batch
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
    job: (_, { id }) => Job.findById(id),
    projects: () => {
      console.log("projects called");
      return Project.findAll({
        order: [["id", "desc"]],
        include: [{ model: Scene, as: "scenes", include: ["batches"] }]
      })
        .then(projects => {
          //projects[0].scenes = [{ id: 1 }];
          return projects;
        })
        .catch(function(err) {
          console.log(err);
          return [];
        });
    },
    project: (_, { id }) =>
      Project.findById(id, {
        include: [
          {
            model: Scene,
            as: "scenes",
            include: [{ model: Batch, as: "batches", include: ["jobs"] }]
          }
        ]
      }),
    // projectScenes: obj => {
    //   return { id: 1 };
    // },
    scenes: (_, { projectId }) => {
      console.log("scenes called");
      let where = {};
      if (projectId) {
        where.projectId = projectId;
      }
      return Scene.findAll({ where, order: [["id", "desc"]] })
        .then(scenes => {
          return scenes;
        })
        .catch(function(err) {
          console.log(err);
          return [];
        });
    },
    scene: (_, { id }) => Scene.findById(id),
    batches: () => {
      console.log("batches called");
      return Batch.findAll({
        order: [["id", "desc"]]
      })
        .then(batches => {
          //projects[0].scenes = [{ id: 1 }];
          return batches;
        })
        .catch(function(err) {
          console.log(err);
          return [];
        });
    },
    batch: (_, { id }) => Batch.findById(id)
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
