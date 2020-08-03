import * as actionTypes from './../actions/actionTypes'
import { updateObject } from '../../../../stores/utility';

const initalState = {
    isOpen: false
};

const layoutReducer = (state = initalState, action) => {
    switch (action.type) {

        case actionTypes.SET_LAYOUT_OPEN:
            return updateObject(state, { isOpen: action.value });

        default:
            return state;

    }
}

export default layoutReducer;