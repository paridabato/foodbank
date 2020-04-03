import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../../assets/styles/Fonts';
import Pagination from '../../parts/OnBoarding/Pagination';
import Button from 'react-native-button';

export default class StepTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.wrapper}>
                    <TouchableOpacity 
                        style={styles.topButton}
                        onPress={() => this.props.navigation.navigate('StepThree')}
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
                                source = {require('../../assets/img/step_two.png')}
                            />
                        </View>
                        <Text style={styles.text}>Identifie les bons plans anti-gaspi autour de toi.</Text>
                    </View>
                    <View style={styles.bottomControls}>
                        <Pagination page={this.state.page} />
                        <Button
                            onPress={() => this.props.navigation.navigate('StepThree')}
                        >
                            <Image 
                                source = {require('../../assets/img/arrow_transparent.png')}
                            />
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
        backgroundColor: '#FFD70D',
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

    bottomButtonImage: {
        width: wp('12.8%'),
        height: wp('12.8%'),
        maxWidth: 48,
        maxHeight: 48
    }
});