import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SwipeRow } from 'react-native-swipe-list-view';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../../assets/styles/Fonts';

function CheckLine(item, key){
    return(
            <SwipeRow key={key} disableRightSwipe rightOpenValue={-hp(10.71)}>
                <View style={styles.standaloneRowBack}>
                    <Text style={styles.backTextWhite}>Supprimer</Text>
                </View>
                <View style={styles.standaloneRowFront}>
                    <View key={key} style={styles.item}>
                        <View style={styles.count}>
                            <Text style={styles.countText}>x{item.count}</Text>
                        </View>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemPrice}>{item.price} XPF</Text>
                    </View>
                </View>
            </SwipeRow>
    )
}

export default class OrderList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.head}>
                    <Text style={styles.title}>Votre commande</Text>
                    <TouchableOpacity>
                        <Text style={styles.link}>Ajouter des plats</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.items}>
                    <View style={styles.containerItems}>
                        <View style={styles.standalone}>
                            {this.props.order.products.map((item, key) => (
                                CheckLine(item, key)
                            ))}
                        </View>
                    </View>
                </View>
                <View style={styles.summary}>
                    <View style={[styles.row, {marginBottom: hp(3.07)}]}>
                        <Text style={styles.subTotalText}>Sous-total</Text>
                        <Text style={styles.itemPrice}>{this.props.order.subTotal} XPF</Text>
                    </View>
                    <View style={[styles.row, {marginBottom: hp(2.58)}]}>
                        <Text style={styles.subTotalText}>TGC</Text>
                        <Text style={styles.itemPrice}>{this.props.order.tgc} XPF</Text>
                    </View>
                    <View style={[styles.row, {marginBottom: hp(2.58)}]}>
                        <Text style={styles.subTotalText}>Frais de service</Text>
                        <Text style={styles.itemPrice}>{this.props.order.service} XPF</Text>
                    </View>
                </View>
                <View style={styles.total}>
                        <View style={styles.totalRow}>
                            <Text style={styles.totalText}>Total</Text>
                            <Text style={styles.totalValue}>{this.props.order.summ} XPF</Text>
                        </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: hp(2.46)
    },

    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 17
    },

    title: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.97),
        lineHeight: hp(2.95),
        color: "#142444"
    },

    link: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.72),
        color: "#00ccbd"
    },

    items: {
        marginBottom: hp(2.33)
    },

    item: {
        paddingHorizontal: 17,
        flexDirection: 'row',
        paddingVertical: hp(1.97),
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        alignItems: 'center'
    },

    count: {
        height: hp(2.95),
        width: hp(2.95),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#00ccbd",
        borderRadius: 3,
        marginRight: wp(4.26)
    },

    countText: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.72),
        color: "#ffffff"
    },

    itemName: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.97),
        color: "#142444"
    },

    itemPrice: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.72),
        lineHeight: hp(2.95),
        color: "#5a657c",
        marginRight: 0,
        marginLeft: 'auto'
    },

    summary: {
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        marginBottom: hp(2.7)
    },

    row: {
        flexDirection: 'row',
        paddingHorizontal: 17
    },

    totalRow: {
        flexDirection: 'row',
        paddingBottom: hp(2.21),
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        paddingHorizontal: 17
    },

    subTotalText: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.48),
        color: "#a1a7b4"
    },

    total: {
        
    },

    totalText: {
        fontFamily: Fonts.Bold,
        fontSize: hp(2.21),
        lineHeight: hp(3.32),
        color: "#142444"
    },

    totalValue: {
        fontFamily: Fonts.Bold,
        fontSize: hp(2.21),
        marginRight: 0,
        marginLeft: 'auto',
        color: "#777777"
    },

    containerItems: {
        backgroundColor: 'white',
        flex: 1,
    },

    standaloneRowFront: {
        backgroundColor: '#fff',
    },

    standaloneRowBack: {
        alignItems: 'center',
        backgroundColor: '#ff3b30',
        width: hp(10.71),
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'flex-end',
    },

    backTextWhite: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.72),
        color: "#ffffff"
    }
})