import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import { localPopulationAddAction, localPopulationCleanAddAction } from '../../redux/actions/LocalPopulation/localPopulationActions';
import { URL_GET_HEROES } from '../../utils/constants';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        heroes: null
    };
  }


  componentWillMount() {
    const { localPopulationAddAction, localPopulationCleanAddAction } = this.props;
    fetch(URL_GET_HEROES, { method: 'GET', mode: 'cors',cache: 'no-store'})
        .then(response => {
            return response.json();
        })
        .catch(error => {
          localPopulationCleanAddAction();
        })
        .then(response => {
          localPopulationAddAction(response.Brastlewark);
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
  localPopulation: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    localPopulation: state.localPopulation,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      localPopulationAddAction: (localPopulation) => {dispatch(localPopulationAddAction(localPopulation));},
      localPopulationCleanAddAction: () => {dispatch(localPopulationCleanAddAction());},
  }
}   

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);