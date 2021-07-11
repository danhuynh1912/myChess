import { ADD_GAME } from './actionType';
import { FINISH_GAME } from './actionType';

export const addGame = (item) => ({
    type: ADD_GAME,
    payload: item
})

export const finishGame = (item) => ({
    type: FINISH_GAME,
    payload: item
})