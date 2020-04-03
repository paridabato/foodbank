import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Header } from 'react-native-elements';

import UserButton from './UserButton';
import LeftHeader from './LeftHeader';
import MenuItem from './HeaderMenuItem';

export default class MainHeader extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <View>
                <Header
                    statusBarProps={{ translucent: true }}
                    backgroundImage={require('../../assets/img/header_bg.png')}
                    backgroundImageStyle={{right: 0, top: 0, left: 'auto', bottom: 'auto', width: wp(49.06), height: hp(21.24), resizeMode: 'cover'}}
                    leftComponent={<LeftHeader />}
                    rightComponent={<UserButton navigation={this.props.navigation} />}
                    containerStyle={styles.cont}
                />
                    <View style={{paddingTop: hp('3.5%'), paddingLeft: wp('4.3%'), borderBottomColor: 'white', borderBottomWidth: 10}}>
                        <ScrollView
                            scrollEventThrottle={16}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <MenuItem navigation={this.props.navigation} first={true} name={'Burgers'} image={require('../../assets/img/burgers.png')} />
                            <MenuItem navigation={this.props.navigation} first={false} name={'Sushis'} image={require('../../assets/img/sushis.png')} />
                            <MenuItem navigation={this.props.navigation} first={false} name={'Salades'} image={require('../../assets/img/salades.png')} />
                            <MenuItem navigation={this.props.navigation} first={false} name={'Desserts'} image={require('../../assets/img/desserts.png')} />
                            <MenuItem navigation={this.props.navigation} first={false} name={'Pates'} image={require('../../assets/img/pates.png')} />
                        </ScrollView>
                    </View>
            </View>
        )
    }
}

const styles =  StyleSheet.create({
    cont: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: hp('12.25%'),
        paddingHorizontal: wp('4.3%'),
        height: hp('24.5%'),
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'transparent'
    }
})