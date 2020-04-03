import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../../assets/styles/Fonts';

export default class HeaderMenuItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            image: props.image,
            first: props.first
        }
    }

    render(){
        return(
            <View style= {this.state.first == true ? [styles.box, {marginLeft: 0}] : styles.box } >
                <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('Category', {category_name: this.state.name})}
                >
                    <Image
                        style={styles.image}
                        source={this.state.image}
                    />
                    <Text style={styles.name}>{this.state.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        width: wp(26.4),
        height: wp(23.46),
        position: 'relative',
        zIndex: 1,
        borderRadius: 5,
        marginLeft: wp(2.13)
    },

    image: {
        resizeMode: 'contain',
        width: wp(26.4),
        height: wp(23.46),
    },

    name: {
        width: '100%',
        fontFamily: Fonts.Bold,
        fontSize: hp(1.72),
        color: "#ffffff",
        textAlign: 'center',
        position: 'absolute',
        zIndex: 2,
        top: hp(0.98),
    }
})