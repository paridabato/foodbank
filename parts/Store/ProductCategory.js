import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Fonts from '../../assets/styles/Fonts';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ProductCategoryItem from './ProductCategoryItem';

export default class ProductCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            catName: props.catName,
            products: props.products
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>{this.state.catName}</Text>
                <View style={styles.list}>
                    {this.state.products.map( (item, key) => (
                        <ProductCategoryItem handler={this.props.handler} product={item} name={this.state.catName} key={key} last={ this.state.products[key+1] ? false : true } />
                    ))}
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderBottomColor: 'rgba(60, 60, 67, 0.29)',
        borderBottomWidth: 0.5,
        marginBottom: hp(4.43)
    },

    title: {
        paddingHorizontal: 18,
        fontFamily: Fonts.Bold,
        fontSize: hp(2.21),
        color: "#142444",
        lineHeight: hp(3.32),
        marginBottom: hp(1.1)
    },

    list: {
        backgroundColor: '#fff'
    }
})