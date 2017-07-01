import React from 'react';
import {Router, Scene, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import CarList from './components/CarList';
import CarSpecs from './components/CarSpecs';

const RouterComponent = () =>{

    return(
        <Router sceneStyle = {{paddingTop: 65}}>
            <Scene key = "main">
                <Scene key = "loginForm" component = {LoginForm} title = "Car Book" />
            </Scene>

            <Scene key ="secondary">
                <Scene key = "carList" component={CarList} title = "My Cars" initial />
                <Scene key = "carSpecs" component={CarSpecs} title = "Specs" />
            </Scene>
        </Router>
    )
}

export default RouterComponent;
