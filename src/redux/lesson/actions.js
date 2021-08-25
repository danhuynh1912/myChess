import {SET_LESSONS} from './actionType';
import {FETCH_LESSONS} from './actionType';

export const setLessons = (data) => ({
    type: SET_LESSONS,
    payload: data
});
  
export const fetchLessons = () => ({
    type: FETCH_LESSONS
});
