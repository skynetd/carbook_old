import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback,View} from 'react-native';
import {CardSection} from './common';
import {Actions} from 'react-native-router-flux';

class ListItem extends Component{
    
    onRowPress(){
       
        <View></View>
    }
    
    render(){
        const{year, make , model}= this.props.car;
        
        return(
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style = {styles.titleStyle}>{year}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default ListItem;

const styles={
    titleStyle:{
        fontSize:18, 
        paddingLeft: 15
    }
}