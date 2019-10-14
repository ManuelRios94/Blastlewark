import { LOCAL_POPULATION_ADD, LOCAL_POPULATION_CLEAN_ADD } from '../../constants/LocalPopulation/localPopulationConstants'

export const localPopulationAddAction = (localPopulation) => {
    return {
        type: LOCAL_POPULATION_ADD, 
        payload: localPopulation
    };

}


export const localPopulationCleanAddAction = () => {
    return {
        type: LOCAL_POPULATION_CLEAN_ADD
    };
}