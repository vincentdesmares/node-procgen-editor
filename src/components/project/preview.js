//@flow
import React, { Component } from "react";

class ProjectPreview extends Component {
  render() {
    return (
      <a
        className="db mw5 black link dim fl w-20 pa2"
        title="Frank Ocean's Blonde on Apple Music"
        href="/projects/1"
      >

        <img
          className="db ba b--black-10"
          alt="Frank Ocean Blonde Album Cover"
          src="/assets/mack-sztaba-the-hunt.jpg"
        />

        <dl className="mt2 f6 lh-copy">
          <dt className="clip">Title</dt>
          <dd className="ml0 fw9">The hunt</dd>
          <dt className="clip">Artist</dt>
          <dd className="ml0 gray">last edit: 22 Jan</dd>
        </dl>
      </a>
    );
  }
}

export default ProjectPreview;
