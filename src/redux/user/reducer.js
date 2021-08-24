import { SET_USERS } from './actionType';
import { GET_USER } from './actionType';

const userInitState = {
    user: [],
    _user: []
}

const userReducer = (state = userInitState, action) => {
    switch(action.type) {
        case SET_USERS: {
            return {
                ...state,
                user: action.payload,
            }
        }
        case GET_USER: {
            state._user = []
            return {
               ...state,
               _user: action.payload, 
            }
        }
        default: {
            return state;
        }
    }
}

export default userReducer;