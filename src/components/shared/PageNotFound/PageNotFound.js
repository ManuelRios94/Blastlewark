import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";

class PageNotFound extends Component {
  render() {
    return (
      <div className="PageNotFound">
        <Jumbotron>
          <h1>Page Not Found</h1>
          <p>
            The page you are trying to access does not exist. Please check that
            you are entering the URL address correctly.
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default PageNotFound;
