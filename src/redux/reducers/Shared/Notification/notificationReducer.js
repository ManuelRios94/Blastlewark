import initialState from "../../../initialState";
import {
  SHOW_ERROR,
  SHOW_INFO,
  SHOW_SUCCESS,
  SHOW_WARNING
} from "../../../constants/Shared/Notification/notificationConstants";
import cloneDeep from "lodash/cloneDeep";
import merge from "lodash/merge";

export const notificationReducer = (
  state = initialState.notification,
  action
) => {
  let new_state;
  switch (action.type) {
    case SHOW_ERROR:
      new_state = cloneDeep(state);
      return merge(new_state, {
        type: SHOW_ERROR,
        text: action.payload
      });
    case SHOW_INFO:
      new_state = cloneDeep(state);
      return merge(new_state, {
        type: SHOW_INFO,
        text: action.payload
      });
    case SHOW_SUCCESS:
      new_state = cloneDeep(state);
      return merge(new_state, {
        type: SHOW_SUCCESS,
        text: action.payload
      });
    case SHOW_WARNING:
      new_state = cloneDeep(state);
      return merge(new_state, {
        type: SHOW_WARNING,
        text: action.payload
      });
    default:
      return state;
  }
};
