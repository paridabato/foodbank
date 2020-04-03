import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../../assets/styles/Fonts';

export default class Offer extends Component {
    render() {
        return(
            <View style={{paddingHorizontal: wp('4.3%')}}>
                <TouchableOpacity>
                    <View style={styles.cont}>
                        <View style={styles.wrapper}>
                                <View style={styles.left}>
                                    <Text style={styles.title}>Offre de parrainage</Text>
                                    <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                                </View>
                                <View style={styles.right}>
                                    <Image
                                        source={require('../../assets/img/arrow_right.png')}
                                    />
                                </View>
                        </View>
                        <Image
                            style={styles.logo}
                            source={require('../../assets/img/logo_offer.png')}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cont: {
        marginTop: hp(2.95),
        width: '100%',
        height: hp(14.77),
        borderRadius: 5,
        backgroundColor: 'linear-gradient(45deg, rgba(0,204,189,1) 0%, rgba(0,217,201,1) 100%)',
        position: 'relative',
        paddingHorizontal: 29,
        paddingTop: hp(2.7),
        paddingBottom: hp(2.95)
    },

    logo: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: wp(36),
        zIndex: -1,
        resizeMode: 'cover'
    },

    wrapper: {
        display: 'flex',
        flexDirection: 'row'
    },

    left: {
        width: 210,
    },

    right: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    title: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.97),
        lineHeight: hp(2.95),
        color: '#ffffff',
        marginBottom:hp(1.1)
    },

    text: {
        fontFamily: Fonts.Regular,
        fontSize: hp(1.72),
        lineHeight: hp(2.95),
        color: "#ffffff"
      }
})