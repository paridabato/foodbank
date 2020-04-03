import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../../assets/styles/Fonts';
import OrderItem from './ProfileOrderItem';

export default class OrderDone extends Component {
    constructor(props){
        super(props);
        this.state = {
            orders: [
                {
                    store: 'Sushi Shop',
                    adress1: '12 rue des Hallebardes',
                    adress2: '67000 Strasbourg',
                    number: 3025,
                    date: '21 décembre 2019',
                    summ: 1540,
                    currentStatus: 'terminée',
                    statuses: [
                        {ready: 'done'},
                        {waiting: 'done'}, 
                        {finished: 'done'}
                    ],
                    products: [
                        {
                            count: 1,
                            name: '16 california makis',
                            price: 1100,
                        },
                        {
                            count: 1,
                            name: 'Soupe mizo',
                            price: 320,
                        }
                    ],
                    subTotal: 1420,
                    service: 120
                },
                {
                    store: 'Boulangerie Paul',
                    adress1: '12 rue des Hallebardes',
                    adress2: '67000 Strasbourg',
                    number: 2103,
                    date: '10 décembre 2019',
                    summ: 1540,
                    currentStatus: 'terminée',
                    statuses: [
                        {ready: 'done'},
                        {waiting: 'done'}, 
                        {finished: 'done'}
                    ],
                    products: [
                        {
                            count: 1,
                            name: '16 california makis',
                            price: 1100,
                        },
                        {
                            count: 1,
                            name: 'Soupe mizo',
                            price: 320,
                        }
                    ],
                    subTotal: 1420,
                    service: 120
                },
                {
                    store: 'Carrefour City',
                    adress1: '12 rue des Hallebardes',
                    adress2: '67000 Strasbourg',
                    number: 1935,
                    date: '3 novembre 2019',
                    summ: 1540,
                    currentStatus: 'terminée',
                    statuses: [
                        {ready: 'done'},
                        {waiting: 'done'}, 
                        {finished: 'done'}
                    ],
                    products: [
                        {
                            count: 1,
                            name: '16 california makis',
                            price: 1100,
                        },
                        {
                            count: 1,
                            name: 'Soupe mizo',
                            price: 320,
                        }
                    ],
                    subTotal: 1420,
                    service: 120
                }
            ]
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>{this.state.orders.length} commandes passées</Text>
                <View style={styles.content}>
                    <ScrollView>
                        {this.state.orders.map( (item, key) => (
                            <OrderItem order={item} key={key} navigation={this.props.navigation} />
                        ))}
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: hp(3.69),
    },

    content: {
        paddingBottom: hp(12)
    },

    title: {
        paddingHorizontal: 17,
        fontFamily: Fonts.Bold,
        fontSize: hp(1.97),
        lineHeight: hp(2.95),
        color: "#142444",
        marginBottom: hp(1.23)
    }
})