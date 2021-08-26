import { ADD_BLOG } from './actionType';
import { DISLIKE_BLOG } from './actionType';
import { LIKE_BLOG } from './actionType';
import { SET_BLOG } from './actionType';

const blogInitState = {
    blogs: [],
    liked: []
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
                liked: [
                    action.payload,
                    ...state.liked
                ]
            }
        }
        case DISLIKE_BLOG: {

            return {
                ...state,
                liked: [
                    ...state.liked.slice(0, action.payload),
                    ...state.liked.slice(action.payload + 1)
                ]
            }
        }
        case SET_BLOG: {
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

export default blogReducer;