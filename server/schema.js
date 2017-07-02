const { makeExecutableSchema } = require("graphql-tools");

const { find, filter } = require("lodash");

const typeDefs = `
  type Job {
    id: Int!
    type: String
    name: String
    input: String
    output: String
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
  }
`;

// example data
const jobs = [{ id: 1, type: "Tom", name: "Coleman", input: "", output: "" }];
const resolvers = {
  Query: {
    jobs: () => jobs,
    job: (_, { id }) => find(jobs, { id: id })
  },
  Mutation: {
    addJob: (_, { type }) => {
      const job = {
        id: jobs.length + 1,
        type,
        name: "naaame",
        input: "",
        output: ""
      };
      jobs.push(job);
      return job;
    }
  }
};

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});
