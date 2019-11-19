import {
  SELECT_ADD,
  UNSELECT_ADD
} from "../../constants/LocalPopulation/selectConstants";

export const selectAction = localPopulation => {
  return {
    type: SELECT_ADD,
    payload: localPopulation
  };
};

export const unselectAction = () => {
  return {
    type: UNSELECT_ADD
  };
};
