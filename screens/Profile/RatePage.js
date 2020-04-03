import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Button from 'react-native-button';
import Fonts from '../../assets/styles/Fonts';
import Rating from '../../parts/Profile/RatingComponent';

export default class RatePage extends Component {
    constructor(props){
        super(props);
        this.state={
            order: props.route.params.order
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <StatusBar translucent backgroundColor="#fff" barStyle = 'dark-content'/>
                <View style={styles.wrapper}>
                    <View style={styles.header}>
                        <TouchableOpacity 
                            style={styles.back}
                            onPress={()=>this.props.navigation.goBack()}
                        >
                            <Image
                                style={styles.backImg}
                                source={require('../../assets/img/back_arrow.png')}
                            />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>Noter votre commande</Text>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.store}>
                            <View style={styles.logoBox}>
                                <Image
                                    style={styles.logo}
                                    source={require('../../assets/img/pates.png')}
                                />
                            </View>
                            <View>
                                <Text style={styles.name}>{this.state.order.store}</Text>
                                <Text style={styles.info}>n°{this.state.order.number} - {this.state.order.date}</Text>
                                <Text style={styles.summ}>{this.state.order.summ} XPF</Text>
                            </View>
                        </View>
                        <View style={styles.ratingBox}>
                            <View style={styles.row}>
                                <Text style={styles.label}>Comment s’est passé le retrait ?</Text>
                                <Rating 
                                    count={5}
                                />
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>La quantité était-elle suffisante ?</Text>
                                <Rating 
                                    count={5}
                                />
                            </View>
                            <View style={[styles.row, {borderBottomWidth: 0}]}>
                                <Text style={styles.label}>Les produits étaient-ils de qualité ?</Text>
                                <Rating 
                                    count={5}
                                />
                            </View>
                        </View>
                        <Button
                            containerStyle={styles.button}
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Text style={styles.buttonText}>Enregistrer ma note</Text>
                        </Button>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: hp('6.4%'),
        flex: 1,
        backgroundColor: 'white',
    },

    wrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
    },

    header: {
        position: 'relative',
        width: '100%',
        paddingBottom: hp(1.35),
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 20,
        shadowOpacity: 1
    },

    back: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        padding: 17,
        zIndex: 2
    },

    backImg: {
        maxWidth: wp('2.1%'),
        resizeMode: 'contain'
    },

    headerText: {
        fontFamily: Fonts.Bold,
        fontSize: hp(2.21),
        lineHeight: hp(2.83),
        color: '#142444',
        textAlign: 'center'
    },

    content: {
        width: '100%',
        backgroundColor: '#fff',
        paddingHorizontal: 17,
    },

    store: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingTop:  hp(4.93),
        paddingBottom: hp(4.18)
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
        marginBottom: hp(0.98)
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

    ratingBox: {
        marginBottom: hp(5.91)
    },

    row: {
        paddingTop: hp(3.57),
        paddingBottom: hp(2.95),
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },

    label: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.97),
        lineHeight: hp(2.95),
        color: "#142444",
        marginBottom: hp(2.21)
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: "#00ccbd",
        height: hp(6.89),
        width: '100%',
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowRadius: 10,
        shadowOpacity: 1,
        elevation: 8
    },

    buttonText: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.97),
        color: "#fff"
    }
})