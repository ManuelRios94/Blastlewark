import initialState from '../../../initialState';
import { SHOW_ERROR, SHOW_INFO, SHOW_SUCCESS, SHOW_WARNING } from '../../../constants/Shared/Notification/notificationConstants';


export const notificationReducer = (state = initialState.notification, action) => {
    var new_state
    switch (action.type) {
        case SHOW_ERROR:
            new_state = {type: SHOW_ERROR, text: action.payload}
            return new_state;
        case SHOW_INFO:
            new_state = {type: SHOW_INFO, text: action.payload}
            return new_state;
        case SHOW_SUCCESS:
            new_state = {type: SHOW_SUCCESS, text: action.payload}
            return new_state;
        case SHOW_WARNING:
            new_state = {type: SHOW_WARNING, text: action.payload}
            return new_state;
        default:
            return state;
    }
}