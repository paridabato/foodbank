import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../../assets/styles/Fonts';

export default class CartStoreInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.logoBox}>
              <Image 
                style={styles.logo}
                source={require('../../assets/img/pates.png')}
              />
          </View>
          <View style={styles.info}>
                <Text style={styles.name}>{this.props.store.name}</Text>
                <Text style={styles.adress}>{this.props.store.adress}</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 17,
        paddingVertical: hp(3.94),
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        flexDirection: 'row'
    },

    logoBox: {
        borderRadius: 999,
        overflow: 'hidden',
        width: hp(8),
        height: hp(8),
        marginRight: wp(5.33)
    },

    logo: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },

    info: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    name: {
        fontFamily: Fonts.Bold,
        fontSize: hp(2.7),
        lineHeight: hp(3.94),
        color: "#142444"
    },

    adress: {
        fontFamily: Fonts.Regular,
        fontSize: hp(1.72),
        lineHeight: hp(2.95),
        color: "#5a657c"
    }
})