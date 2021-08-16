import { ADD_FRIEND } from './actionType';
import { UNFRIEND } from './actionType';
import { ACCEPT } from './actionType';

const friendInitState = {
    friendRequests: [],
    friends: []
}

const friendsReducer = (state = friendInitState, action) => {
    switch(action.type) {
        case ADD_FRIEND: {
            return {
                ...state,
                friendRequests: [
                    action.payload,
                    ...state.blogs
                ]
            }
        }
        case UNFRIEND: {
            return {
                ...state,
                friends: [
                    ...state.friends.slice(0, action.payload),
                    ...state.friends.slice(action.payload + 1)
                ]
            }
        }
        case ACCEPT: {

            return {
                ...state,
                friendRequests: [
                    ...state.friendRequests.slice(0, action.payload.index),
                    ...state.friendRequests.slice(action.payload.index + 1)
                ],
                friends: [
                    action.payload.item,
                    ...state.friends
                ]
            }
        }
        default: {
            return state;
        }
    }
}

export default friendsReducer;