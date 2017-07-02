import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  ApolloClient,
  gql,
  graphql,
  ApolloProvider,
  createNetworkInterface
} from "react-apollo";

const jobsListQuery = gql`
  query jobsListQuery {
    jobs {
      id
      type
      name
      input
      output
    }
  }
`;

const JobsList = ({ data: { loading, error, jobs } }) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return (
      <p>
        {error.message}
      </p>
    );
  }
  return (
    <ul>
      {jobs.map(job =>
        <li key={job.id}>
          {job.type}, {job.name}, {job.input}, {job.output}
        </li>
      )}
    </ul>
  );
};

// A mutation is made available on a callback called `mutate`
// Other props of the wrapping component are passed through.
function AddJobButton({ mutate, type }) {
  return (
    <button
      onClick={() =>
        mutate({
          variables: { type },
          refetchQueries: [{ query: jobsListQuery }]
        })}
    >
      Upvote
    </button>
  );
}

// You can also use `graphql` for GraphQL mutations
const AddJobButtonWithData = graphql(gql`
  mutation addJob($type: String!) {
    addJob(type: $type) {
      id
      type
      name
      input
      output
    }
  }
`)(AddJobButton);

const JobsListWithData = graphql(jobsListQuery)(JobsList);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <JobsListWithData />
        <AddJobButtonWithData type={"ṕlop"} />
      </div>
    );
  }
}

export default App;
