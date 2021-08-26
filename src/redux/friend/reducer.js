import { ADD_FRIEND } from './actionType';
import { UNFRIEND } from './actionType';
import { ACCEPT } from './actionType';
import { GET_LIST_REQUEST_FRIENDS } from './actionType';

const friendInitState = {
    friendRequests: [],
    friends: [],
    listRequestFriends: []
}

const friendsReducer = (state = friendInitState, action) => {
    switch(action.type) {
        case ADD_FRIEND: {
            return {
                ...state,
                friends:  action.payload,
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
        case GET_LIST_REQUEST_FRIENDS: {
            return {
                ...state,
                listRequestFriends: action.payload,
            }
        }
        default: {
            return state;
        }
    }
}

export default friendsReducer;