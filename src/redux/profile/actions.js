import { ADD_BLOG } from './actionType';
import { LIKE_BLOG } from './actionType';

export const addGame = (item) => ({
    type: ADD_BLOG,
    payload: item
})

export const finishGame = (item) => ({
    type: LIKE_BLOG,
    payload: item
})