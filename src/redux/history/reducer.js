import { SET_HISTORY } from './actionType';

const lessonsInitState = {
    history: [],
}

const historysReducer = (state = lessonsInitState, action) => {
    switch(action.type) {
        case SET_HISTORY: {
            return {
                ...state,
                history: action.payload,
            }
        }
        default: {
            return state;
        }
    }
}

export default historysReducer;