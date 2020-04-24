import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../../assets/styles/Fonts';

export default class LeftHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <View style={styles.cont}>
                <View style={styles.logoCont}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/img/header_logo.png')}
                    />
                </View>
                <View>
                    <Text style={styles.topText}>Food sauvée</Text>
                    <Text style={styles.botText}>35 000 XPF</Text>
                </View>
            </View>
        )
    }
}

const styles  =  StyleSheet.create({
    cont: {
        display: 'flex',
        flexDirection: 'row',
        width: 100,
        height: wp('10.7%'),
        // alignItems: 'center'
    },

    logoCont: {
        width: wp('8%'),
        height: wp('8%'),
        marginRight: wp('4.3%')
    },

    logo: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
    },

    topText: {
        fontFamily: Fonts.Bold,
        fontSize: 12,
        color: '#A1A7B4'
    },

    botText: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.97),
        color: '#142444'
    }
})