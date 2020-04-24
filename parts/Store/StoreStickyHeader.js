import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, Animated, FlatList } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../../assets/styles/Fonts';

export default class StoreStickyHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: this.props.categories.map((item, index)=> {
                const tabList={}
                tabList['name'] = item.title
                return tabList
            }),
            active_tab: 0
        };
    }

    onTabPressHandler = (index) => {
        this.props.onClick(index),
        this.setState({
            active_tab: index
        })
    }

    goToTab(tabIndex) {
        this.tabList.scrollToIndex({ animated: true, index: tabIndex ? tabIndex : this.state.active_tab});
    };

    componentDidUpdate() {
        this.goToTab(this.props.currentCat);
    }

    render() {
    return (
      <Animated.View style={[{opacity: this.props.opacity, zIndex: this.props.zIndex}, styles.container]}>
           <StatusBar translucent backgroundColor='rgba(0, 0, 0, 0.4)' barStyle = 'dark-content' />
           <View style={styles.topBar}>
               <View style={styles.left}>
                    <TouchableOpacity
                            onPress={()=>this.props.navigation.goBack()}
                            style={styles.backButton}
                    >
                        <Image
                                style={styles.backImage}
                                source={require('../../assets/img/back_arrow.png')}
                        />
                    </TouchableOpacity>
               </View>
               <View style={styles.mid}>
                   <Text style={styles.title}>Boulangerie Martin</Text>
               </View>
               <View style={styles.right}></View>
           </View>
           <View>
                <FlatList
                    contentContainerStyle={{ paddingRight: 17 }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.menu}
                    data={this.state.tabs}
                    ref={ref => {
                        this.tabList = ref;
                    }}
                    renderItem={({item,index}) =>
                            <TouchableOpacity
                                key={index}
                                style={index === this.props.currentCat ? [styles.button, styles.buttonActive] : styles.button}
                                    onPress={() => this.onTabPressHandler(index)}
                            >
                            <Text style={index === this.props.currentCat ? [styles.buttonText, styles.buttonTextActive] : styles.buttonText}>{item.name}</Text>
                        </TouchableOpacity>
                    }
                    keyExtractor={(item, index) => index.toString()}
                />
           </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'white',
        paddingTop: hp(6.65),
        paddingBottom: hp(1.97),
        backgroundColor: "#ffffff",
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 20,
        shadowOpacity: 1,
        elevation:  1
    },

    topBar: {
        flexDirection: 'row',
        paddingHorizontal: 17,
        alignItems: 'center',
        marginBottom: hp(2.21)
    },

    left: {
        flex: 1,
        alignItems: 'flex-start'
    },

    mid: {
        flex: 2,
        alignItems: 'center'
    },

    right: {
        flex: 1
    },

    backButton: {
        height: hp(3.44),
        width: hp(3.44),
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontFamily: Fonts.Bold,
        fontSize: hp(2.21),
        color: "#142444"
    },

    menu: {
        paddingLeft: 17
    },

    button: {
        paddingHorizontal: wp(4),
        paddingVertical: hp(0.8),
        marginRight: 5,
        borderRadius: 18,
        backgroundColor: 'white'
    },

    buttonActive: {
        backgroundColor: '#00ccbd'
    },

    buttonText: {
        fontFamily: Fonts.Bold,
        fontSize: wp(3.73),
        lineHeight: wp(3.73),
        color: "#00ccbd"
    },

    buttonTextActive: {
        color: "white"
    }
})