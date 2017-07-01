import {
    CAR_ADD,
    CAR_CREATE,
    CAR_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    year: '',
    make: '',
    model: ''
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type){
        case CAR_ADD:
            return { ...state, [action.payload.prop]: action.payload.value };
        case CAR_CREATE:
            return { ...state };
        case CAR_FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}
