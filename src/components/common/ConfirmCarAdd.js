import React from 'react';
import {Text, View, Modal} from 'react-native';
import {CardSection} from './CardSection';
import {Button} from './Button';
import {Input} from './Input';

const ConfirmCarAdd = ({visible}) =>{
    const {containerStyle, textStyle, cardSectionStyle}= styles;
    
    return(
        
        <Modal
            visible = {visible}
            transparent
            animationType="slide"
            onRequestClose={()=>{}}
        >
            <View style={containerStyle}>
                <CardSection style = {cardSectionStyle}>
                   <Input
                        label = 'Year:'    
                        placeholder = '1967'
                        value = {this.props.year}
                        onChangeText = { value => this.props.carAdd({prop:'year', value})}
                    />
                </CardSection>

                <CardSection style = {cardSectionStyle}>
                    <Input
                        label = 'Make:'    
                        placeholder = 'Ford'
                        value = {this.props.make}
                        onChangeText = { value => this.props.carAdd({prop:'make', value})}
                    />
                </CardSection>

                <CardSection style = {cardSectionStyle}>
                    <Input
                        label = 'Model:'    
                        placeholder = 'Mustang'
                        value = {this.props.model}
                        onChangeText = { value => this.props.carAdd({prop:'model', value})}
                    />
                </CardSection>

                <CardSection>
                    <Button onPress = {this.onSubmitPress.bind(this)}>Submit</Button>
                </CardSection>

                  <CardSection>
                    <Button onPress = {this.onCancelPress.bind(this)}>Cancel</Button>
                </CardSection>

            </View>
        </Modal>
    )
}


const styles = {
    
    cardSectionStyle: {
        justifyContent: 'center'
    },
    
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    },
    
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign:'center',
        lineHeight: 40
    },
}

export {ConfirmCarAdd}