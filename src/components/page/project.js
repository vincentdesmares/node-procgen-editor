//@flow
import React, { Component } from "react";
import ProjectList from "../project/list";
import { Link } from "react-router-dom";

class ProjectPage extends Component {
  render() {
    return (
      <div>
        <span>Welcome to project {this.props.match.params.projectId} </span>
      </div>
    );
  }
}

export default ProjectPage;
