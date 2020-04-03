import React, {Component} from 'react';
import {Text, View, SafeAreaView, TextInput, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView} from 'react-native';
import Button from 'react-native-button';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../../assets/styles/Fonts';

export default class LoginEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidePassword: true
        }    
    }

    setPasswordVisibility = () => {
        this.setState({ hidePassword: !this.state.hidePassword });
    }

    render() {
        return(
            <KeyboardAvoidingView>
                <ScrollView style={styles.container}>
                <SafeAreaView style={styles.wrapper}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.back}
                            onPress={()=>this.props.navigation.goBack()}
                        >
                            <Image
                                style={styles.backImg}
                                source={require('../../assets/img/back_arrow.png')}
                            />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>Connexion</Text>
                    </View>
                    <View style={styles.form}>
                        <View style={styles.field}>
                            <Text style={styles.label}>Email</Text>
                            <TextInput
                                autoCompleteType='email'
                                returnKeyType='next'
                                keyboardType='email-address'
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.field}>
                            <Text style={styles.label}>Mot de passe</Text>
                            <TextInput
                                autoCompleteType='password'
                                secureTextEntry={this.state.hidePassword}
                                returnKeyType='done'
                                style={styles.input}
                            />
                            <TouchableOpacity 
                                activeOpacity={0.8} 
                                style={styles.showPassButton} 
                                onPress={this.setPasswordVisibility}
                            >
                                <Image 
                                    source={(this.state.hidePassword) ? require('../../assets/img/icons/show.png') : require('../../assets/img/icons/show.png')} 
                                    style={styles.showPassButtonImg} 
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.link}>Mot de passe oublié ?</Text>
                    </TouchableOpacity>
                    <View style={styles.bottomCont}>
                        <Button
                            onPress={()=>this.props.navigation.navigate('Main')}
                        >
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Connexion</Text>
                            </View>
                        </Button>
                        <View style={styles.bottomTextCont}>
                            <Text style={styles.bottomText}>Je n’ai pas de compte. </Text>
                            <TouchableOpacity>
                                <Text style={styles.link}>Je m’inscris</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF'
    },

    wrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: hp('100%'),
        paddingTop: hp('6.4%'),
        paddingBottom: hp('10.8%'),
    },

    header: {
        position: 'relative',
        width: '100%'
    },

    back: {
        position: 'absolute',
        left: wp('3.6%'),
        top: -wp('2%'),
        padding: wp('3.6%'),
    },

    backImg: {
        maxWidth: wp('2.1%'),
        resizeMode: 'contain'
    },

    headerText: {
        fontFamily: Fonts.Bold,
        fontSize: 18,
        lineHeight: 18,
        color: '#142444',
        textAlign: 'center'
    },

    form: {
        marginTop: '6.3%'
    },

    field: {
        width: wp('91.5%'),
        borderBottomColor: 'rgba(60, 60, 67, 0.29)',
        borderBottomWidth: 1,
        marginBottom: hp('4.6%'),
        position: 'relative'
    },

    label: {
        fontFamily: Fonts.Bold,
        fontSize: 16,
        lineHeight: 24,
        color: '#142444',
    },

    input: {
        height: hp('5.4%'),
        fontSize: 16,
        lineHeight: 24,
        fontFamily: Fonts.Regular,
        color: '#142444'
    },

    showPassButton: {
        width: wp('5.3%'),
        height: hp('1.7%'),
        position: 'absolute',
        right: wp('2%'),
        bottom: hp('2.5%')
    },

    showPassButtonImg: {
        width: '100%',
        resizeMode: 'contain'
    },

    bottomCont: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end'
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
        backgroundColor: '#00CCBD'
    },

    buttonText: {
        fontFamily: Fonts.Bold,
        fontSize: 16,
        lineHeight: 16,
        color: '#FFF'
    },

    bottomTextCont: {
        display: 'flex',
        flexDirection: 'row'
    },

    bottomText: {
        fontFamily: Fonts.Regular,
        fontSize: 16,
        lineHeight: 20,
        color: '#555555'
    },

    link: {
        fontFamily: Fonts.Bold,
        fontSize: 16,
        lineHeight: 20,
        color: '#00CCBD'
    }
})