import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card, CardSection, Input, Button, Spinner, ConfirmRegister} from './common';
import {connect} from 'react-redux';
import {emailLogin, loginUser, registerUser, modalOff} from '../actions';
import reducers from '../reducers';

class LoginForm extends Component{
    
    loginButton(){
        if (this.props.loginLoading) {
            return <Spinner size="large"/>
        }
        
        return(
            <Button onPress = {this.onLoginPress.bind(this)}>
                Login
            </Button>
        )
    }
    
     registerButton(){
        if (this.props.registerLoading) {
            return <Spinner size="large"/>
        }
        
        return(
            <Button onPress = {this.onRegisterPress.bind(this)}>
                Register
            </Button>
        )
    }
    
    onLoginPress(){
        const {email, password} = this.props;
        this.props.loginUser({email, password})
    }
    
    onRegisterPress(){
        const {email, password} = this.props;
        this.props.registerUser({email, password})
    }

     onModalPress(){
         this.props.modalOff();
    }
    
    render(){
        return(
            <Card style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <CardSection>
                    <Input
                        label = 'Email:'
                        placeholder = 'username@gmail.com'
                        value = {this.props.email}
                        onChangeText = {value => this.props.emailLogin({prop:'email', value})}
                    />
                </CardSection>
                    
                <CardSection>
                    <Input
                        secureTextEntry
                        label = 'Password:'
                        placeholder = 'password'
                        value = {this.props.password}
                        onChangeText = {value => this.props.emailLogin({prop:'password', value})}
                    />
                </CardSection>
            
                <CardSection>
                    {this.loginButton()}
                </CardSection>
                    
                <CardSection>
                    {this.registerButton()}
                </CardSection>    
                    
                <ConfirmRegister
                    visible = {this.props.showModal}
                    onAccept = {this.onModalPress.bind(this)}
                >
                    Email has successfully been registered.
                </ConfirmRegister>
                    
            </Card>
        )
    }
}

const mapStateToProps = (state) =>{
    const {email, password, loginLoading, registerLoading, showModal} = state.auth;
    return{email, password, loginLoading, registerLoading, showModal};
}

export default connect(mapStateToProps, {emailLogin, loginUser, registerUser, modalOff}) (LoginForm);
