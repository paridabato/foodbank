import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../assets/styles/Fonts';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import SwipeUpDown from 'react-native-swipe-up-down';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
        coordinate: {
            latitude: -22.276425, 
            longitude :166.447334
        },
    };
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
              <TouchableOpacity
                style={styles.roundButton}
                onPress={()=>this.props.navigation.goBack()}
              >
                <Image
                    style={styles.backImg}
                    source={require('../assets/img/back_arrow.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.miidleButton}
              >
                <Text style={styles.miidleButtonText}>Nouméa, 98800</Text>
                <Image
                    style={styles.downArrow}
                    source={require('../assets/img/icons/drop_down.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.roundButton}
              >
                <Image
                    style={styles.locationIcon}
                    source={require('../assets/img/icons/location_icon.png')}
                />
              </TouchableOpacity>
          </View>
          <View style={styles.mapCont}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: -22.276450,
                        longitude: 166.447321,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                    }}
                    style={styles.map}
                >
                    <Marker
                        coordinate={this.state.coordinate}
                    >
                        <Image
                            source={require('../assets/img/icons/map_pin.png')}
                        />
                    </Marker>
                </MapView>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#fff'
    },

    header: {
        width: '100%',
        position: 'absolute',
        paddingHorizontal: 17,
        top: hp(8.12),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 10
    },

    roundButton: {
        backgroundColor: 'white',
        width: hp(4.92),
        height: hp(4.92),
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "rgba(0, 0, 0, 0.15)",
            shadowOffset: {
                width: 0,
                height: 5
            },
        shadowRadius: 10,
        shadowOpacity: 1,
        elevation: 5,
        borderRadius: 999,
    },

    miidleButton: {
        height: hp(4.92),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: wp(5.86),
        backgroundColor: 'white',
        borderRadius: hp(2.7),
        shadowColor: "rgba(0, 0, 0, 0.15)",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 10,
        shadowOpacity: 1,
        elevation: 5
    },

    miidleButtonText: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.97),
        color: "#142444",
        marginRight: wp(2.66)
    },

    backImg: {
        width: hp(1.72),
        height: hp(1.72),
        resizeMode: 'contain'
    },

    locationIcon: {
        width: hp(2.21),
        height: hp(2.21),
        resizeMode: 'contain'
    },

    downArrow: {
        width: hp(1.23),
        height: hp(0.98),
        resizeMode: 'contain'
    },

    mapCont: {
        width: '100%',
        height: hp(70.44),
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'white'
    },

    map: {
        ...StyleSheet.absoluteFillObject,
    },
})
