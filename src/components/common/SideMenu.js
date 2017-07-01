import React from 'react';
import {SideMenu} from 'react-native-elements';

const SideMenu = ({isOpen, onChange, menu}) => {
    

        return(
            <SideMenu
                isOpen = {isOpen}
                onChange = {onChange}
                menu = {menu}
            >
            </SideMenu>
        )
    
}

export {SideMenu};