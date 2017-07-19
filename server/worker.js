const uuidv4 = require("uuid/v4");

console.log(uuidv4());

const fetch = require("isomorphic-fetch");
const ApolloModule = require("apollo-client");
const ApolloClient = ApolloModule.default;
const createNetworkInterface = ApolloModule.createNetworkInterface;
const gql = require("graphql-tag");

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: "http://localhost:3000/graphql"
  })
});

// client
//   .query({
//     query: gql`
//     query jobsListQuery {
//         jobs {
//             id
//             type
//             name
//             input
//             output
//         }
//     }
//   `
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

client
  .mutate({
    mutation: gql`
      mutation getNextJob($type: String!) {
          getNextJob(type: $type) {
              id
              type
              name
              input
              output
          }
      }
    `,
    variables: { type: "commandline" }
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));
