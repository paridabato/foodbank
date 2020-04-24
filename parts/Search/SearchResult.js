import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Platform, KeyboardAvoidingView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../../assets/styles/Fonts';

export default class SearchMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
            <KeyboardAvoidingView
                style={{flex: 1, paddingBottom: hp(5.4)}}
                behavior={Platform.Os == "ios" ? "padding" : "height"}
            >
            <ScrollView>
                <Text style={styles.searchTitle}>Type de commerçant</Text>
                {this.props.route.params.data.map((item, index) => {
                    return(
                        <TouchableOpacity style={styles.searchItemWrapper} key={index}>
                            <View style={styles.searchItem}>
                                <View style={styles.searchIconBox}>
                                    <Image
                                        style={styles.searchIcon}
                                        source={require('../../assets/img/icons/store_icon.png')}
                                    />
                                </View>
                                <Text style={styles.searchText}>{item.name.first} {item.name.last}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
                </ScrollView>
            </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    searchTitle: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.48),
        color: "#aaaaaa",
        marginBottom: hp(1.6),
        paddingHorizontal: 17
    },

    searchItemWrapper: {
        paddingHorizontal: 17
    },

    searchItem: {
        flexDirection: 'row',
        paddingVertical: hp(1.72),
        alignItems: 'center',
        borderBottomColor: '#eee',
        borderBottomWidth: 1
    },

    searchIconBox: {
        width: hp(1.84),
        height: hp(1.97),
        marginRight: wp(4.8),
        marginLeft: wp(1.5)
    },

    searchIcon: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },

    searchText: {
        fontFamily: Fonts.Medium,
        fontSize: hp(1.97),
        color: "#142444"
    }
})
