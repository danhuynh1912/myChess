import { createStore, combineReducers } from "redux";
import aiGameReducer from './redux/aiGame/reducer';


const reducer = combineReducers({
    aiGame: aiGameReducer
})

const store = createStore(reducer);
export default store;
