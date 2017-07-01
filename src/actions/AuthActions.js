import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {
    EMAIL_LOGIN, 
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    REGISTER_USER,
    REGISTER_USER_SUCCESS, 
    REGISTER_USER_FAIL, 
    MODAL_OFF
    
} from './types';

export const emailLogin = ({prop, value}) =>{
    return{
        type: EMAIL_LOGIN, 
        payload: {prop, value}
    }
}

export const loginUser = ({email, password}) =>{
    return (dispatch) => {
        dispatch ({type: LOGIN_USER})
        
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess (dispatch, user))
            .catch(()=> loginUserFail(dispatch))
    }
    
}

const loginUserSuccess = (dispatch, user) =>{
    dispatch({
        type: LOGIN_USER_SUCCESS, 
        payload: user
    })
    Actions.secondary();
}

const loginUserFail = (dispatch) =>{
    dispatch({
        type: LOGIN_USER_FAIL
    })
}

export const registerUser = ({email, password}) =>{
    return (dispatch) => {
        dispatch ({type: REGISTER_USER})
        
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => registerUserSuccess (dispatch, user))
            .catch(()=> registerUserFail(dispatch))
    }
}

const registerUserSuccess = (dispatch, user) =>{
    dispatch({
        type: REGISTER_USER_SUCCESS, 
        payload: user
    })
}

const registerUserFail = (dispatch) =>{
    dispatch({
        type: REGISTER_USER_FAIL
    })
}

export const modalOff = () =>{
    return{
        type: MODAL_OFF        
    }
}