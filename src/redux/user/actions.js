import {SET_USERS} from './actionType';
import {FETCH_USERS} from './actionType';
import {GET_USER} from './actionType';
import {SEND_FRIENDS} from './actionType';

export const setUsers = (data) => ({
    type: SET_USERS,
    payload: data
});
  
export const fetchUsers = () => ({
    type: FETCH_USERS
});

export const getUser = (item) => ({
    type: GET_USER,
    item,
});

export const senRequestFriend = (id) => ({
    type: SEND_FRIENDS,
    payload:id
})