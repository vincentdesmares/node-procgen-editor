//@flow
import React, { Component } from "react";
import ProjectPreview from "./preview";

class ProjectList extends Component {
  render() {
    return (
      <div>
        <ProjectPreview />
        <ProjectPreview />
        <ProjectPreview />
        <ProjectPreview />
        <ProjectPreview />
        <ProjectPreview />
      </div>
    );
  }
}

export default ProjectList;
