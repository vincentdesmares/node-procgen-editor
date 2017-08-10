//@flow
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SceneStep from "../scene/step";

class ScenePage extends Component {
  render() {
    const steps = [
      {
        batchId: 12,
        order: 1,
        status: "done",
        jobs: [
          {
            id: 12,
            status: "done",
            type: "heightmap"
          }
        ]
      },
      {
        batchId: 13,
        order: 2,
        status: "processing",
        jobs: [
          {
            id: 13,
            status: "scheduled",
            type: "zoning"
          },
          {
            id: 17,
            status: "scheduled",
            type: "zoning"
          },
          {
            id: 18,
            status: "scheduled",
            type: "zoning"
          }
        ]
      },
      {
        batchId: 12,
        order: 3,
        jobs: [
          {
            id: 15,
            status: "done",
            type: "placement"
          }
        ]
      },
      {
        batchId: null,
        order: 4,
        jobs: [
          {
            id: null,
            status: null,
            type: "entity"
          }
        ]
      }
    ];
    return (
      <div className="pa2">
        <span>Welcome to project {this.props.match.params.projectId} </span>
        <span>Scene {this.props.match.params.sceneId} </span>
        <Link
          to="/project/new"
          title="Will open the project creation page"
          className="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma1 tc br2 pa1 fr mr2 mt2"
        >
          <i className="material-icons">play_arrow</i>
          <span className="f6 ml1 pr2">Run generation</span>
        </Link>
        <div className="cb" />
        <div className="ba b--black relative mt3">
          <div
            className="bg-light-gray absolute z-0"
            style={{
              width: "30%",
              height: "100%"
            }}
          />
          <div className="z-1 relative pa1 ml2">0%</div>
        </div>
        <div className="cb" />
        <div className="mt3 ba b--black flex">
          {steps.map((step, index) => <SceneStep key={index} step={step} />)}
          <div className="cb" />
        </div>
      </div>
    );
  }
}

export default ScenePage;
