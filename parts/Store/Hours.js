import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../../assets/styles/Fonts';

export default class Hours extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: {
                mon_fr: '06h - 19h',
                sut: '09h - 12h',
                sun: 'Fermé'
            }
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Horaires</Text>
                <View style={styles.content}>
                    <View style={styles.ImageBox}>
                        <Image
                            source={require('../../assets/img/icons/default_small.png')}
                        />
                    </View>
                    <View style={styles.hoursBox}>
                        <View style={[styles.hoursBoxItem, {marginBottom: hp(4.43)}]}>
                            <Text style={styles.day}>Lundi au vendredi</Text>
                            <Text style={styles.hours}>{this.state.hours.mon_fr}</Text>
                        </View>
                        <View style={[styles.hoursBoxItem, {marginBottom: hp(4.43)}]}>
                            <Text style={styles.day}>Samedi</Text>
                            <Text style={styles.hours}>{this.state.hours.mon_fr}</Text>
                        </View>
                        <View style={styles.hoursBoxItem}>
                            <Text style={styles.day}>Dimanche</Text>
                            <Text style={styles.hours}>{this.state.hours.mon_fr}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 10,
        shadowOpacity: 1,
        paddingHorizontal: 17,
        paddingTop: hp(2.46),
        paddingBottom: hp(3.2),
        borderColor: '#eee',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        marginBottom: hp(2.95)
    },

    title: {
        fontFamily: Fonts.Bold,
        fontSize: hp(2.21),
        lineHeight: hp(3.32),
        color: "#142444",
        marginBottom: hp(1.48),
        textAlign: 'left'
    },

    content: {
        flexDirection: 'row',
    },

    ImageBox: {
        marginRight: 8
    },

    day: {
        fontFamily: Fonts.Regular,
        fontSize: hp(1.97),
        lineHeight: hp(1.97),
        color: "#5a657c",
        marginBottom: hp(1.23)
    },

    hours: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.97),
        lineHeight: hp(1.97),
        color: "#142444"
    }
})