import { combineReducers } from 'redux';

import { reducerLocalPopulation } from './LocalPopulation/index';

const allReducers = Object.assign({}, 
    reducerLocalPopulation,
    );

export const reducers = combineReducers(
    allReducers
);