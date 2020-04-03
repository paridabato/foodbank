import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../../assets/styles/Fonts';

export default class Engagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            engagement1: {
                bold: 'Engagé depuis 3 ans ',
                regular: 'contre le gaspillage'
            },
            engagement2: {
                bold: 'Plus de 5000 paniers sauvés ',
                regular: 'd’un sort terrible.'
            }
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Engagement</Text>
                    <View style={[styles.row, {marginBottom: hp(3.94)}]}>
                        <View style={styles.imageBox}>
                            <Image
                                style={styles.image}
                                source={require('../../assets/img/icons/default_small.png')}
                            />
                        </View>
                        <View style={styles.textBox}>
                            <Text style={[styles.text, styles.bold]}>{this.state.engagement1.bold}</Text>
                            <Text style={[styles.text, styles.regular]}>{this.state.engagement1.regular}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.imageBox}>
                            <Image
                                style={styles.image}
                                source={require('../../assets/img/icons/default_small.png')}
                            />
                        </View>
                        <View style={styles.textBox}>
                            <Text style={[styles.text, styles.bold]}>{this.state.engagement2.bold}</Text>
                            <Text style={[styles.text, styles.regular]}>{this.state.engagement2.regular}</Text>
                        </View>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 17,
        paddingTop: hp(2.7),
        paddingBottom: hp(4.18),
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },

    title: {
        fontFamily: Fonts.Bold,
        fontSize: hp(2.21),
        lineHeight: hp(3.32),
        color: "#142444",
        marginBottom: hp(1.48),
        textAlign: 'left'
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    imageBox: {
        width: 32,
        height: 28,
        marginRight: 30,
        marginLeft: 24
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },

    text: {
        fontSize: hp(1.97),
        lineHeight: hp(2.95),
        color: '#5a657c'
    },

    bold: {
        fontFamily: Fonts.Bold
    },

    regular: {
        fontFamily: Fonts.Regular
    }
})