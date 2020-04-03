import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../../assets/styles/Fonts';
import OrderInfoTop from '../../parts/Profile/OrderInfoTop';
import OrderStatus from '../../parts/Profile/OrderStatus';
import OrderStoreInfo from '../../parts/Profile/OrderStoreInfo';
import OrderCheck from '../../parts/Profile/OrderCheck';
import QRModal from '../../parts/Tunel/QRModal';

export default class OrderInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            order: props.route.params.order,
            showModal: false
        }
        this.modalSwitcher = this.modalSwitcher.bind(this)
    }

    modalSwitcher() {
        this.setState((prevState ) => ({
            showModal: !prevState.showModal
        }));
    }

    render(){
        return(
            <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle = 'light-content'/>
                <View style={styles.wrapper}>
                    <View style={styles.header}>
                            {this.props.route.params.prev_screen ? 
                                  <Icon
                                    onPress={()=>this.props.navigation.navigate('Main')}
                                    name='close'
                                    size={hp(2.95)}
                                    type='material-community'
                                    color='#fff'
                                    containerStyle={styles.backCross}
                                />
                                :
                                <TouchableOpacity style={styles.back}
                                    onPress={
                                        ()=>this.props.navigation.goBack()
                                    }
                                >
                                    <Image
                                        style={styles.backImg}
                                        source={require('../../assets/img/back_arrow_white.png')}
                                    />
                                </TouchableOpacity>
                            }
                        <Text style={styles.headerText}>Votre commande</Text>
                    </View>
                    <View style={styles.content}>
                        <OrderInfoTop order={this.state.order} />
                        <ScrollView>
                            <OrderStatus order={this.state.order} />
                            <OrderStoreInfo order={this.state.order} />
                            <OrderCheck handler ={this.modalSwitcher} navigation={this.props.navigation} order={this.state.order} />
                        </ScrollView>
                    </View>
                </View>
                <QRModal handler ={this.modalSwitcher} enabled={this.state.showModal} order={this.props.order} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: hp('6.4%'),
        flex: 1,
        backgroundColor: '#00ccbd',
    },

    wrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
    },

    header: {
        backgroundColor: '#00ccbd',
        position: 'relative',
        width: '100%',
        paddingBottom: hp(1.35),
    },

    back: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        padding: 17,
        zIndex: 2
    },

    backCross: {
        position: 'absolute',
        left: 11,
        height: 30,
        width: 30,
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
        color: '#fff',
        textAlign: 'center',
    },

    content: {
        backgroundColor: 'white',
        width: '100%',
        flex: 1
    }
})