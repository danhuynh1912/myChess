import { ADD_BLOG } from './actionType';
import { SET_BLOG, SET_REACT_BLOG } from './actionType';

const blogInitState = {
    blogs: [],
    reacts: [],
}

const blogReducer = (state = blogInitState, action) => {
    switch(action.type) {
        case ADD_BLOG: {
            return {
                ...state,
                blogs: [
                    action.payload,
                    ...state.blogs
                ]
            }
        }
        case SET_BLOG: {
            debugger;
            return {
                ...state,
                blogs: action.payload,
            }
        }

        case SET_REACT_BLOG: {
            return {
                ...state,
                reacts: action.payload,
            }
        }

        default: {
            return state;
        }
    }
}

export default blogReducer;