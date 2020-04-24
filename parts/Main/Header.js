import React, { Component } from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
                <View style={styles.cont}>
                    <LeftHeader />
                    <UserButton navigation={this.props.navigation} />
                    <Image
                        style={styles.background}
                        source={require('../../assets/img/header_bg.png')}
                    />
                </View>
                    <View style={{marginTop: -hp(5.41), paddingLeft: wp('4.3%'), borderBottomColor: 'white', borderBottomWidth: 10}}>
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
        position: 'relative',
        width: '100%',
        flexDirection: 'row',
        paddingTop: hp('7.63%'),
        paddingBottom: hp(8.62),
        paddingHorizontal: wp('4.3%'),
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'transparent'
    },

    background: {
        position: 'absolute',
        right: 0,
        top: 0,
        left: 'auto',
        bottom: 'auto',
        width: wp(49.06),
        height: hp(21.24),
        resizeMode: 'cover',
        zIndex: -1
    }
})