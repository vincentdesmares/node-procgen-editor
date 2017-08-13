//@flow
import React, { Component } from "react";

class Slot extends Component {
  render() {
    let statusIcon = null;
    let backgroundColor = "bg-white";
    switch (this.props.slot.status) {
      case "processing":
        statusIcon = <i className="material-icons rotating">refresh</i>;
        backgroundColor = "bg-light-yellow";
        break;
      case "scheduled":
        statusIcon = <i className="material-icons">list</i>;
        break;
      case "done":
        statusIcon = <i className="material-icons">check</i>;
        backgroundColor = "bg-light-green";
        break;
      case "failed":
        statusIcon = <i className="material-icons">error</i>;
        backgroundColor = "bg-light-red";
        break;
      default:
        break;
    }

    return (
      <div className={`ba b--blue ma1 pa1 ${backgroundColor}`}>
        {statusIcon}
        Generate {this.props.slot.type}
      </div>
    );
  }
}

export default Slot;
