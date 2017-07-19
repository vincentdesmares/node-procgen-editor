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

// example data
const jobs = [{ id: 1, type: "Tom", name: "Coleman", input: "", output: "" }];
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
      });
    },
    getNextJob: (_, { type }) => {
      return Job.findOne({
        where: {
          type: type
        },
        order: ["id", "desc"]
      });
    }
  }
};

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});
