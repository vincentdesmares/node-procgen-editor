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

let workerType = "heightmap";

const WorkerClass = require("./workers/" + workerType);
const worker = new WorkerClass();
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
  .then(({ data: { getNextJob: job } }) => {
    if (!job) {
      console.log("No new job");
      return;
    }
    console.log("Reiceived a new job", job);
    worker
      .process(job)
      .then(job => {
        console.log("Job's done", job.id);
        console.log("Updating job");
      })
      .catch(error => {
        console.log("Job failed", error);
      });
  })
  .catch(error => console.error(error));
