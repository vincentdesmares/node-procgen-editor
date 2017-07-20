const uuidv4 = require("uuid/v4");

console.log("Uniq id for worker life:", uuidv4());

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

const getNextJobQuery = gql`
      mutation getNextJob($type: String!) {
          getNextJob(type: $type) {
              id
              type
              name
              input
              output
          }
      }
    `;

const updateJobQuery = gql`
      mutation updateJob(
              $id: String,
              $type: String,
              $name: String,
              $input: String,
              $output: String,
              $status: String
          ) {
          updateJob(id: $id,
              type: $type,
              name: $name,
              input: $input,
              output: $output
              status: $status) {
              id
              type
              name
              input
              output
              status
          }
      }
    `;

function checkForJobs() {
  client
    .mutate({
      mutation: getNextJobQuery,
      variables: { type: "commandline" }
    })
    .then(({ data: { getNextJob: job } }) => {
      if (!job) {
        console.log("No new job");
        setTimeout(checkForJobs, 1000);
        return;
      }
      console.log("Reiceived a new job", job);
      worker
        .process(job)
        .then(job => {
          console.log("Job's done", job.id);
          console.log("Updating job");
          job.status = "done";
          client
            .mutate({
              mutation: updateJobQuery,
              variables: job
            })
            .then(job => {
              console.log("Job saved!", job);
              checkForJobs();
            });
        })
        .catch(error => {
          console.log("Job failed", error);
        });
    })
    .catch(error => console.error(error));
}

checkForJobs();
