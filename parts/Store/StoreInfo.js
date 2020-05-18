import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import Fonts from '../../assets/styles/Fonts';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { SHOPS } from '../../data/dummy-data';

export default class StoreInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const ADRESS = SHOPS.find(shop => shop.id === this.props.id).adress;
        return(
            <Animated.View style={styles.container}>
                <Text style={styles.title}>Infos commerçant</Text>
                <View style={styles.content}>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.adress}>{ADRESS}</Text>
                    <TouchableOpacity
                        style={{marginLeft: wp(6.6)}}
                        onPress={()=>this.props.navigation.navigate('StoreDetails', {id: this.props.id})}
                    >
                        <Text style={styles.link}>En savoir plus</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 10,
        shadowOpacity: 1,
        elevation: 3,
        paddingHorizontal: 16,
        paddingBottom: hp(3.07),
        paddingTop: hp(2.7)
    },

    title: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.97),
        lineHeight: hp(2.95),
        color: "#142444",
        marginBottom: hp(1.1),
        textAlign: 'left'
    },

    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '100%'
    },

    adress: {
        fontFamily: Fonts.Regular,
        fontSize: hp(1.72),
        lineHeight: hp(2.95),
        color: "#5a657c",
        maxWidth: wp(55.47)
    },

    link: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.72),
        lineHeight: hp(2.95),
        color: "#00ccbd"
    }
})