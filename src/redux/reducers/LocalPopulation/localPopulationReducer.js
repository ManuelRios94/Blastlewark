import initialState from "../../initialState";
import {
  LOCAL_POPULATION_CLEAN_ADD,
  LOCAL_POPULATION_ADD
} from "../../constants/LocalPopulation/localPopulationConstants";
import cloneDeep from "lodash/cloneDeep";
import merge from "lodash/merge";

export const localPopulationReducer = (
  state = initialState.localPopulation,
  action
) => {
  switch (action.type) {
    case LOCAL_POPULATION_ADD:
      let new_state = cloneDeep(state);
      return merge(new_state, action.payload);
    case LOCAL_POPULATION_CLEAN_ADD:
      return {};
    default:
      return state;
  }
};
