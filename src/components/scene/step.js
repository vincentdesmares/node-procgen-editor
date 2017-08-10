//@flow
import React, { Component } from "react";
import Job from "./job";

class Step extends Component {
  render() {
    return (
      <div className="fl w-20 br b--black">
        <p className="ma1">Step {this.props.step.order}</p>
        {this.props.step.batchId &&
          <p className="ma1">Batch: {this.props.step.batchId}</p>}
        {this.props.step.jobs.map(job => <Job key={job.id} job={job} />)}
      </div>
    );
  }
}

export default Step;
