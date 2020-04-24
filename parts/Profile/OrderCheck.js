import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Button from 'react-native-button';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../../assets/styles/Fonts';

function CheckLine(item, key){
    return(
        <View key={key} style={styles.item}>
            <View style={styles.count}>
                <Text style={styles.countText}>x{item.count}</Text>
            </View>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price} XPF</Text>
        </View>
    )
}

export default class OrderCheck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: props.order
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.head}>
                    <Text style={styles.title}>Commande #3203</Text>
                    <TouchableOpacity>
                        <Text style={styles.link}>Voir le reçu</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.items}>
                    {this.state.order.products.map((item, key) => (
                        CheckLine(item, key)
                    ))}
                </View>
                <View style={styles.summary}>
                    <View style={[styles.row, {marginBottom: hp(3.07)}]}>
                        <Text style={styles.subTotalText}>Sous-total</Text>
                        <Text style={styles.itemPrice}>{this.state.order.subTotal} XPF</Text>
                    </View>
                    <View style={[styles.row, {marginBottom: hp(2.58)}]}>
                        <Text style={styles.subTotalText}>Frais de service</Text>
                        <Text style={styles.itemPrice}>{this.state.order.service} XPF</Text>
                    </View>
                </View>
                <View style={styles.total}>
                        <View style={styles.row}>
                            <Text style={styles.totalText}>Total</Text>
                            <Text style={styles.totalValue}>{this.state.order.summ} XPF</Text>
                        </View>
                </View>
                <Button
                    containerStyle={this.state.order.statuses[2].finished == 'done' ? styles.button: styles.qrButton}
                    onPress={ this.state.order.statuses[2].finished == 'done' ?
                        () => this.props.navigation.navigate('RatePage', {order: this.state.order})
                        :
                        this.props.handler
                    }
                >
                    <Text style={this.state.order.statuses[2].finished == 'done' ? styles.buttonText : [styles.buttonText, {color: 'white'}]}>
                        {this.state.order.statuses[2].finished== 'done' ?
                        'Noter cette commande'
                        :
                        'Voir le QR code de confirmation'
                        }
                    </Text>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 17,
        paddingBottom: hp(5.04)
    },

    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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
        flexDirection: 'row'
    },

    subTotalText: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.48),
        color: "#a1a7b4"
    },

    total: {
        marginBottom: hp(5.17)
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

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#00ccbd",
        height: hp(6.89),
        width: '100%'
    },

    buttonText: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.97),
        color: "#00ccbd"
    },

    qrButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: "#00ccbd",
        height: hp(6.89),
        width: '100%'
    }
})