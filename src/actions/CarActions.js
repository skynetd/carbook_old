import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {
    CAR_ADD,
    CAR_CREATE,
    CAR_FETCH_SUCCESS
} from './types';

export const carAdd = ({ prop, value }) => {
    return {
        type: CAR_ADD,
        payload: { prop, value }
    }
}

export const carCreate = ({year, make, model}) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/cars`)
            .push({year, make, model})
            .then(()=>{
                dispatch(
                    {type: CAR_CREATE}
                )
            })
    }
}

export const carFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/cars`)
            .on('value', snapshot => {
                dispatch({ type: CAR_FETCH_SUCCESS, payload: snapshot.val()})
        })
    }
}
