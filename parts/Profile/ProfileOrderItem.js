import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../../assets/styles/Fonts';

export default class ProfileOrderItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            order: props.order,
        }
    }

    render(){
        return(
            <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('OrderInfo', {order: this.state.order})}
            >
                <View style={styles.item}>
                    <View style={styles.logoBox}>
                        <Image
                            style={styles.logo}
                            source={require('../../assets/img/pates.png')}
                        />
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.name}>{this.state.order.store}</Text>
                        <Text style={styles.info}>n°{this.state.order.number} - {this.state.order.statuses[2].finished == 'done' ? this.state.order.date : 'À retirer'}</Text>
                        <Text style={styles.summ}>{this.state.order.summ} XPF</Text>
                    </View>
                    {this.state.order.statuses[2].finished == 'done' ?
                    <View style={styles.iconBox}>
                        <Image
                            style={styles.arrow_next}
                            source={require('../../assets/img/back_arrow_grey.png')}
                        />
                    </View>
                    :
                    <View style={styles.altCont}>
                        <View>
                            <View style={styles.availableButton}>
                                <Icon
                                    name='briefcase'
                                    size={14}
                                    type='material-community'
                                    color='rgba(255, 255, 255, 0.5)'
                                />
                                <Text style={styles.text}>À retirer</Text>
                            </View>
                        </View>
                        <View style={styles.iconBox}>
                            <Image
                                style={styles.arrow_next}
                                source={require('../../assets/img/back_arrow_grey.png')}
                            />
                        </View>
                    </View>
                    }
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        paddingHorizontal: 17,
        paddingTop: hp(2.95),
        paddingBottom: hp(2.21),
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
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
        marginBottom: 8
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

    arrow_next: {
        resizeMode: 'contain',
        transform: [{
            rotate: '180deg'
        }]
    },

    altCont: {
        flexDirection: 'row',
        marginRight: 0,
        marginLeft: 'auto'
    },

    availableButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 3,
        paddingHorizontal: 8,
        paddingTop: 1,
        paddingBottom: 3,
        backgroundColor: "#00ccbd",
        marginRight: wp(2.66)
    },

    text: {
        fontFamily: Fonts.Regular,
        fontSize: 14,
        color: '#fff',
        lineHeight: hp(2.46),
        marginLeft: 8,
    }
})