import { ADD_BLOG } from './actionType';
import { LIKE_BLOG } from './actionType';
import { DISLIKE_BLOG } from './actionType';
import {FETCH_BLOG } from './actionType';
import {SET_BLOG, SET_REACT_BLOG, FETCH_REACT_BLOG } from './actionType';

export const addBlog = (item) => ({
    type: ADD_BLOG,
    payload: item
})

export const likeBlog = (item) => ({
    type: LIKE_BLOG,
    payload: item
})

export const disLikeBlog = (index) => ({
    type: DISLIKE_BLOG,
    payload: index
})

export const setBlog = (data) => ({
    type: SET_BLOG,
    payload: data
});
  
export const fetchBlog = () => ({
    type: FETCH_BLOG,
});

export const setReactBlog = (data) => ({
    type: SET_REACT_BLOG,
    payload: data,
})

export const fetchReactBlog = () => ({
    type: FETCH_REACT_BLOG,
})
