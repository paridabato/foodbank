import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Rating } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../../assets/styles/Fonts';

export default class StoreRating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: {
                common: 4.5,
                service: 4,
                amount: 4,
                quality: 5,
                votes: 50
            }
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Note de la communauté</Text>
                <View style={styles.firstRow}>
                    <View style={styles.side}>
                        <Rating
                            startingValue = {this.state.rating.common}
                            readonly
                            type='custom'
                            ratingImage={require('../../assets/img/icons/star.png')}
                            ratingCount={5}
                            imageSize={22}
                            ratingColor='#00CCBD'
                            ratingBackgroundColor='#EEE'
                        />
                    </View>
                    <View style={styles.side}>
                        <View>
                            <Text style={styles.common}>{this.state.rating.common} Très bien ({this.state.rating.votes}+)</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.side}>
                        <Text style={styles.label}>Service</Text>
                        <Rating
                            startingValue = {this.state.rating.service}
                            readonly
                            type='custom'
                            ratingImage={require('../../assets/img/icons/star.png')}
                            ratingCount={5}
                            imageSize={22}
                            ratingColor='#00CCBD'
                            ratingBackgroundColor='#EEE'
                        />
                    </View>
                    <View style={styles.side}>
                        <Text style={styles.label}>Quantité</Text>
                        <Rating
                            startingValue = {this.state.rating.amount}
                            readonly
                            type='custom'
                            ratingImage={require('../../assets/img/icons/star.png')}
                            ratingCount={5}
                            imageSize={22}
                            ratingColor='#00CCBD'
                            ratingBackgroundColor='#EEE'
                        />
                    </View>
                </View>
                <View style={[styles.row, {marginBottom: 0}]}>
                    <View style={styles.side}>
                        <Text style={styles.label}>Qualité des produits</Text>
                        <Rating
                            startingValue = {this.state.rating.quality}
                            readonly
                            type='custom'
                            ratingImage={require('../../assets/img/icons/star.png')}
                            ratingCount={5}
                            imageSize={22}
                            ratingColor='#00CCBD'
                            ratingBackgroundColor='#EEE'
                        />
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
        paddingBottom: hp(3.69),
    },

    title: {
        fontFamily: Fonts.Bold,
        fontSize: hp(2.21),
        lineHeight: hp(3.32),
        color: "#142444",
        marginBottom: hp(1.48),
        textAlign: 'left'
    },

    firstRow: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        paddingBottom:hp(3.2),
        marginBottom: hp(2.46)
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp(3.94)
    },

    side: {
        width: '50%',
        alignItems: 'flex-start'
    },

    common: {
        fontFamily: Fonts.Regular,
        fontSize: hp(1.97),
        lineHeight: hp(3.94),
        color: "#5a657c"
    },

    label: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.48),
        color: "#a1a7b4",
        marginBottom: hp(1.23)
    }
})