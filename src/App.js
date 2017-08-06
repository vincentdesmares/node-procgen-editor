import "tachyons/css/tachyons.min.css";
import "material-design-icons/iconfont/material-icons.css";
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Link, Route } from "react-router-dom";
import ProjectsPage from "./components/page/projects";
import ProjectPage from "./components/page/project";
import TerrainsPage from "./components/page/terrains";
import NewProjectPage from "./components/page/new-project";
import JobsPage from "./components/page/jobs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Link to="/">Projects</Link>
          <Link to="/jobs">Jobs</Link>
        </div>
        <Route exact path="/" component={ProjectsPage} />
        <Route exact path="/projects/new" component={NewProjectPage} />
        <Route exact path="/projects/:projectId" component={ProjectPage} />
        <Route
          exact
          path="/projects/:projectId/terrains"
          component={TerrainsPage}
        />
        <Route exact path="/jobs" component={JobsPage} />
      </div>
    );
  }
}

export default App;
