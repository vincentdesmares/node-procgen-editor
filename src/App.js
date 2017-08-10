import "tachyons/css/tachyons.min.css";
import "material-design-icons/iconfont/material-icons.css";
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Link, Route } from "react-router-dom";
import ProjectsPage from "./components/page/projects";
import ProjectPage from "./components/page/project";
import TerrainsPage from "./components/page/terrains";
import TerrainPage from "./components/page/terrain";
import ZoningsPage from "./components/page/zonings";
import ScenesPage from "./components/page/scenes";
import ScenePage from "./components/page/scene";
import NewProjectPage from "./components/page/new-project";
import JobsPage from "./components/page/jobs";
import Header from "./components/header";

import "aframe";
import "aframe-particle-system-component";
import "aframe-terrain-model-component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={ProjectsPage} />
        <Route exact path="/project/new" component={NewProjectPage} />
        <Route
          exact
          path="/project/:projectId([0-9]+)"
          component={ProjectPage}
        />
        <Route
          exact
          path="/project/:projectId/terrain"
          component={TerrainsPage}
        />
        <Route
          exact
          path="/project/:projectId/zoning"
          component={ZoningsPage}
        />
        <Route
          exact
          path="/project/:projectId/terrain/:terrainId([0-9]+)"
          component={TerrainPage}
        />
        <Route exact path="/project/:projectId/scene" component={ScenesPage} />
        <Route
          exact
          path="/project/:projectId/scene/:sceneId([0-9]+)"
          component={ScenePage}
        />
        <Route exact path="/jobs" component={JobsPage} />
      </div>
    );
  }
}

export default App;
