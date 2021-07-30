import { createStore, combineReducers } from "redux";
import aiGameReducer from './redux/aiGame/reducer';
import blogReducer from './redux/blog/reducer';


const reducer = combineReducers({
    aiGame: aiGameReducer,
    blog: blogReducer
})

const store = createStore(reducer);
export default store;
