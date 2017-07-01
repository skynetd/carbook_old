import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import Router from './Router';
import reducers from './reducers';

class App extends Component {
    
    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyDRaF8ISCmbI86JGMawv6dCU-OtQwNT-fM',
            authDomain: 'carbook-5278c.firebaseapp.com',
            databaseURL: 'https://carbook-5278c.firebaseio.com',
            projectId: 'carbook-5278c',
            storageBucket: 'carbook-5278c.appspot.com',
            messagingSenderId: '1008370816493'
        })
    }
    
    
    render(){
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return(
            <Provider store = {store}>
                <Router/>
            </Provider>
        )
    }
}

export default App;