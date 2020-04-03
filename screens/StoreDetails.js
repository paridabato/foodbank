import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../assets/styles/Fonts';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Hours from '../parts/Store/Hours';
import Engagement from '../parts/Store/Engagement';
import Rating from '../parts/Store/Rating';

export default class StoreDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            storeName: 'Boulangerie Martin',
            coordinate: {
                latitude: -22.276425, 
                longitude :166.447334
            },
            adress1: '12 rue des Hallebardes,',
            adress2: '98800 Nouméa'
        }
    }

    render(){
        return(
            <View style={styles.container}>
            <StatusBar translucent backgroundColor="#fff" barStyle = 'dark-content'/>
                <View style={styles.wrapper}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.back}
                            onPress={()=>this.props.navigation.goBack()}
                        >
                            <Image
                                style={styles.backImg}
                                source={require('../assets/img/back_arrow.png')}
                            />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>{this.state.storeName}</Text>
                    </View>
                    <ScrollView style={styles.content}>
                        <View style={styles.mapCont}>
                            <MapView
                                provider={PROVIDER_GOOGLE}
                                initialRegion={{
                                    latitude: -22.276450,
                                    longitude: 166.447321,
                                    latitudeDelta: 0.005,
                                    longitudeDelta: 0.005,
                                }}
                                style={styles.map}
                            >
                                <Marker
                                    coordinate={this.state.coordinate}
                                >
                                    <Image
                                        source={require('../assets/img/icons/map_pin.png')}
                                    />
                                </Marker>
                            </MapView>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoTitle}>{this.state.storeName}</Text>
                            <View style={styles.infoContent}>
                                <View style={styles.infoContentBox}>
                                    <View style={styles.infoIcon}>
                                        <Image
                                            source={require('../assets/img/icons/default_small.png')}
                                        />
                                    </View>
                                    <View>
                                        <Text style={[styles.infoAdress, {marginBottom: hp(0.8),}]}>{this.state.adress1}</Text>
                                        <Text style={styles.infoAdress}>{this.state.adress2}</Text>
                                    </View>
                                </View>
                                <TouchableOpacity>
                                    <Text style={styles.infoLink}>Itinéraire</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Hours />
                        <View style={styles.bottom}>
                            <Engagement />
                            <Rating />
                        </View>
                        <View style={styles.contacts}>
                            <Text style={styles.contactsTitle}>Vous avez des questions sur les allergènes ?</Text>
                            <View style={styles.call}>
                                <TouchableOpacity>
                                    <View style={styles.button}>
                                        <View style={styles.left}>
                                            <View style={styles.iconCont}>
                                                <Image
                                                    style={styles.icon}
                                                    source={require('../assets/img/icons/icon_call.png')}
                                                />
                                            </View>
                                            <Text style={styles.buttonText}>Appeler {this.state.storeName}</Text>
                                        </View>
                                        <View style={styles.iconBox}>
                                            <Image
                                                style={styles.icon}
                                                source={require('../assets/img/icons/qustion.png')}
                                            />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.facebook}>
                                <TouchableOpacity>
                                    <View style={styles.button}>
                                        <View style={styles.iconCont}>
                                            <Image
                                                style={styles.icon}
                                                source={require('../assets/img/icons/facebook_icon_cyan.png')}
                                            />
                                        </View>
                                        <Text style={styles.buttonText}>Facebook</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.site}>
                                <TouchableOpacity>
                                    <View style={styles.button}>
                                        <View style={styles.iconCont}>
                                            <Image
                                                style={styles.icon}
                                                source={require('../assets/img/icons/icon_link.png')}
                                            />
                                        </View>
                                        <Text style={styles.buttonText}>Site internet</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
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
        height: hp(100),
        backgroundColor: '#eee',
        paddingBottom: hp(7.51),
    },

    mapCont: {
        width: '100%',
        height: hp(30.54),
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'white'
    },

    map: {
        ...StyleSheet.absoluteFillObject,
    },

    infoContainer: {
        backgroundColor: '#fff',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 10,
        shadowOpacity: 1,
        paddingHorizontal: 16,
        paddingBottom: hp(3.07),
        paddingTop: hp(2.7),
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

    infoLink: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.72),
        lineHeight: hp(1.72),
        color: "#00ccbd"
    },

    bottom: {
        backgroundColor: '#fff',
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 20,
        shadowOpacity: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        marginBottom: hp(7.63)
    },

    contacts: {
        paddingBottom: hp(8)
    },

    contactsTitle: {
        textAlign: 'center',
        fontFamily: Fonts.Bold,
        fontSize: hp(1.97),
        lineHeight: hp(2.95),
        color: "#142444",
        marginBottom: hp(1.23)
    },

    button: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingHorizontal: 21,
        paddingVertical: 16,
        alignItems: 'center'
    },

    left: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    iconCont: {
        width:16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 18
    },

    iconBox: {
        width: 20,
        height: 22,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 0,
        marginLeft: 'auto'
    },

    icon: {
        resizeMode: 'contain'
    },

    buttonText: {
        fontFamily: Fonts.Regular,
        fontSize: hp(1.97),
        lineHeight: hp(1.97),
        color: "#142444"
    },

    call: {
        marginBottom: hp(2.95)
    }
})