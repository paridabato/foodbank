import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../../assets/styles/Fonts';

export default class Support extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
                <Text style={styles.headerText}>Support</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.logoBox}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/img/support_logo.png')}
                    />
                </View>
                <Text style={styles.version}>V 1.0</Text>
                <View style={styles.section}>
                    <Text style={styles.title}>Vous avez une question une réclamation ?</Text>
                    <TouchableOpacity>
                        <View style={[styles.row, {borderBottomColor: '#eee', borderBottomWidth: 1}]}>
                            <Text style={styles.text}>Nous écrire</Text>
                            <View style={styles.qustionBox}>
                                <Image
                                    style={styles.qustion}
                                    source={require('../../assets/img/icons/qustion.png')}
                                />
                            </View>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={styles.row}>
                            <Text style={styles.text}>Nous appeler</Text>
                            <View style={styles.qustionBox}>
                                <Image
                                    style={styles.qustion}
                                    source={require('../../assets/img/icons/qustion.png')}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>FAQ</Text>
                    <TouchableOpacity>
                        <View style={styles.row}>
                            <Text style={styles.text}>Voir les questions fréquentes</Text>
                            <View style={styles.qustionBox}>
                                <Image
                                    style={styles.qustion}
                                    source={require('../../assets/img/icons/qustion.png')}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.linksBox}>
                    <TouchableOpacity style={styles.linkBox}>
                        <Text style={styles.link}>Conditions générales</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.linkBox}>
                        <Text style={styles.link}>Politique de confidentialité</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.copyrights}>ⓒ Foodbank – Oneshot.nc</Text>
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
        flex: 1,
    },

    logoBox: {
        marginLeft: 'auto',
        marginRight: 'auto',
        height: hp(9.85),
        width: hp(9.85),
        marginBottom: hp(1.48)
    },

    logo: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    },

    version: {
        textAlign: 'center',
        fontFamily: Fonts.Bold,
        fontSize: hp(1.48),
        color: "#a1a7b4",
        marginBottom: hp(5.91)
    },

    section: {
        paddingHorizontal: 17,
        marginBottom: hp(5.29),
        borderBottomColor: '#eee',
        borderBottomWidth: 1
    },

    title: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.97),
        lineHeight: hp(2.95),
        color: "#142444",
        marginBottom: 4,
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: hp(1.6)
    },

    text: {
        fontFamily: Fonts.Medium,
        fontSize: hp(1.97),
        color: "#142444"
    },

    qustionBox: {
        width: hp(2.46),
        height: hp(2.7)
    },

    qustion: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },

    linksBox: {
        alignItems: 'center'
    },

    linkBox: {
        maxWidth: '70%',
    },

    link: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.72),
        color: "#00ccbd",
        marginBottom: hp(3.69)
    },

    copyrights: {
        marginTop: 'auto',
        marginBottom: 0,
        textAlign: 'center',
        fontFamily: Fonts.Regular,
        fontSize: hp(1.72),
        lineHeight: hp(2.95),
        color: "#5a657c"
    }
})
