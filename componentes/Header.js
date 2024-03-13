import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
    return (
        <View
            style={{
                backgroundColor: 'rgb(84, 50, 168)',
                padding: 20,
                width:'100%'
            }}
        >
            <Text
                style={{
                    textAlign:'center',
                    fontSize:30,
                    color:'white'
                }}
            >
                Olá do header</Text>
        </View>
    )
}

export default Header;