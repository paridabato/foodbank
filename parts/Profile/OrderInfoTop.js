import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../../assets/styles/Fonts';

export default class OrderInfoTop extends Component {
    constructor(props){
        super(props);
        this.state = {
            order: props.order
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.iconBox}>
                    <Image
                        style={styles.icon}
                        source={require('../../assets/img/icons/check_in_circle.png')}
                    />
                </View>
                <View style={styles.content}>
                    <Text style={styles.status}>Commande {this.state.order.currentStatus}</Text>
                    <Text style={styles.number}>commande n°{this.state.order.number}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00ccbd',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 17,
        paddingTop: hp(6.77),
        paddingBottom: hp(3.94)
    },

    iconBox: {
        height: hp(8),
        width: hp(8),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#00b3a5",
        borderRadius: 999,
        marginRight: wp(5.6)
    },

    content: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    status: {
        fontFamily: Fonts.Bold,
        fontSize: hp(2.7),
        lineHeight: hp(3.94),
        color: "#ffffff",
    },

    number: {
        fontFamily: Fonts.Regular,
        fontSize: hp(1.72),
        lineHeight: hp(2.95),
        color: "#ffffff"
    }
})