import { GET_FRIEND, FETCH_FRIEND, UNFRIEND, ACCEPT, GET_LIST_REQUEST_FRIENDS, GET_LIST_RECEIVED_FRIENDS } from './actionType';
import { FETCH_LIST_REQUEST_FRIENDS, FETCH_LIST_RECEIVED_FRIENDS, ADD_RECEIVED_FRIENDS } from './actionType';

export const addFriend = (data, item) => ({
    type: GET_FRIEND,
    payload: {data: data, item: item }
})

export const fetchFriend = () => ({
    type: FETCH_FRIEND,
})

export const unfriend = (id) => ({
    type: UNFRIEND,
    id 
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

export const getListReceivedFriends = (data) => ({
    type: GET_LIST_RECEIVED_FRIENDS,
    payload: data
});
  
export const fetchListReceivedFriends = () => ({
    type: FETCH_LIST_RECEIVED_FRIENDS
});

export const addReceviedFriends = (item) => ({
    type: ADD_RECEIVED_FRIENDS,
    payload: item
})

