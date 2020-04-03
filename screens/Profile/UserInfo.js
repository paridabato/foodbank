import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar, StyleSheet, ScrollView } from 'react-native';
import Button from 'react-native-button';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Input } from 'react-native-elements';
import Fonts from '../../assets/styles/Fonts';

export default class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state={

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
                        <Text style={styles.headerText}>Mes informations</Text>
                    </View>
                    <View style={styles.content}>
                        <ScrollView>
                            <Input
                                label = 'Prénom'
                                labelStyle={styles.label}
                                autoCompleteType='name'
                                inputContainerStyle = {styles.inputCont}
                                placeholder = {this.props.route.params.user.lastname}
                                placeholderTextColor='#5a657c'
                            />
                            <Input
                                label = 'Nom'
                                labelStyle={styles.label}
                                autoCompleteType='name'
                                inputContainerStyle = {styles.inputCont}
                                placeholder = {this.props.route.params.user.name}
                                placeholderTextColor='#5a657c'
                            />
                            <Input
                                label = 'Email'
                                labelStyle={styles.label}
                                autoCompleteType='email'
                                keyboardType='email-address'
                                inputContainerStyle = {styles.inputCont}
                                placeholder = {this.props.route.params.user.email}
                                placeholderTextColor='#5a657c'
                            />
                            <Input
                                label = 'Téléphone'
                                labelStyle={styles.label}
                                autoCompleteType='tel'
                                keyboardType='phone-pad'
                                inputContainerStyle = {styles.inputCont}
                                placeholder = {this.props.route.params.user.tel}
                                placeholderTextColor='#5a657c'
                            />
                            <Input
                                editable={false}
                                label = 'Lieu'
                                labelStyle={styles.label}
                                autoCompleteType='off'
                                inputContainerStyle = {[styles.inputCont, {marginBottom: hp(9.85) }]}
                                placeholder = {this.props.route.params.user.adress}
                                placeholderTextColor='#5a657c'
                                rightIcon={
                                    <TouchableOpacity
                                        onPress={()=>this.props.navigation.navigate('Location')}
                                    >
                                        <Text style={styles.link}>Changer</Text>
                                    </TouchableOpacity>
                                }
                            />
                            <Button
                                containerStyle={styles.button}
                                onPress={() => this.props.navigation.goBack()}
                            >
                                <Text style={styles.buttonText}>Enregistrer</Text>
                            </Button>
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

    headerText: {
        fontFamily: Fonts.Bold,
        fontSize: hp(2.21),
        lineHeight: hp(2.83),
        color: '#142444',
        textAlign: 'center'
    },

    content: {
        width: '100%',
        paddingHorizontal: 17,
        paddingTop: hp(6.03),
        paddingBottom: hp(7.38)
    },

    label: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.97),
        lineHeight: hp(2.95),
        color: "#142444",
        marginBottom: hp(1.84)
    },

    input: {
        fontFamily: Fonts.Regular,
        fontSize: hp(1.97),
        lineHeight: hp(2.95),
        color: "#5a657c"
    },

    inputCont: {
        borderBottomColor: '#eee',
        marginBottom: hp(3.69)
    },

    link: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.72),
        color: "#00ccbd"
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