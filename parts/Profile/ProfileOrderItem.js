import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../../assets/styles/Fonts';

export default class ProfileOrderItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            order: props.order,
        }
    }

    render(){
        return(
            <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('OrderInfo', {order: this.state.order})}
            >
                <View style={styles.item}>
                    <View style={styles.logoBox}>
                        <Image
                            style={styles.logo}
                            source={require('../../assets/img/pates.png')}
                        />
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.name}>{this.state.order.store}</Text>
                        <Text style={styles.info}>n°{this.state.order.number} - {this.state.order.date}</Text>
                        <Text style={styles.summ}>{this.state.order.summ} XPF</Text>
                    </View>
                    <View style={styles.iconBox}>
                        <Image
                            style={styles.icon}
                            source={require('../../assets/img/icons/qustion.png')}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        paddingHorizontal: 17,
        paddingTop: hp(2.95),
        paddingBottom: hp(2.21),
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
    },

    logoBox: {
        height: hp(6.15),
        width: hp(6.15),
        borderRadius: 999,
        overflow: 'hidden',
        marginRight: wp(5.6)
    },

    logo: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover'
    },

    name: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.97),
        lineHeight: hp(2.46),
        color: "#142444",
        marginBottom: 3
    },

    Info: {
        fontFamily: Fonts.Regular,
        fontSize: hp(1.72),
        lineHeight: hp(2.95),
        color: "#5a657c",
        marginBottom: 8
    },

    summ: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.72),
        lineHeight: hp(2.95),
        color: "#5a657c"
    },

    iconBox: {
        width: hp(2.46),
        height: hp(2.7),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 0,
        marginLeft: 'auto'
    },

    icon: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    },
})