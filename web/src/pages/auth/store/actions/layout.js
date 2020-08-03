import * as actionTypes from './actionTypes';

export const setLayoutOpen = (value) => {
    return {
        type: actionTypes.SET_LAYOUT_OPEN,
        value: value
    }
}