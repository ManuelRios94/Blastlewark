import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import isEmpty from 'lodash/isEmpty';

import { Details } from './DetailsComponent';

export class DetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  componentWillMount() {
    const { selectedLocalPopulation, history } = this.props;

    if( isEmpty(selectedLocalPopulation) ) {
        history.push('/');
    }
  }
 
  render() {
    const { selectedLocalPopulation } = this.props;
    return (
      <div>
        <Details citizen={selectedLocalPopulation}/>
      </div>
    );
  }
}

DetailsContainer.propTypes = {
    selectedLocalPopulation: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    selectedLocalPopulation: state.selectedLocalPopulation,
  };
}

const mapDispatchToProps = () => {
  return {
  }
}   

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);