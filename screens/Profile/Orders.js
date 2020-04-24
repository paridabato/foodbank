import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../../assets/styles/Fonts';
import OrdersDone from '../../parts/Profile/OrdersDone';
import OrdersInProgress from '../../parts/Profile/OrdersInProgress';

const windowHeight = Dimensions.get('window').height;

function MyTabBar({ state, descriptors, navigation, position }) {
    return (
      <View style={styles.tabCont}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={[styles.tab, {backgroundColor: isFocused ? '#00ccbd' : 'transparent' }]}
            >
              <Text style={[{ color: isFocused ? '#fff' : '#00ccbd'  }, styles.tabText]}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

export default class ProfileOrders extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <View style={styles.container}>
                <StatusBar translucent backgroundColor="#fff" barStyle = 'dark-content'/>
                <View style={styles.wrapper}>
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
                        <Text style={styles.headerText}>Mes commandes</Text>
                    </View>
                    <View style={styles.content}>
                        <Tab.Navigator tabBar={props => <MyTabBar {...props} /> }>
                                <Tab.Screen name="Commandes passés" component={OrdersDone} />
                                <Tab.Screen name="Commandes en cours" component={OrdersInProgress} />
                        </Tab.Navigator>
                    </View>
                </View>
            </View>
        )
    }
}

const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
    container: {
        paddingTop: hp('6.4%'),
        flex: 1,
        backgroundColor: 'white',
    },

    wrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
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
        width: '100%',
        height: hp(100),
        backgroundColor: '#eee',
        paddingBottom: hp(7.51),
    },

    tabCont: {
        flexDirection: 'row',
        paddingHorizontal: 17,
        backgroundColor: 'white',
        paddingTop: hp(0.99),
        paddingBottom: hp(1.97),
        justifyContent: 'space-between',
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 20,
        shadowOpacity: 1,
        elevation: 1
    },

    tabText: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.72),
        lineHeight: hp(2.21),
        textAlign: "center",
    },

    tab: {
        width: '48.97%',
        paddingVertical: 7,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18
    }
})