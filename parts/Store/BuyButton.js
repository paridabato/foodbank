import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import Fonts from '../../assets/styles/Fonts';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class BuyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qty: props.qty
        }
    }

    render() {
        if(this.state.qty == 0) {
            return(
                <View style={[styles.availableButton, styles.notAvailableButton]}>
                    <Icon
                            name='briefcase'
                            size={14}
                            type='material-community'
                            color='#fff'
                        />
                    <Text style={styles.text}>Indisponible</Text>
                </View>
            )
        } else if(this.state.qty < 4) {
            return(
                <View>
                    <View style={styles.availableButton}>
                        <Icon
                            name='briefcase'
                            size={14}
                            type='material-community'
                            color='#fff'
                        />
                        <Text style={styles.text}>Dernier</Text>
                    </View>
                </View>
            )
        } else if(this.state.qty >= 4) {
            return(
                <View>
                    <View style={styles.availableButton}>
                        <Icon
                                name='briefcase'
                                size={14}
                                type='material-community'
                                color='#fff'
                            />
                        <Text style={styles.text}>Plus que 4</Text>
                    </View>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    availableButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 3,
        paddingHorizontal: 8,
        paddingTop: 1,
        paddingBottom: 3,
        backgroundColor: "#00ccbd"
    },

    notAvailableButton: {
        backgroundColor: "#a1a7b4",
        opacity: 0.5
    },

    text: {
        fontFamily: Fonts.Regular,
        fontSize: 15,
        color: '#fff',
        lineHeight: 18,
        marginLeft: 8,
    }
})