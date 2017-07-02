const { makeExecutableSchema } = require("graphql-tools");

const { find, filter } = require("lodash");

const typeDefs = `
  type Author {
    id: Int!
    firstName: String
    lastName: String
    posts: [Post] # the list of Posts by this author
  }
  type Post {
    id: Int!
    title: String
    author: Author
    votes: Int
  }
  # the schema allows the following query:
  type Query {
    posts: [Post]
    authors: [Author]
    author(id: Int!): Author
  }
  # this schema allows the following mutation:
  type Mutation {
    addJob (
      type: String!
    ): Author
  }
`;

// example data
const authors = [
  { id: 1, firstName: "Tom", lastName: "Coleman" },
  { id: 2, firstName: "Sashko", lastName: "Stubailo" },
  { id: 3, firstName: "Mikhail", lastName: "Novikov" }
];
const posts = [
  { id: 1, authorId: 1, title: "Introduction to GraphQL", votes: 2 },
  { id: 2, authorId: 2, title: "Welcome to Meteor", votes: 3 },
  { id: 3, authorId: 2, title: "Advanced GraphQL", votes: 1 },
  { id: 4, authorId: 3, title: "Launchpad is Cool", votes: 7 }
];
const resolvers = {
  Query: {
    posts: () => posts,
    authors: () => authors,
    author: (_, { id }) => find(authors, { id: id })
  },
  Mutation: {
    addJob: (_, { type }) => {
      const post = { id: authors.length + 1, firstName: type, lastName: type };
      authors.push(post);
      return post;
    }
  },
  Author: {
    posts: author => filter(posts, { authorId: author.id })
  },
  Post: {
    author: post => find(authors, { id: post.authorId })
  }
};

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});
