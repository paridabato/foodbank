import React, { Component } from 'react';
import { View, Image, StyleSheet, ScrollView, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Header from '../parts/Main/Header';
import Offer from '../parts/Main/Offer';
import Category from '../parts/Main/CategorySlider';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <View style={styles.container}>
            <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.0)" barStyle="dark-content"/>
            <Header navigation={this.props.navigation} />
                    <View style={{position: 'relative', flex: 1}}>
                        <ScrollView>
                            <View style={{paddingBottom: hp(10)}}>
                                <Offer />
                                <Category navigation={this.props.navigation} category_name={'Dernières chances'} />
                                <Category navigation={this.props.navigation} category_name={'Offres en cours'} />
                                <Category navigation={this.props.navigation} category_name={'Les nouveaux fooders'} />
                                <Category navigation={this.props.navigation} category_name={'Dernières chances'} />
                                <Category navigation={this.props.navigation} category_name={'Offres en cours'} />
                                <Category navigation={this.props.navigation} category_name={'Les nouveaux fooders'} />
                                {/* <View style={styles.container}></View> */}
                            </View>
                        </ScrollView>
                        <TouchableOpacity style={styles.mapBox}
                            onPress={()=>this.props.navigation.navigate('Search')}
                        >
                            <Image
                                style={styles.mapIcon}
                                source={require('../assets/img/icons/map_icon.png')}
                            />
                        </TouchableOpacity>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    mapBox: {
        position: 'absolute',
        bottom: hp(5),
        right: 20,
        width:56,
        height: 56,
        backgroundColor: '#00CCBD',
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "rgba(0, 0, 0, 0.15)",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 10,
        shadowOpacity: 1,
        elevation: 5
    },

    mapIcon: {
        resizeMode: 'contain'
    }
})