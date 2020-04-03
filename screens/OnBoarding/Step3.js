import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../../assets/styles/Fonts';
import Pagination from '../../parts/OnBoarding/Pagination';
import Button from 'react-native-button';

export default class StepThree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 2
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.wrapper}>
                    <TouchableOpacity 
                        style={styles.topButton}
                        onPress={() => this.props.navigation.navigate('Login')}
                    >
                        <Text style={styles.nextTop}>Passer</Text>
                        <Image 
                            style = {styles.nextTopArrow}
                            source = { require('../../assets/img/next_top.png') }
                        />
                    </TouchableOpacity>
                    <View style={styles.content}>
                        <View style={styles.imageCont}>
                            <Image
                                style = {styles.mainImage}
                                source = {require('../../assets/img/step_three.png')}
                            />
                        </View>
                        <Text style={styles.text}>Réserve sur l'appli et récupère tes produits directement chez ton commerçant.</Text>
                    </View>
                    <View style={styles.bottomControls}>
                        <Pagination page={this.state.page} />
                        <Button
                            onPress={() => this.props.navigation.navigate('Login')}
                        >
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>C'est parti !</Text>
                            </View>
                        </Button>
                    </View>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: hp('100%'),
        backgroundColor: '#00CCBD',
        paddingTop: hp('6.9%'),
        paddingBottom: hp('9%'),
    },

    wrapper: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-between"
    },

    topButton:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: wp('6.7%'),
        marginBottom: hp('3.2%')
    },

    nextTop: {
        fontFamily: Fonts.Bold,
        color: '#FFFFFF',
        fontSize: 16,
        lineHeight: 16,
        marginRight: 7
    },

    nextTopArrow: {
        width: wp('2.1%'),
        height: wp('2.1%')
    },

    imageCont: {
        justifyContent: 'center',
        alignItems: 'center',
        height: hp ('39.8%'),
        marginBottom: hp('6%'),
    },

    mainImage: {
        resizeMode: 'contain',
        height: '100%',
        width: '100%'
    },

    content: {
        display: 'flex',
        paddingHorizontal: wp('12%')
    },

    text: {
        fontFamily: Fonts.Bold,
        fontSize: 24,
        lineHeight: 32,
        color: '#FFFFFF'
    },

    bottomControls: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: wp('12%'),
    },

    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('52.3'),
        height: hp('6.9%'),
        backgroundColor: '#FFFFFF',
        borderRadius: wp('2%'),
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 1
    },

    buttonText: {
        fontFamily: Fonts.Bold,
        fontSize: hp('2.35%'),
        lineHeight: hp('2.35%'),
        fontFamily: Fonts.Bold,
        fontSize: hp('2.35%'),
        color: '#00CCBD'
    }
});