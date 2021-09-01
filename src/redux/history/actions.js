import {SET_HISTORY} from './actionType';
import {FETCH_HISTORY} from './actionType';

export const setHistory = (data) => ({
    type: SET_HISTORY,
    payload: data
});
  
export const fetchHistory = () => ({
    type: FETCH_HISTORY
});
