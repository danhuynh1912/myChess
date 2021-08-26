import { createStore, combineReducers, applyMiddleware,  } from "redux";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/index";

import aiGameReducer from './redux/aiGame/reducer';
import blogReducer from './redux/blog/reducer';
import userReducer from './redux/user/reducer';
import lessonsReducer from './redux/lesson/reducer';
import articlesReducer from "./redux/articles/reducer";
import listRequestFriends from "./redux/friend/reducer";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    aiGame: aiGameReducer,
    blog: blogReducer,
    user: userReducer,
    lessons: lessonsReducer,
    articles: articlesReducer,
    listRequestFriends: listRequestFriends,
})

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;