import axios from './apiClient';

export const getListFriend = () => axios.get('api/get-list-friends');

export const getAllEvents = () => axios.get('api/spreadsheets/get-all-events');

export const getAllRules = () => axios.get('api/spreadsheets/get-all-rules');

export const createNewRule = (data) => axios.post('api/spreadsheets/create-new-rule', data);

export const createEventType = (data) => axios.post('api/spreadsheets/create-event-type', data);

export const createEvent = (data) => axios.post('api/spreadsheets/create-event', data);
