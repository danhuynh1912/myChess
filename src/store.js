import { createStore, combineReducers, applyMiddleware,  } from "redux";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/index";

import aiGameReducer from './redux/aiGame/reducer';
import blogReducer from './redux/blog/reducer';
import userReducer from './redux/user/reducer';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    aiGame: aiGameReducer,
    blog: blogReducer,
    user: userReducer,
})

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;