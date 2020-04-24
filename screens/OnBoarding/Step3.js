import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../../assets/styles/Fonts';
import Pagination from '../../parts/OnBoarding/Pagination';

const windowHeight = Dimensions.get('window').height;

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
                <StatusBar translucent backgroundColor="rgba(0 ,0, 0, 0.3)" barStyle = 'light-content'/>
                <View style={styles.wrapper}>
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
                    <View style={styles.imageCont}>
                            <Image
                                style = {styles.mainImage}
                                source = {require('../../assets/img/onboarding3.png')}
                            />
                    </View>
                    <View style={styles.sqare}></View>
                    <View style={styles.content}>
                        <Text style={styles.text}>Réserve sur l'appli et récupère tes produits directement chez ton commerçant.</Text>
                    </View>
                    <View style={styles.bottomControls}>
                        <Pagination page={this.state.page} />
                        <TouchableOpacity
                            style={styles.bottomButton}
                            onPress={() => this.props.navigation.navigate('Login')}
                        >
                            <Text style={styles.bottomButtonText}>C'est parti !</Text>
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
        backgroundColor: '#E54C88',
        paddingBottom: hp('6%'),
    },

    wrapper: {
        position: 'relative',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-between"
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
        position: 'relative',
    },

    mainImage: {
    },

    sqare: {
        width: wp(200),
        height: wp(200),
        backgroundColor: '#ff7bad',
        position: 'absolute',
        top: -wp(112),
        left: -wp(100),
        zIndex: -1,
        transform: [
            {rotate: '60deg'}
        ],
    },

    content: {
        display: 'flex',
        paddingHorizontal: wp('12%')
    },

    text: {
        fontFamily: Fonts.Bold,
        fontSize: windowHeight  >=  736 ? hp(2.95) : hp(2.21),
        lineHeight: windowHeight  >=  736 ? hp(3.94): hp(3.2),
        color: '#FFFFFF'
    },

    bottomControls: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: wp('12%'),
    },

    bottomButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 196,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowRadius: 10,
        shadowOpacity: 1,
        elevation: 8
    },

    bottomButtonText: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.97),
        color: "#00ccbd"
    }
});