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
      status
    }
  }
`;

class JobsList extends Component {
  componentWillMount() {
    this.props.subscribeToJobUpdates({ type: "plop" });
  }
  render() {
    const { jobs: { jobs, loading } } = this.props;

    if (loading) {
      return <p>Loading ...</p>;
    }
    return (
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            {job.type}, {job.name}, {job.input}, {job.output}, {job.status}
          </li>
        ))}
      </ul>
    );
  }
}

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

const subscriptionJobUpdated = gql`
subscription onJobUpdated($type: String!){
  jobUpdated(type: $type){
    id
    type
    name
    input
    output
    status
  }
}`;

// You can also use `graphql` for GraphQL mutations
const AddJobButtonWithData = graphql(
  gql`
  mutation addJob($type: String!) {
    addJob(type: $type) {
      id
      type
      name
      input
      output
      status
    }
  }
`
)(AddJobButton);

const JobsListWithData = graphql(jobsListQuery, {
  name: "jobs",
  props: ({ jobs, ownProps }) => {
    const subscribeToJobUpdates = params =>
      jobs.subscribeToMore({
        document: subscriptionJobUpdated,
        variables: {
          type: params.type
        },
        updateQuery(prev, { subscriptionData }) {
          const { commentAdded } = subscriptionData.data;
          return {
            ...prev,
            jobs: [...jobs, commentAdded]
          };
        }
      });
    return { jobs, subscribeToJobUpdates };
  }
})(JobsList);

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
