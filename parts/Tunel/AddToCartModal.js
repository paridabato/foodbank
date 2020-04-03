import React, { Component } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import Button from 'react-native-button';
import { Icon } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../../assets/styles/Fonts';

export default class AddToCartModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        counter: 1,
    }
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
                    <Text style={styles.modalHeadText}>Le petit brie</Text>
                    <Icon
                        onPress= {this.props.handler}
                        name='close'
                        size={hp(2.95)}
                        type='material-community'
                        color='#142444'
                        containerStyle={styles.closeCont}
                    />
                </View>
                <View style={styles.modalInner}>
                    <View style={styles.infoBox}>
                        <Text style={styles.descr}>Sandwich beurre, brie, salade</Text>
                        <Text style={styles.price}>350 XPF</Text>
                    </View>
                    <View style={styles.qtyBox}>
                        <TouchableOpacity style={styles.touch}
                            onPress={() => this.setState((prevState) => ({
                                counter: prevState.counter > 1 ? prevState.counter-1 :  prevState.counter
                              }))
                            }
                        >
                            <View style={styles.line}></View>
                        </TouchableOpacity>
                        <View style={styles.counter}>
                            <Text style={styles.counterText}>{this.state.counter}</Text>
                        </View>
                        <TouchableOpacity style={styles.touch}
                            onPress={() => this.setState((prevState) => ({
                                counter: prevState.counter+1
                              }))
                            }
                        >
                            <View style={styles.line}></View>
                            <View style={styles.lineVert}></View>
                        </TouchableOpacity>
                    </View>
                    <Button
                        containerStyle={styles.button}
                        onPress={this.props.cart}
                    >
                        <Text style={styles.buttonText}>Ajouter au panier</Text>
                    </Button>
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
        flexDirection: 'row'
    },

    modalContent: {
        height: hp(40),
        width: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: hp(1.84),
        borderTopRightRadius: hp(1.84),
        alignSelf: 'flex-end',
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
            width: 0,
            height: -5
        },
        shadowRadius: 20,
        shadowOpacity: 1,
        elevation: 5
    },

    modalHead: {
        justifyContent: 'center',
        paddingTop: hp(3.69),
        position: 'relative',
        paddingHorizontal: 17
    },

    modalHeadText: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.97),
        lineHeight: hp(2.95),
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
        paddingTop: hp(1.1),
        paddingHorizontal: 17,
        paddingBottom: hp(7.38)
    },

    infoBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: hp(2.95)
    },

    descr: {
        fontFamily: Fonts.Regular,
        fontSize: hp(1.72),
        lineHeight: hp(2.95),
        color: "#5a657c"
    },

    price: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.72),
        lineHeight: hp(2.95),
        color: "#5a657c"
    },

    qtyBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: hp(4.06)
    },

    counter: {
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: wp(12),
        marginHorizontal: wp(1.33)
    },

    counterText: {
        fontFamily: Fonts.Bold,
        fontSize: hp(2.7),
        lineHeight: hp(3.94),
        color: "#142444"
    },

    touch: {
        alignItems: 'center',
        justifyContent: 'center',
        width: hp(5.91),
        height: hp(5.91),
        borderWidth: 2,
        borderColor: "rgba(0, 204, 189, 0.5)",
        borderRadius: 999,
        position: 'relative'
    },

    line: {
        width: hp(1.48),
        height: 2,
        borderRadius: 1,
        backgroundColor: "#142444"
    },

    lineVert: {
        position: 'absolute',
        width: 2,
        height: hp(1.48),
        borderRadius: 1,
        backgroundColor: "#142444",
        top: 'auto',
        bottom: 'auto',
        left: 'auto',
        right: 'auto'
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
