import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//Actions
import {
  localPopulationAddAction,
  localPopulationCleanAddAction
} from "../../redux/actions/LocalPopulation/localPopulationActions";
import {
  selectAction,
  unselectAction
} from "../../redux/actions/LocalPopulation/selectActions";
import {
  showErrorAction,
  showInfoAction
} from "../../redux/actions/Shared/Notification/notificationActions";

import { URL_GET_CITIZEN, GET_HEADER } from "../../utils/constants";
import isEmpty from "lodash/isEmpty";

import { Table } from "./Table/TableComponent";
import { Menu } from "./Menu/MenuComponent";

export class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: -1
    };
  }

  componentWillMount() {
    const {
      unselectAction,
      localPopulationAddAction,
      localPopulationCleanAddAction,
      showErrorAction,
      showInfoAction
    } = this.props;

    fetch(URL_GET_CITIZEN, GET_HEADER)
      .then(response => {
        unselectAction();
        return response.json();
      })
      .catch(error => {
        showErrorAction("Error when try to get Local Population.");
        localPopulationCleanAddAction();
      })
      .then(response => {
        localPopulationAddAction(response);
        showInfoAction('[HELP] Select one and press "Details" button.');
      });
  }

  onClick = (e, t, rowInfo) => {
    e.preventDefault();
    const { selectAction } = this.props;
    this.setState({
      index: rowInfo.index
    });
    selectAction(rowInfo.original);
  };

  onClickDetails = () => {
    const { selectedLocalPopulation, showErrorAction, history } = this.props;
    if (isEmpty(selectedLocalPopulation)) {
      showErrorAction("Please select a citizen first.");
    } else {
      history.push("/citizen/details");
    }
  };

  render() {
    const { localPopulation } = this.props;
    return (
      <div>
        <Menu onClickDetails={this.onClickDetails} />
        <Table
          index={this.state.index}
          localPopulationList={localPopulation}
          onClick={this.onClick}
        />
      </div>
    );
  }
}

HomeContainer.propTypes = {
  localPopulation: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    localPopulation: state.localPopulation.Brastlewark,
    selectedLocalPopulation: state.selectedLocalPopulation
  };
};

const mapDispatchToProps = dispatch => {
  return {
    localPopulationAddAction: localPopulation => {
      dispatch(localPopulationAddAction(localPopulation));
    },
    localPopulationCleanAddAction: () => {
      dispatch(localPopulationCleanAddAction());
    },
    selectAction: localPopulation => {
      dispatch(selectAction(localPopulation));
    },
    unselectAction: () => {
      dispatch(unselectAction());
    },
    showInfoAction: txt => {
      dispatch(showInfoAction(txt));
    },
    showErrorAction: txt => {
      dispatch(showErrorAction(txt));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
