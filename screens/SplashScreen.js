import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class SplashScreen extends Component {
    render() {
        return (
            <View style={ styles.container } >
                <Image
                    source = { require('../assets/img/logo.png') }
                    style = {styles.logo }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#00CCBD',
        justifyContent: 'center',
        alignItems: 'center'
    },

    logo: {
        width: wp('45.1%'),
        height: wp('45.1%'),
        maxWidth: 169,
        maxHeight: 169
    }
})