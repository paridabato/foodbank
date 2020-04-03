import React, { Component } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class UserButton extends Component {
    render(){
        return(
            <View style={styles.cont}>
                <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('Profile', {screen: 'ProfileMain'})}
                >
                    <Image
                        style={styles.img}
                        source={require('../../assets/img/user_logo.png')}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cont: {
        width: wp('10.7%'),
        height: wp('10.7%'),
    },

    img: {
        resizeMode: 'contain',
        width: '100%',
    }
})