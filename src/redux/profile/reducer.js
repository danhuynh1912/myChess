import { ADD_BLOG } from './actionType';
import { LIKE_BLOG } from './actionType';

const blogInitState = {
    blogs: []
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
        case LIKE_BLOG: {
            return {
                ...state,
                blogs: [
                    action.payload,
                    ...state.blogs.slice(1)
                ]
            }
        }
        default: {
            return state;
        }
    }
}

export default blogReducer;