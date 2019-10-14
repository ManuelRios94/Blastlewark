import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

//Actions
import { localPopulationAddAction, localPopulationCleanAddAction } from '../../redux/actions/LocalPopulation/localPopulationActions';
import { selectAction, unselectAction } from '../../redux/actions/LocalPopulation/selectActions';
import { showErrorAction, showInfoAction } from '../../redux/actions/Shared/Notification/notificationActions'

import { URL_GET_HEROES } from '../../utils/constants';
import isEmpty from 'lodash/isEmpty';

import { Table } from './Table/TableComponent';
import { Menu } from './Menu/MenuComponent';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: -1
    };
    this.onClick = this.onClick.bind( this );
    this.onClickDetails = this.onClickDetails.bind( this );
  }


  componentWillMount() {
    const { 
      unselectAction,
      localPopulationAddAction,
      localPopulationCleanAddAction,
      showErrorAction,
      showInfoAction 
    } = this.props;

    unselectAction();
    fetch(URL_GET_HEROES, { method: 'GET', mode: 'cors',cache: 'no-store'})
        .then(response => {
            return response.json();
        })
        .catch(error => {
          showErrorAction('Error when try to get Local Population.');
          localPopulationCleanAddAction();
        })
        .then(response => {
          localPopulationAddAction(response);
          showInfoAction('You can select one to see details.');
        })
  }

  onClick(e, t, rowInfo){
    e.preventDefault()
    const { selectAction } = this.props;
    this.setState({
      index: rowInfo.index
    })
    selectAction(rowInfo.original);
  }

  onClickDetails() {
    const { selectedLocalPopulation, showErrorAction } = this.props;
    if (isEmpty(selectedLocalPopulation) ) {
      showErrorAction('Please select a citizen.');
    }
    
  }

 
  render() {
    const { localPopulation } = this.props;
    return (
      <div>
        <Menu onClickDetails={this.onClickDetails}/>
        <Table index={this.state.index} localPopulationList={localPopulation} onClick={this.onClick}/>
      </div>
    );
  }
}

HomeContainer.propTypes = {
  localPopulation: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    localPopulation: state.localPopulation.Brastlewark,
    selectedLocalPopulation: state.selectedLocalPopulation,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      localPopulationAddAction: (localPopulation) => {dispatch(localPopulationAddAction(localPopulation));},
      localPopulationCleanAddAction: () => {dispatch(localPopulationCleanAddAction());},
      selectAction: (localPopulation) => {dispatch(selectAction(localPopulation))},
      unselectAction: () => {dispatch(unselectAction())},
      showInfoAction: (txt) => {dispatch(showInfoAction(txt))},
      showErrorAction: (txt) => {dispatch(showErrorAction(txt))}
  }
}   

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);