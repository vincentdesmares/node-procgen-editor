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
    authors {
      id
      firstName
    }
  }
`;

const JobsList = ({ data: { loading, error, authors } }) => {
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
      {authors.map(job =>
        <li key={job.id}>
          {job.firstName}
        </li>
      )}
    </ul>
  );
};

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
      </div>
    );
  }
}

export default App;
