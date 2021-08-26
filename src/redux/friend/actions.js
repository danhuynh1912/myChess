import { ADD_FRIEND } from './actionType';
import { FETCH_FRIEND } from './actionType';
import { UNFRIEND } from './actionType';
import { ACCEPT } from './actionType';
import { GET_LIST_REQUEST_FRIENDS } from './actionType';
import { FETCH_LIST_REQUEST_FRIENDS } from './actionType';

export const addFriend = (data) => ({
    type: ADD_FRIEND,
    payload: data
})

export const fetchFriend = () => ({
    type: FETCH_FRIEND,
})

export const unfriend = (index) => ({
    type: UNFRIEND,
    payload: index
})

export const acceptFriend = (item, index) => ({
    type: ACCEPT,
    payload: {
        item: item,
        index: index
    }
})

export const getListRequestFriends = (data) => ({
    type: GET_LIST_REQUEST_FRIENDS,
    payload: data
});
  
export const fetchListRequestFriends = () => ({
    type: FETCH_LIST_REQUEST_FRIENDS
});
