import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, TouchableOpacity, Switch } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../../assets/styles/Fonts';

export default class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
        enabled: false
    };
  }

  render() {
    return (
        <View style={styles.container}>
        <StatusBar translucent backgroundColor="#fff" barStyle = 'dark-content'/>
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
                <Text style={styles.headerText}>Notifications</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.row}>
                    <Text style={styles.text}>Recevoir les notifications</Text>
                    <Switch
                        style={styles.switch}
                        trackColor={{ false: "#eee", true: "#00ccbd" }}
                        thumbColor='#fff'
                        ios_backgroundColor="#eee"
                        onValueChange={()=>this.setState({
                            enabled: !this.state.enabled
                        })}
                        value={this.state.enabled}
                    />
                </View>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: hp('6.4%'),
        flex: 1,
        backgroundColor: 'white',
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
        paddingTop: hp(3.94),
        paddingBottom: hp(7.38),
        flex: 1
    },

    row: {
        paddingHorizontal: 17,
        flexDirection: 'row',
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    text: {
        fontFamily: Fonts.Regular,
        fontSize: hp(1.97),
        color: "#142444"
    },

    switch: {
        marginTop: hp(1.1),
        marginBottom: hp(0.98)
    }
})
