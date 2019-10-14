import { SHOW_ERROR, SHOW_INFO, SHOW_SUCCESS, SHOW_WARNING } from '../../../constants/Shared/Notification/notificationConstants'

export function showErrorAction(txt) {
    return {
        type: SHOW_ERROR, 
        payload: txt
    };

}

export function showInfoAction(txt) {
    return {
        type: SHOW_INFO, 
        payload: txt
    };

}

export function showSuccessAction(txt) {
    return {
        type: SHOW_SUCCESS, 
        payload: txt
    };

}

export function showWarningAction(txt) {
    return {
        type: SHOW_WARNING, 
        payload: txt
    };

}