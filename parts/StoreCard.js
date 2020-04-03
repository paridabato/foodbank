import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Badge, Icon } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../assets/styles/Fonts';

export default class StoreCard extends Component {
    constructor(props){
        super(props);
        this.state={
            img: props.img,
            discount: props.discount,
            status: props.status,
            logo: props.logo,
            name: props.name,
            category: props.category,
            distance: props.distance,
            rating: props.rating,
            counter: props.counter,
            fw: props.fw
        }
    }

    render(){
        return(
            <View style={this.state.fw ? styles.fwCard : styles.card }>
                <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('Store')}
                >
                    <View style={styles.top}>
                        <View style={styles.imageBox}>
                            <Image
                                style={styles.img}
                                source={this.state.img}
                            />
                        </View>
                        <View style={styles.topBadge}>
                            <View style={styles.topIcon}>
                                <Image
                                    style={styles.icon}
                                    source={require('../assets/img/icons/sun.png')}
                                />
                            </View>
                            <Text style={styles.discount}>{this.state.discount}</Text>
                        </View>
                        <View style={styles.botBadge}>
                            <Badge status="success" />
                            <Text style={styles.status}>{this.state.status}</Text>
                        </View>
                        <View style={styles.logoCont}>
                            <Image
                                style={styles.logo}
                                source={this.state.logo}
                            />
                        </View>
                    </View>
                    <View style={styles.bot}>
                        <Text style={styles.name}>{this.state.name}</Text>
                        <Text style={styles.category}>{this.state.category}</Text>
                        <View style={styles.info}>
                            <View style={styles.tile}>
                                <Icon
                                    name='map-marker'
                                    size={12}
                                    type='material-community'
                                    color='#A1A7B4'
                                />
                                <Text style={styles.tileText}>{this.state.distance}</Text>
                            </View>
                            <View style={styles.tile}>
                                <Icon
                                    name='star'
                                    size={12}
                                    type='material-community'
                                    color='#A1A7B4'
                                />
                                <Text style={styles.tileText}>{this.state.rating}</Text>
                            </View>
                            <View style={styles.tile}>
                                <Icon
                                    name='briefcase'
                                    size={12}
                                    type='material-community'
                                    color='#A1A7B4'
                                />
                                <Text style={styles.tileText}>{this.state.counter}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        width: 284,
        marginTop: hp(0.123),
        marginRight: wp(2.13)
    },

    fwCard: {
        width: '100%',
        marginBottom: wp(5.78)
    },

    top: {
        width: '100%',
        height: hp(18.72),
        position: 'relative'
    },

    imageBox: {
        borderRadius: 5,
        overflow: 'hidden',
    },

    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },

    topBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 8,
        left: 8,
        backgroundColor: '#142444',
        paddingVertical: 4,
        paddingHorizontal: 7,
        borderRadius: 3
    },

    discount: {
        fontFamily: Fonts.Bold,
        color: '#fff',
        fontSize: hp(1.48),
        marginLeft: 4
    },

    botBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 8,
        right: 8,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 5
    },

    status: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.72),
        color: '#142444',
        marginLeft: 4
    },

    logoCont: {
        width: wp(12.8),
        height: wp(12.8),
        borderRadius: 9999,
        overflow: 'hidden',
        borderColor: 'white',
        borderWidth: 2,
        position: 'absolute',
        left: 8,
        bottom: -hp(1.23)
    },
    
    logo: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },

    bot: {
        paddingTop: hp(1.72),
        paddingHorizontal: hp(0.98)
    },

    name: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.97),
        color: '#142444',
        lineHeight: hp(2.95),
        marginBottom: hp(0.73)
    },

    category: {
        fontFamily: Fonts.Regular,
        fontSize: hp(1.48),
        color: '#555',
        lineHeight: hp(1.84),
        marginBottom: hp(1.6)
    },

    info: {
        flexDirection: 'row'
    },
    
    tile: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 3,
        backgroundColor: "rgba(20, 36, 68, 0.08)",
        marginRight: 13,
        paddingHorizontal: 8,
        paddingVertical: 3
    },

    tileText: {
        fontFamily: Fonts.Regular,
        color: '#5a657c',
        fontSize: hp(1.48),
        lineHeight: hp(1.84),
        marginLeft: 5
    }
})