import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Fonts from '../../assets/styles/Fonts';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class OrderStoreInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            storeName: 'Sushi Shop',
            adress1: '15 Rue du Vingt-Deux Novembre',
            adress2: '67000 Strasbourg'
        }
    }

    render() {
        return(
            <View style={styles.infoContainer}>
                <Text style={styles.infoTitle}>{this.props.order.store}</Text>
                <View style={styles.infoContent}>
                    <View style={styles.infoContentBox}>
                        <View style={styles.infoIcon}>
                            <Image
                                source={require('../../assets/img/icons/default_small.png')}
                            />
                        </View>
                        <View>
                            <Text style={[styles.infoAdress, {marginBottom: hp(0.8),}]}>{this.props.order.adress1},</Text>
                            <Text style={styles.infoAdress}>{this.props.order.adress2}</Text>
                        </View>
                    </View>
                    {this.props.order.statuses[2].finished != 'done' ?
                        <TouchableOpacity>
                            <Text style={styles.link}>Itinéraire</Text>
                        </TouchableOpacity>
                        :
                        null
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    infoContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 17,
        paddingBottom: hp(2.21),
        paddingTop: hp(2.46),
        marginBottom: hp(2.95),
        borderBottomColor: '#eee',
        borderBottomWidth: 1
    },

    infoTitle: {
        fontFamily: Fonts.Bold,
        fontSize: hp(2.21),
        lineHeight: hp(2.21),
        color: "#142444",
        marginBottom: hp(1.1),
        textAlign: 'left'
    },

    infoContent: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    infoContentBox: {
        flexDirection: 'row'
    },

    infoIcon: {
        marginRight: 8
    },

    infoAdress: {
        fontFamily: Fonts.Regular,
        fontSize: hp(1.97),
        lineHeight: hp(1.97),
        color: "#5a657c"
    },

    link: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.72),
        color: "#00ccbd"
    }
})