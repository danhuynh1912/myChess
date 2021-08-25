import {SET_ARTICLES} from './actionType';
import {FETCH_ARTICLES} from './actionType';

export const setArticles = (data) => ({
    type: SET_ARTICLES,
    payload: data
});
  
export const fetchArticles = () => ({
    type: FETCH_ARTICLES
});
