//@flow
import React, { Component } from "react";
import ProjectList from "../project/list";
import { Link } from "react-router-dom";
import "aframe";
import "aframe-particle-system-component";
import "aframe-terrain-model-component";
import { Entity, Scene } from "aframe-react";

class TerrainsPage extends Component {
  render() {
    return (
      <div>
        <span>
          Welcome to project {this.props.match.params.projectId} terrains
        </span>
        <Link
          to="/projects/new"
          title="Will open the project creation page"
          className="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma1 tc br2 pa1 fr mr2 mt2"
        >
          <i className="material-icons">add_circle</i>
          <span className="f6 ml1 pr2">Add terrain</span>
        </Link>
        <div
          className="b--black ba"
          style={{
            width: 200,
            height: 200
          }}
        >
          <Scene>
            <Entity
              position={{ x: 0, y: 200, z: 200 }}
              rotation={{ x: -50, y: 0, z: 0 }}
              camera
              look-controls
            />
            <Entity
              color-terrain-model={{
                colorScheme: "magma",
                DEM: "url(/assets/test.bin)",
                planeWidth: 100,
                planeHeight: 100,
                segmentsWidth: 99,
                segmentsHeight: 99,
                zPosition: 30,
                wireframe: true
              }}
            />
          </Scene>
        </div>
      </div>
    );
  }
}

export default TerrainsPage;
