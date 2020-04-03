import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Fonts from '../../assets/styles/Fonts';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class StoreInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adress: props.adress
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Infos commerçant</Text>
                <View style={styles.content}>
                    <Text style={styles.adress}>{this.state.adress}</Text>
                    <TouchableOpacity
                        onPress={()=>this.props.navigation.navigate('StoreDetails')}
                    >
                        <Text style={styles.link}>En savoir plus</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        paddingHorizontal: 16,
        paddingBottom: hp(3.07),
        paddingTop: hp(2.7),
        marginBottom: hp(4.43)
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
        justifyContent: 'space-between'
    },

    adress: {
        fontFamily: Fonts.Regular,
        fontSize: hp(1.72),
        lineHeight: hp(2.95),
        color: "#5a657c"
    },

    link: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.72),
        lineHeight: hp(2.95),
        color: "#00ccbd"
    }
})