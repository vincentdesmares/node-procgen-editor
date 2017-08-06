//@flow
import React, { Component } from "react";
import ProjectList from "../project/list";
import { Link } from "react-router-dom";

class ProjectPage extends Component {
  render() {
    return (
      <div>
        <span>Welcome to project {this.props.match.params.projectId} </span>
        <div>
          Scenes
        </div>
        <div>
          <Link to={`/projects/${this.props.match.params.projectId}/terrains`}>
            Terrains
          </Link>
        </div>
        <div>
          Zonings
        </div>
        <div>
          Entities
        </div>
        <div>
          Placements
        </div>
        <div>
          Assets
        </div>
      </div>
    );
  }
}

export default ProjectPage;
