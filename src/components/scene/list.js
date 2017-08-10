//@flow
import React, { Component } from "react";
import ScenePreview from "./preview";

class SceneList extends Component {
  render() {
    return (
      <div>
        <ScenePreview />
        <ScenePreview />
        <ScenePreview />
        <ScenePreview />
        <ScenePreview />
        <ScenePreview />
      </div>
    );
  }
}

export default SceneList;
