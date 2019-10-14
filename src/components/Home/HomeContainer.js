import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import { localPopulationAddAction, localPopulationCleanAddAction } from '../../redux/actions/LocalPopulation/localPopulationActions';
import { selectAction, unselectAction } from '../../redux/actions/LocalPopulation/selectActions';
import { URL_GET_HEROES } from '../../utils/constants';

import { Table } from './Table/TableComponent';
import { Menu } from './Menu/MenuContainer';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: -1
    };
    this.onClick = this.onClick.bind( this );
  }


  componentWillMount() {
    const { unselectAction, localPopulationAddAction, localPopulationCleanAddAction } = this.props;
    unselectAction();
    fetch(URL_GET_HEROES, { method: 'GET', mode: 'cors',cache: 'no-store'})
        .then(response => {
            return response.json();
        })
        .catch(error => {
          localPopulationCleanAddAction();
        })
        .then(response => {
          localPopulationAddAction(response);
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
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      localPopulationAddAction: (localPopulation) => {dispatch(localPopulationAddAction(localPopulation));},
      localPopulationCleanAddAction: () => {dispatch(localPopulationCleanAddAction());},
      selectAction: (localPopulation) => {dispatch(selectAction(localPopulation))},
      unselectAction: () => {dispatch(unselectAction())},
  }
}   

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);