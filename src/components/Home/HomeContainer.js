import React, { Component } from 'react';
import { URL_GET_HEROES } from '../../utils/constants';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        heroes: null
    };
  }


  componentWillMount() {
    fetch(URL_GET_HEROES, { method: 'GET', mode: 'cors',cache: 'no-store'})
        .then(response => {
            return response.json();
        })
        .catch(error => {
            this.setState({heroes: null});
        })
        .then(response => {
            this.setState({heroes: response});
        })
  }

 
  render() {
    return (
      <div>
        Hola
      </div>
    );
  }
}

HomeContainer.propTypes = {

};  

export default HomeContainer;