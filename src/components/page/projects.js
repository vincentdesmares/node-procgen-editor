//@flow
import React, { Component } from "react";
import ProjectList from "../project/list";

class ProjectPage extends Component {
  render() {
    return (
      <div>
        <a
          className="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma1 tc br2 pa1 fr mr2 mt2"
          href="https://facebook.com"
          title="Facebook"
        >
          <i className="material-icons">add_circle</i>
          <span className="f6 ml1 pr2">Add project</span>
        </a>
        <div className="cb" />
        <ProjectList />
      </div>
    );
  }
}

export default ProjectPage;
