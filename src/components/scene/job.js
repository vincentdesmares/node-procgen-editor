//@flow
import React, { Component } from "react";

class Step extends Component {
  render() {
    let statusIcon = null;
    switch (this.props.job.status) {
      case "processing":
        statusIcon = <i className="material-icons rotating">refresh</i>;
        break;
      case "scheduled":
        statusIcon = <i className="material-icons">list</i>;
        break;
      case "done":
        statusIcon = <i className="material-icons">check</i>;
        break;
      default:
        break;
    }

    return (
      <div className="ba b--blue ma1 pa1">
        {statusIcon}
        Generate {this.props.job.type}
      </div>
    );
  }
}

export default Step;
