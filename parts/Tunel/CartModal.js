import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
import Button from 'react-native-button';
import Fonts from '../../assets/styles/Fonts';
import OrderList from './OrderList';
import CartStoreInfo from './CartStoreInfo';

export default class CartModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        order:  {
            store: 'Carrefour City',
            adress1: '12 rue des Hallebardes',
            adress2: '67000 Strasbourg',
            number: 1935,
            date: '3 novembre 2019',
            summ: 1540,
            currentStatus: 'confirmée',
            statuses: [
                {ready: 'done'},
                {waiting: 'waiting'}, 
                {finished: 'disabled'}
            ],
            products: [
                {
                    count: 1,
                    name: '16 california makis',
                    price: 1100,
                },
                {
                    count: 1,
                    name: 'Soupe mizo',
                    price: 320,
                }
            ],
            subTotal: 1420,
            tgc: 90,
            service: 120
        }
    };
  }

  render() {
    return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.enabled}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
    >
        <View style={styles.modal}>
            <View style={styles.modalContent}>
                <View style={styles.modalHead}>
                    <Text style={styles.modalHeadText}>Votre panier</Text>
                    <Icon
                        onPress={this.props.handler}
                        name='close'
                        size={hp(2.95)}
                        type='material-community'
                        color='#142444'
                        containerStyle={styles.closeCont}
                    />
                </View>
                <View style={styles.modalInner}>
                    <CartStoreInfo store={{name: this.state.order.store, adress: this.state.order.adress1, adress2: this.state.order.adress2}}/>
                    <ScrollView>
                        <View style={styles.timeBox}>
                            <View style={styles.timeIconBox}>
                                <Image
                                    style={styles.timeIcon}
                                    source={require('../../assets/img/icons/timer_icon.png')}
                                />
                            </View>
                            <Text style={styles.timeText}>Commande à retirer avant 19h</Text>
                        </View>
                        <OrderList order={this.state.order} />
                        <View style={styles.payment}>
                            <View style={styles.left}>
                                <View style={styles.paymentIconBox}>
                                    <Image
                                        style={styles.paymentIcon}
                                        source={require('../../assets/img/icons/apple_pay.png')}
                                        />
                                </View>
                                <Text style={styles.paymentText}>Apple Pay</Text>
                            </View>
                            <TouchableOpacity>
                                <Text style={styles.paymentLink}>Modifier</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{paddingBottom: hp(7.38), paddingHorizontal: 17}}>
                            <Button
                                containerStyle={styles.button}
                                onPress={()=>{
                                    this.props.buy();
                                    this.props.navigation.navigate('OrderInfo', {order: this.state.order, prev_screen: 'payment'});
                                }}>
                                <Text style={styles.buttonText}>Finaliser ma commande : {this.state.order.summ} XPF</Text>
                            </Button>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    </Modal>
    );
  }
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
            width: 0,
            height: -5
        },
        shadowRadius: 20,
        shadowOpacity: 1,
        elevation: 5
    },

    modalContent: {
        height: hp(95),
        width: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: hp(1.84),
        borderTopRightRadius: hp(1.84),
        alignSelf: 'flex-end'
    },

    modalHead: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: hp(2.7),
        position: 'relative'
    },

    modalHeadText: {
        fontFamily: Fonts.Bold,
        fontSize: hp(2.21),
        color: "#142444"
    },

    closeCont: {
        position: 'absolute',
        right: hp(2.09),
        top: hp(2.33),
        height: hp(3.69),
        width: hp(3.69),
        backgroundColor: '#eee',
        borderRadius: 999,
        justifyContent: 'center',
        alignItems: 'center'
    },

    modalInner: {
        flex: 1,
        // paddingBottom: hp(7.38),
    },

    modalButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: "#00ccbd",
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
          width: 0,
          height: 8
        },
        shadowRadius: 10,
        shadowOpacity: 1,
        height: hp(6.89),
        elevation: 8,
        width: '100%'
    },

    modalButtonText: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.97),
        color: "#fff"
    },

    timeBox: {
        marginHorizontal: 17,
        flexDirection: 'row',
        paddingVertical: hp(2.95),
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        marginBottom: hp(3.69),
        alignItems: 'center'
    },

    timeIconBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: hp(2.95),
        height: hp(2.46),
        marginRight: wp(3.73)
    },

    timeIcon: {
        width: hp(1.72),
        height: '100%',
        resizeMode: 'contain'
    },

    timeText: {
        fontFamily: Fonts.Regular,
        fontSize: hp(1.97),
        lineHeight: hp(2.95),
        color: "#5a657c"
    },

    payment: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: hp(7.38),
        paddingHorizontal: 17
    },

    left: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    paymentIconBox: {
        width: hp(3.69),
        height: hp(2.46),
        marginRight: wp(2.66)
    },

    paymentIcon: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },

    paymentText: {
        fontFamily: Fonts.Regular,
        fontSize: hp(1.72),
        lineHeight: hp(2.95),
        color: "#5a657c"
    },

    paymentLink: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.72),
        color: "#00ccbd"
    },

    button: {
        width: '100%',
        height: hp(6.89),
        borderRadius: hp(0.61),
        backgroundColor: "#00ccbd",
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowRadius: 10,
        shadowOpacity: 1,
        elevation: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.97),
        color: "#ffffff"
    }
})
