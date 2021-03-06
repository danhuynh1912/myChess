import { GET_FRIEND } from './actionType';
import { UNFRIEND } from './actionType';
import { ACCEPT } from './actionType';
import { GET_LIST_REQUEST_FRIENDS, GET_LIST_RECEIVED_FRIENDS, ADD_RECEIVED_FRIENDS } from './actionType';

const friendInitState = {
    friendRequests: [],
    friends: [],
    listRequestFriends: [],
    listReceivedFriends: []
}

const friendsReducer = (state = friendInitState, action) => {
    switch(action.type) {
        case GET_FRIEND: {
            return {
                ...state,
                friends:  action.payload,
            }
        }
        case UNFRIEND: {
            let index = -1;
            for (var i=0; i < state.friends.length; i++) {
                if (state.friends[i].playerID === action.id) {
                    index = i;
                }
            }
            return {
                ...state,
                friends: [
                    ...state.friends.slice(0, index),
                    ...state.friends.slice(index + 1),
                ]
            }
        }
        case ACCEPT: {
            let index = -1;
            for (var j = 0; j < state.listRequestFriends.length; j++) {
                if (state.listRequestFriends[j].playerID === action.id) {
                    index = j;
                }
            }
            return {
                ...state,
                listRequestFriends: [
                    ...state.listRequestFriends.slice(0, index),
                    ...state.listRequestFriends.slice(index + 1)
                ]
            }
        }
        case GET_LIST_REQUEST_FRIENDS: {
            return {
                ...state,
                listRequestFriends: action.payload,
            }
        }

        case GET_LIST_RECEIVED_FRIENDS: {
            return {
                ...state,
                listReceivedFriends: action.payload,
            }
        }
        case ADD_RECEIVED_FRIENDS: {
            state.listReceivedFriends.push(action.payload)
            debugger;
            return {
                ...state,
                listReceivedFriends: state.listReceivedFriends
            }
        }
        default: {
            return state;
        }
    }
}

export default friendsReducer;