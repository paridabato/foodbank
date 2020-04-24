import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../assets/styles/Fonts';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import BottomDrawer  from 'rn-bottom-sheet';
import SearchHeader from '../parts/Search/SearchHeader';
import SearchResult from '../parts/Search/SearchResult';
import SearchStoreList from '../parts/Search/SearchStoreList';
import SearchMenuCats from '../parts/Search/SearchMenuCats';
import { navigationRef } from '../RootNavigation';
import SearchSettings from '../parts/Search/SearchSettings';

const SearchStack = createStackNavigator();

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
        coordinate: {
            latitude: -22.276425, 
            longitude :166.447334
        },
        searchActive: false,
        enabled: false
    };
    this.hideModal = this.hideModal.bind(this);
    this.showModal = this.showModal.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.showDrawer = this.showDrawer.bind(this);
  }

  collapseSearch() {
      this.setState({
          searchActive: false
      });
  }

  expandSearch() {
      this.setState({
          searchActive: true
      })
  }

  hideModal() {
    this.setState({
        enabled: false
    })
}

showModal() {
    this.setState({
        enabled: true
    })
}
    
toggleDrawer() {
    this.drawer.toggleDrawerState();
}

showDrawer() {
    this.drawer.openBottomDrawer();
}

hideDrawer() {
    this.drawer.closeBottomDrawer();
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
                    activeOpacity={0.6}
                    style={styles.miidleButton}
                    onPress={()=>this.props.navigation.navigate('Location')}
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
            <BottomDrawer
                ref={ref => this.drawer = ref}
                containerHeight={hp(93)}
                downDisplay={hp(63)}
                startUp={this.state.searchActive}
                roundedEdges={true}
                onCollapsed={()=>this.collapseSearch()}
                onExpanded={() => this.expandSearch()}
            >
                <SearchHeader
                    showModal={this.showModal}
                    navigation={this.props.navigation}
                    touchHandler={this.toggleDrawer}
                    inputActive={this.showDrawer}
                />
                <NavigationContainer
                    ref={navigationRef}
                    independent={true}
                >
                    <SearchStack.Navigator
                        initialRouteName="SearchMenuCats"
                        screenOptions={{
                            headerShown: false
                        }}
                    >
                        <SearchStack.Screen
                            name="SearchResult"
                            component={SearchResult}
                            options={{
                                headerShown: false
                            }}
                        />
                        <SearchStack.Screen
                            name="SearchStoreList"
                            component={SearchStoreList}
                            options={{
                                headerShown: false
                            }}
                        />
                        <SearchStack.Screen
                            name="SearchMenuCats"
                            component={SearchMenuCats}
                            options={{
                                headerShown: false
                            }}
                        />
                    </SearchStack.Navigator>
                </NavigationContainer>
            </BottomDrawer>
            <SearchSettings enabled={this.state.enabled} handler={this.hideModal}/>
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
        zIndex: 0
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
        backgroundColor: 'white',
        zIndex: -1
    },

    map: {
        ...StyleSheet.absoluteFillObject,
    }
})
