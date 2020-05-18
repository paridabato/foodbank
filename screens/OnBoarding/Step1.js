import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../../assets/styles/Fonts';
import Pagination from '../../parts/OnBoarding/Pagination';

const windowHeight = Dimensions.get('window').height;

export default class StepOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <StatusBar translucent backgroundColor="rgba(0 ,0, 0, 0.3)" barStyle = 'light-content'/>
                <View style={styles.wrapper}>
                    <TouchableOpacity 
                        style={styles.topButton}
                        onPress={() => this.props.navigation.replace('Login')}
                    >
                        <Text style={styles.nextTop}>Passer</Text>
                        <Image 
                            style = {styles.nextTopArrow}
                            source = { require('../../assets/img/back_arrow.png') }
                        />
                    </TouchableOpacity>
                    <View style={styles.imageCont}>
                            <Image
                                style = {styles.mainImage}
                                source = {require('../../assets/img/onboarding1.png')}
                            />
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.text}>Chaque jour, de nombreux produits invendus <Text style={styles.tintText}>n’attendent qu’à être consommés.</Text></Text>
                    </View>
                    <View style={styles.bottomControls}>
                        <Pagination page={this.state.page} />
                        <TouchableOpacity
                            style={styles.bottomButton}
                            onPress={() => this.props.navigation.navigate('StepTwo')}
                        >
                            <Image 
                                style={styles.bottomButtonImage}
                                source = {require('../../assets/img/arrow_right.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingBottom: hp('6%'),
    },

    wrapper: {
        position: 'relative',
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    },

    topButton:{
        position: 'absolute',
        top: hp('6.9%'),
        right: 17,
        zIndex: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    nextTop: {
        fontFamily: Fonts.Bold,
        color: '#142444',
        fontSize: 16,
        lineHeight: 16,
        marginRight: 7
    },

    nextTopArrow: {
        width: wp('2.1%'),
        height: wp('2.1%'),
        transform: [{rotate: '180deg'}]
    },

    imageCont: {
        width: '100%',
        height: hp(45.67),
        marginTop: hp(10.47),
        marginBottom: hp(6.77),
        display: 'flex',
        justifyContent: 'center'
    },

    mainImage: {
        width: '100%',
        height: hp(45.67),
        resizeMode: 'contain'
    },

    content: {
        display: 'flex',
        paddingHorizontal: wp('12%')
    },

    text: {
        fontFamily: Fonts.Bold,
        fontSize: windowHeight  >=  736 ? hp(2.95) : hp(2.21),
        lineHeight: windowHeight  >=  736 ? hp(3.94): hp(3.2),
        color: '#142444'
    },

    tintText: {
        color: '#00ccbd'
    },

    bottomControls: {
        display: 'flex',
        marginTop: 'auto',
        marginBottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: wp('12%')
    },

    bottomButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('12.8%'),
        height: wp('12.8%'),
        borderRadius: 999,
        backgroundColor: "#00ccbd",
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowRadius: 10,
        shadowOpacity: 1,
        elevation: 8
    },

    bottomButtonImage: {
        width: '50%',
        resizeMode: 'contain'
    }
});