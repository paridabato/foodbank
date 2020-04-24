import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../../assets/styles/Fonts';

export default class Impact extends Component {
    constructor(props){
        super(props);
        this.state={
            name: props.user.name,
            saved: props.user.impact.saved,
            econom: props.user.impact.econom
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Mon impact</Text>
                <Text style={styles.greating}>Bravo {this.state.name} !</Text>
                <View style={styles.row}>
                    <View style={styles.col}>
                        <View style={styles.imgBox}>
                            <Image
                                style={styles.img}
                                source={require('../../assets/img/icons/product_saved.png')}
                            />
                        </View>
                        <Text style={styles.vallue}>{this.state.saved}</Text>
                        <Text style={styles.text}>de produits sauvés</Text>
                    </View>
                    <View style={styles.col}>
                        <View style={styles.imgBox}>
                            <Image
                                style={styles.img}
                                source={require('../../assets/img/icons/money_saved.png')}
                            />
                        </View>
                        <Text style={styles.vallue}>{this.state.econom}</Text>
                        <Text style={styles.text}>économisés</Text>
                    </View>
                </View>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container: {
        paddingTop: hp(3.82),
        paddingHorizontal: 17,
        marginBottom: hp(4.92)
    },

    title: {
        fontFamily: Fonts.Bold,
        fontSize: wp(3.2),
        color: "#a1a7b4",
        lineHeight: hp(1.84),
        marginBottom: 3
    },

    greating: {
        fontFamily: Fonts.Bold,
        fontSize: wp(4.26),
        lineHeight: hp(2.95),
        color: "#142444",
        marginBottom: hp(2.21)
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    col: {
        width: '48.5%',
        paddingTop: hp(2.7),
        paddingBottom: hp(3.07),
        paddingHorizontal: wp(4),
        borderRadius: 5,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 10,
        shadowOpacity: 1,
        elevation: 2
    },

    imgBox: {
        width: hp(4.92),
        height: hp(4.92),
        marginBottom: hp(1.6)
    },

    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },

    vallue: {
        fontFamily: Fonts.Bold,
        fontSize: hp(2.21),
        lineHeight: hp(2.95),
        color: "#142444",
        marginBottom: 2
    },

    text: {
        fontFamily: Fonts.Bold,
        fontSize: wp(3.73),
        lineHeight: hp(2.95),
        letterSpacing: 0,
        color: "#5a657c"
    }
})