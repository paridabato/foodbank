import React, { Component } from 'react';
import { View, Text, Image, StyleSheet  } from 'react-native';
import Fonts from '../../assets/styles/Fonts';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import BuyButton from './BuyButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ProductCategoryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            product: props.product,
            last: props.last
        }
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.state.product.qty === 0 ? null : this.props.handler}
                activeOpacity={this.state.product.qty === 0 ? 1 : 0.6}
            >
                <View style={ this.state.last ? [styles.item, styles.lastItem] : styles.item }>
                    <View style={styles.header}>
                            <Text style={ this.state.product.qty !== 0 ? styles.name : [styles.name, {opacity: 0.3}] }>{this.state.product.name}</Text>
                            <BuyButton product={this.props.product} qty={this.state.product.qty}/>
                    </View>
                    <View style={styles.body}>
                        <Text style={ this.state.product.qty !== 0 ? styles.desc : [styles.desc, {opacity: 0.3}] }>{this.state.product.desc}</Text>
                    </View>
                    {
                    this.state.product.discount ?
                        <View style={styles.priceBox}>
                            <View style={ this.state.product.qty !== 0 ? styles.discount : [styles.discount, {opacity: 0.3}] }>
                                <Image
                                    style={styles.sun}
                                    source={require('../../assets/img/icons/sun.png')}
                                />
                                <Text style={styles.value}>{this.state.product.discount}</Text>
                            </View> 
                            <Text style={ this.state.product.qty !== 0 ? styles.old : [styles.old, {opacity: 0.3}] }>{this.state.product.oldPrice}</Text>
                            <Text style={ this.state.product.qty !== 0 ? styles.new : [styles.new, {opacity: 0.3}] }>{this.state.product.newPrice}</Text>
                        </View>
                        : 
                        <View style={styles.priceBox}>
                            <Text style={ this.state.product.qty !== 0 ? styles.new : [styles.new, {opacity: 0.3}] }>{this.state.product.newPrice}</Text>
                        </View>
                    }
                    </View>
                </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        marginHorizontal: 18,
        paddingBottom: hp(1.97),
        paddingTop: hp(2.7),
        borderBottomColor: 'rgba(60, 60, 67, 0.29)',
        borderBottomWidth: 0.5
    },

    lastItem: {
        borderBottomWidth: 0
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: hp(1.1)
    },

    name: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.97),
        lineHeight: hp(2.95),
        color: "#142444"
    },

    desc: {
        fontFamily: Fonts.Regular,
        fontSize: hp(1.72),
        lineHeight: hp(2.95),
        color: "#5a657c",
        marginBottom: hp(1.1)
    },

    priceBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    discount: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 3,
        backgroundColor: "#142444",
        padding: 6,
        marginRight: 11
    },

    sun: {
        maxWidth: 12,
        marginRight: 3
    },

    value: {
        fontFamily: Fonts.Bold,
        fontSize: 12,
        lineHeight: 12,
        color: "#ffffff"
    },

    old: {
        fontFamily: Fonts.Bold,
        fontSize: 12,
        lineHeight: 15,
        color: "#a1a7b4",
        marginRight: 11,
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid'
    },

    new: {
        fontFamily: Fonts.Bold,
        fontSize: 14,
        lineHeight: 24,
        color: "#5a657c"
    }
})
