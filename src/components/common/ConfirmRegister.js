import React from 'react';
import {Text, View, Modal} from 'react-native';
import {CardSection} from './CardSection';
import {Button} from './Button';

const ConfirmRegister = ({children, visible, onAccept}) =>{
    const {containerStyle, textStyle, cardSectionStyle}= styles;
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={()=>{}}
        >
            <View style={containerStyle}>
                <CardSection style = {cardSectionStyle}>
                    <Text style={textStyle}>{children}</Text>
                </CardSection>
                
                <CardSection>
                    <Button onPress={onAccept}>Okay</Button>
                </CardSection>
            </View>
        </Modal>
    )
}

export {ConfirmRegister};


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