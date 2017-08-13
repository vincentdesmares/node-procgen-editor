//@flow
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SceneStep from "../scene/step";
import { gql, graphql } from "react-apollo";
import NewStepButton from "../scene/stepCreate";
import AddSlot from "../scene/addSlot";
import RunGenerationButton from "../scene/runGenerationButton";

const getQuery = gql`
  query sceneQuery($id: Int!) {
    scene(id: $id) {
      id
      name
      status
      metadata
    }
  }
`;

class ScenePage extends Component {
  render() {
    const { scene: { scene, loading } } = this.props;

    if (loading) {
      return <p>Loading ...</p>;
    }

    const { steps } = JSON.parse(scene.metadata);
    return (
      <div className="pa2">
        <h2 className="fl">{scene.name} </h2>
        <NewStepButton scene={scene} />
        <RunGenerationButton scene={scene} />
        <div className="cb" />
        <AddSlot scene={scene} />
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
        <div className="mt3 ba b--black flex overflow-x-scroll">
          {steps &&
            steps.map((step, index) => <SceneStep key={index} step={step} />)}
          <div className="cb" />
        </div>
        {scene.metadata}
      </div>
    );
  }
}

const getWithData = graphql(getQuery, {
  name: "scene",
  options: ({ match }) => ({
    variables: {
      id: match.params.sceneId
    }
  })
})(ScenePage);

export default getWithData;
