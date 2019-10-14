import { combineReducers } from 'redux';

import { reducerLocalPopulation } from './LocalPopulation/index';
import { reducersShared } from './Shared/index';

const allReducers = Object.assign({}, 
    reducerLocalPopulation,
    reducersShared,
    );

export const reducers = combineReducers(
    allReducers
);