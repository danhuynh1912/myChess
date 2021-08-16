import { ADD_FRIEND } from './actionType';
import { UNFRIEND } from './actionType';
import { ACCEPT } from './actionType';

export const addFriend = (item) => ({
    type: ADD_FRIEND,
    payload: item
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