import React, { Component } from 'react';
import './PageNotFound.css';
import { Jumbotron} from 'react-bootstrap';

class PageNotFound extends Component {
  render() {
    return (
      <div className="PageNotFound">
        <Jumbotron>
          <h1>Page Not Found</h1>
          <p>
            La página que usted esta intentando acceder no existe. Por favor, corrobore que esta ingresando bien la dirección URL.
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default PageNotFound;
