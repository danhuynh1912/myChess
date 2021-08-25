import { SET_ARTICLES } from './actionType';

const articlesInitState = {
    lessons: [],
}

const articlesReducer = (state = articlesInitState, action) => {
    switch(action.type) {
        case SET_ARTICLES: {
            return {
                ...state,
                articles: action.payload,
            }
        }
        default: {
            return state;
        }
    }
}

export default articlesReducer;