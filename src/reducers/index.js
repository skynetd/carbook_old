import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import CarInfoReducer from './CarInfoReducer';

export default combineReducers({
    auth:AuthReducer,
    carInfo:CarInfoReducer
})