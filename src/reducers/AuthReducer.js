import {
    EMAIL_LOGIN,
    LOGIN_USER, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL,
    REGISTER_USER,
    REGISTER_USER_SUCCESS, 
    REGISTER_USER_FAIL,
    MODAL_OFF
} from '../actions/types';

const INITIAL_STATE = {
    email:'', 
    password:'',
    loginLoading: false,
    registerLoading: false,
    showModal:false,
    error:'',
    user:null
}

export default (state= INITIAL_STATE, action) =>{
    switch (action.type){
        case EMAIL_LOGIN: 
            return{...state, [action.payload.prop]:action.payload.value};
        case LOGIN_USER:
            return{...state, loginLoading:true, };
        case LOGIN_USER_SUCCESS:
            return{...state, user:action.payload, password:'', loginLoading: false};
        case LOGIN_USER_FAIL:
            return{...state, password:'', loginLoading:false}
        case REGISTER_USER:
            return{...state, registerLoading:true};
        case REGISTER_USER_SUCCESS:
            return{...state, email:'', password:'', registerLoading: false, showModal:true};
        case REGISTER_USER_FAIL:
            return{...state, password:'', registerLoading:false};
        case MODAL_OFF:
            return{...state, showModal:false}
        default:
            return state;
    }
}
