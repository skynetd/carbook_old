import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {SideMenu} from 'react-native-elements';

import Menu from './Menu';

class CarSpecs extends Component{

    state = {isOpen:true}
    render(){

        return(
            <View style = {{flexDirection: 'row'}}>
            <View><Text>Hi World</Text></View>
            <View><Text>Hi World</Text></View>
               
            <SideMenu
            isOpen = {this.state.isOpen}
    
            menu = {Menu}
            >
            
            </SideMenu>
            
            </View>
            
         
        )
    }
}

export default CarSpecs;





const styles = {
    containerStyle:{
        borderWidth:1,
        borderRadius:2,
        borderColor:'#ddd',
        borderBottomWidth:0,
        
        shadowColor:'#000',
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.1,
        shadowRadius:2,
        elevation:1,
        marginLeft:5,
        marginRight:5,
        marginTop:10,
    }
}

