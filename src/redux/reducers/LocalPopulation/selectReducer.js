import initialState from "../../initialState";
import {
  SELECT_ADD,
  UNSELECT_ADD
} from "../../constants/LocalPopulation/selectConstants";
import cloneDeep from "lodash/cloneDeep";
import merge from "lodash/merge";

export const selectReducer = (
  state = initialState.selectedLocalPopulation,
  action
) => {
  switch (action.type) {
    case SELECT_ADD:
      let new_state = cloneDeep(state);
      return merge(new_state, action.payload);
    case UNSELECT_ADD:
      return {};
    default:
      return state;
  }
};
