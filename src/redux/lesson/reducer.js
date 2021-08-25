import { SET_LESSONS } from './actionType';

const lessonsInitState = {
    lessons: [],
}

const lessonsReducer = (state = lessonsInitState, action) => {
    switch(action.type) {
        case SET_LESSONS: {
            return {
                ...state,
                lessons: action.payload,
            }
        }
        default: {
            return state;
        }
    }
}

export default lessonsReducer;