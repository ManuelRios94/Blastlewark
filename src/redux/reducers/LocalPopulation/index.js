import { localPopulationReducer } from "./localPopulationReducer";
import { selectReducer } from "./selectReducer";

export const reducerLocalPopulation = {
  localPopulation: localPopulationReducer,
  selectedLocalPopulation: selectReducer
};
