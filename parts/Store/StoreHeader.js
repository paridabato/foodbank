import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar, Animated, Linking } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Badge, Icon } from 'react-native-elements';
import Fonts from '../../assets/styles/Fonts';
import StoreInfo from './StoreInfo';

export default class Store extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }

  render() {
        return(
          <Animated.View style={[
            {
              zIndex: this.props.opacity == 1 ? 3 : 1,
              height: this.props.height,
              opacity: this.props.opacity,
              transform: [{ translateY: this.props.translate }]
            }, styles.container]}
          >
                <StatusBar translucent backgroundColor='rgba(0, 0, 0, 0.4)' barStyle = 'light-content' />
                <View style={styles.header}>
                    <View style={styles.top}>
                        <Image
                            style={styles.topImage}
                            source={this.props.image}
                        />
                        <View style={styles.topBar}>
                            <TouchableOpacity  
                                style={styles.back}
                                onPress={()=>this.props.navigation.goBack()}
                            >
                                <View style={styles.backImgCont}>
                                    <Image
                                        style={styles.backImg}
                                        source={require('../../assets/img/back_arrow.png')}
                                    />
                                </View>
                            </TouchableOpacity>
                            <View style={styles.discount}>
                                <Image
                                    style={styles.discountImg}
                                    source={require('../../assets/img/icons/sun.png')}
                                />
                                <Text style={styles.discountText}>Hier -10% aujourd'hui -20%</Text>
                            </View>
                        </View>
                        <View style={styles.info}>
                            <View style={styles.logoBox}>
                                <Image
                                    style={styles.logo}
                                    source={this.props.logo}
                                />
                            </View>
                            <View style={styles.status}>
                                <Badge status="warning" size="large"/>
                                <Text style={styles.statusText}>Ferme dans 1h</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bot}>
                        <Text style={styles.name}>{this.props.name}</Text>
                        <View style={styles.summary}>
                            <View style={styles.rate}>
                                    <Icon
                                        name='star'
                                        size={hp(1.72)}
                                        type='material-community'
                                        color='#00ccbd'
                                    />
                                <Text style={styles.summaryText}>{this.props.rating}</Text>
                                <Text style={styles.summaryText}>Tr??s bien</Text>
                                <Text style={styles.summaryText}>({this.props.reviews}+)</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => { Linking.openURL(`tel:${this.props.tel}`);}} 
                            >
                                <View style={styles.call}>
                                    <View style={styles.iconCallBox}>
                                        <Image
                                            style={styles.iconCall}
                                            source={require('../../assets/img/icons/icon_call.png')}
                                        />
                                    </View>
                                    <Text style={styles.callText}>Appeler</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <StoreInfo navigation={this.props.navigation} id={this.props.id} />
             </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden'
    },

    header: {
        width: '100%',
        backgroundColor: '#fff',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 10,
        shadowOpacity: 1,
        marginBottom: hp(2.95)
    },

    top: {
        position: 'relative',
        height: hp(29.55)
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: hp(7.88),
        paddingHorizontal: 18
    },

    topImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },

    backImgCont: {
        width: 40,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 18,
    },

    backImg: {
        width: 8,
        height: 14,
        marginLeft: -4,
        resizeMode: 'contain'
    },

    discount: {
        backgroundColor: '#142444',
        borderRadius: 3,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 6,
        paddingTop: 4,
        paddingBottom: 5
    },

    discountImg: {
        height: wp(3.2),
        resizeMode: 'contain',
        marginRight: 4
    },

    discountText: {
        fontFamily: Fonts.Bold,
        fontSize: wp(3.2),
        color: '#fff'
    },

    info: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: -wp(7.73),
        paddingHorizontal: 18,
        zIndex: 100
    },

    logoBox: {
        height: wp(15.46),
        width: wp(15.46),
        borderRadius: 999,
        borderWidth: 2,
        borderColor: '#fff',
        overflow: 'hidden'
    },

    logo: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover'
    },

    status: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 7,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 10,
        shadowOpacity: 1,
        elevation: 2
    },

    statusText: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.72),
        lineHeight: hp(2.21),
        color: "#142444",
        marginLeft: 4
    },

    bot: {
        paddingTop: hp(3.94),
        paddingHorizontal: 18,
        paddingBottom: hp(3.44)
    },

    name: {
        fontFamily: Fonts.Bold,
        fontSize: hp(2.7),
        lineHeight: hp(3.94),
        color: "#142444",
        marginBottom: hp(1.23)
    },

    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    rate: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    summaryText: {
        fontFamily: Fonts.Regular,
        fontSize: hp(1.72),
        lineHeight: hp(1.72),
        marginLeft: 7
    },

    call: {
        flexDirection: 'row'
    },

    iconCallBox: {
        height: hp(1.97)
    },

    iconCall: {
        height: '100%',
        resizeMode: 'contain'
    },

    callText: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.72),
        color: "#00ccbd",
        lineHeight: hp(2.21),
        marginLeft: 8
    }

})