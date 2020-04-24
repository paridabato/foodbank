import React, {Component} from 'react';
import { Image, View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, {Use} from 'react-native-svg';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../../assets/styles/Fonts';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.wrapper}>
                    <View style={styles.logoCont}>
                        <Image
                            style={styles.logoImg}
                            source={require('../../assets/img/logo_cyan.png')}
                        />
                    </View>
                    <Text style={styles.title}>Bienvenue sur Foodbank</Text>
                    <View>
                        <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={()=>this.props.navigation.navigate('LoginEmail')}
                        >
                            <View style={[styles.button, {backgroundColor: '#00CCBD'}]}>
                                <View style={styles.buttonIcon}>
                                    <Image 
                                        style={styles.buttonIconImg}
                                        source={require('../../assets/img/icons/mail_icon.png')}
                                    />
                                </View>
                                <Text style={[styles.buttonText, {color: '#FFFFFF'}]}>Continuer avec l'email</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={()=>this.props.navigation.navigate('Main')}
                        >
                            <View style={[styles.button, {backgroundColor: '#3B5998'}]}>
                                <View style={styles.buttonIcon}>
                                    <Image 
                                        style={styles.buttonIconImg}
                                        source={require('../../assets/img/icons/facebook_icon.png')}
                                    />
                                </View>
                                <Text style={[styles.buttonText, {color: '#FFFFFF'}]}>Continuer avec Facebook</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={()=>this.props.navigation.navigate('Main')}
                        >
                            <View style={[styles.button, {backgroundColor: '#FFFFFF', borderWidth: 2, borderColor: 'rgba(20, 36, 68, 0.3)'}]}>
                                <View style={styles.buttonIcon}>
                                    <Image 
                                        style={styles.buttonIconImg}
                                        source={require('../../assets/img/icons/google_icon.png')}
                                    />
                                </View>
                                <Text style={[styles.buttonText, {color: '#142444'}]}>Continuer avec Google</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomTextCont}>
                        <Text style={styles.bottomText}>Vous n’avez pas de compte ? </Text>
                        <TouchableOpacity
                            onPress={()=>this.props.navigation.navigate('Register')}
                        >
                            <Text style={styles.link}>S’inscrire</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: hp('13.7%'),
        paddingBottom: hp('7.9%'),
        backgroundColor: '#FFFFFF'
    },

    wrapper: {
        flexDirection: 'column',
        alignItems: 'center',
    },

    logoCont: {
        width: wp('45.1%'),
        height: wp('45.1%'),
        marginBottom: hp('9.7%')
    },

    logoImg: {
        resizeMode: 'contain',
        height: '100%',
        width: '100%',
    },

    title: {
        fontSize: hp(2.95),
        lineHeight: hp(3.94),
        fontFamily: Fonts.Bold,
        color: '#142444',
        marginBottom: hp('4.9%')
    },

    button: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('91.5%'),
        height: hp('6.9%'),
        marginBottom: hp('3%'),
        paddingHorizontal: wp('8.7%'),
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 1,
        borderRadius: wp('2%'),
    },

    buttonText: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.97),
        lineHeight: hp(1.97),
    },

    buttonIcon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('5.3%'),
        height: '100%',
        position: 'absolute',
        left: wp('8.7%')
    },

    buttonIconImg: {
        resizeMode: 'contain',
        maxHeight: hp('2.5%')
    },

    bottomTextCont: {
        display: 'flex',
        flexDirection: 'row'
    },

    bottomText: {
        fontFamily: Fonts.Regular,
        fontSize: hp(1.97),
        lineHeight: hp(2.46),
        color: '#555555'
    },

    link: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.97),
        lineHeight: hp(2.46),
        color: '#00CCBD'
    }
})