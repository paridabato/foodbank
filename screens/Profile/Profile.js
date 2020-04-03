import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar, ScrollView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../../assets/styles/Fonts';
import Impact from '../../parts/Profile/Impact';
import Menu from '../../parts/Profile/ProfileMenu';

export default class ProfileMain extends Component {
    constructor(props) {
        super(props);
        this.state={
            user: {
                name: 'Nolann',
                lastname: 'Charles',
                impact: {
                    saved: '32 397 XPF',
                    econom: '12 000 XPF'
                },
                email: 'nolann@oneshot.nc',
                tel: '06 88 22 09 81',
                adress: 'Strasbourg, 67000'
            }
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
                        <View style={styles.headerContent}>
                            <View style={styles.logoBox}>
                                <Image
                                    style={styles.logo}
                                    source={require('../../assets/img/profile_default_logo.png')}
                                />
                            </View>
                            <Text style={styles.headerText}>{this.state.user.name} {this.state.user.lastname}</Text>
                        </View>
                    </View>
                    <View style={styles.content}>
                        <ScrollView>
                            <Impact user={this.state.user} />
                            <Menu user={this.state.user} navigation={this.props.navigation} />
                        </ScrollView>
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

    headerContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    logoBox: {
        width: 32,
        height: 32,
        marginRight: 10
    },

    logo: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    },

    headerText: {
        fontFamily: Fonts.Bold,
        fontSize: hp(2.21),
        lineHeight: hp(2.83),
        color: '#142444',
        textAlign: 'center'
    },
})