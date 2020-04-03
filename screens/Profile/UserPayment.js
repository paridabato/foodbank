import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar, StyleSheet, Modal, Platform } from 'react-native';
import { Icon, Input } from 'react-native-elements';
import Button from 'react-native-button';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../../assets/styles/Fonts';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';

const SLIDER_1_FIRST_ITEM = 0;
const IS_ANDROID = Platform.OS === 'android';

export default class UserPayment extends Component {
    constructor(props) {
        super(props);
        this.state={
            entries: [
                {
                    id: 0,
                    name: 'Nolann Charles',
                    type: 'visa',
                    number: '4974***57',
                    default: true
                },
                {
                    id: 1,
                    name: 'Tim Cook',
                    type: 'visa',
                    number: '4974***83',
                    default: false
                },
                {
                    id: 2,
                    name: 'Andrii Voloshchenko',
                    type: 'visa',
                    number: '4974***45',
                    default: false
                }
            ],
            activeSlide: SLIDER_1_FIRST_ITEM,
            modalVisible: false
        }
    }

    _renderItem (item, index) {
        return (
            <View style={styles.itemBox} key={index}>
                <LinearGradient colors={['#fae6aa', '#f3c871']} style={styles.item}>
                    <Text style={styles.name}>{item.item.name}</Text>
                    <Image
                        source={require('../../assets/img/visa_logo.png')}
                        containerStyle={styles.imageContainer}
                        style={styles.image}
                    />
                </LinearGradient>
                {item.item.default ?
                <Image
                    style={IS_ANDROID ? styles.checkAndroid : styles.check}
                    source={require('../../assets/img/icons/status_ok.png')}
                /> :
                null
                }
            </View>
        );
    }

    get pagination () {
        const { entries, activeSlide } = this.state;
        return (
            <Pagination
              dotsLength={entries.length}
              activeDotIndex={activeSlide}
              dotStyle={{
                width: 16,
                height: 8,
                borderRadius: 4,
                marginHorizontal: 4,
                backgroundColor: '#00ccbd'
              }}
              inactiveDotStyle={{
                width: 8,
                borderRadius: 9,
                backgroundColor: '#a1a7b4'
              }}
              inactiveDotOpacity={0.3}
              inactiveDotScale={1}
            />
        );
    }

    render(){
        return(
            <View style={styles.container}>
                <StatusBar translucent backgroundColor="#fff" barStyle = 'dark-content'/>
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
                        <Text style={styles.headerText}>Moyens de paiement</Text>
                    </View>
                    <View style={styles.content}>
                        <Carousel
                            containerCustomStyle={{overflow: 'visible', flexGrow: 0}}
                            contentContainerCustomStyle={{overflow: 'visible'}}
                            slideStyle={{overflow: 'visible'}}
                            sliderWidth={wp(100)}
                            itemWidth={wp(75.73)}
                            inactiveSlideOpacity={0.2}
                            inactiveSlideScale={0.8}
                            data={this.state.entries}
                            renderItem={this._renderItem}
                            firstItem={SLIDER_1_FIRST_ITEM}
                            onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                        />
                        { this.pagination }
                        <View style={styles.cardNum}>
                            <Text style={styles.cardNumText}>Carte Visa Premier {this.state.entries[this.state.activeSlide].number}</Text>
                        </View>
                        <View style={styles.select}>
                            <TouchableOpacity
                                style={styles.selectBox}
                            >
                                <Text style={styles.selectText}>Carte sélectionnée</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonBox}>
                            <Button
                                containerStyle={styles.button}
                                onPress={() => this.setState({
                                    modalVisible: true
                                })}
                            >
                                <Text style={styles.buttonText}>Ajouter un nouveau moyen de paiement</Text>
                            </Button>
                        </View>
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                          Alert.alert("Modal has been closed.");
                        }}
                    >
                        <View style={styles.modal}>
                            <View style={styles.modalContent}>
                                <View style={styles.modalHead}>
                                    <Text style={styles.modalHeadText}>Ajouter un moyen de paie...</Text>
                                    <Icon
                                        onPress={() => {
                                        this.setState({
                                            modalVisible: false
                                        })}}
                                        name='close'
                                        size={hp(2.95)}
                                        type='material-community'
                                        color='#142444'
                                        containerStyle={styles.closeCont}
                                    />
                                </View>
                                <View style={styles.modalInner}>
                                    <Input
                                        label = 'Numero de carte'
                                        labelStyle={styles.label}
                                        autoCompleteType='cc-number'
                                        inputContainerStyle = {styles.inputCont}
                                        placeholder = 'XXXX XXXX XXXX XXXX'
                                        keyboardType='number-pad'
                                        placeholderTextColor='#a1a7b4'
                                    />
                                    <View style={styles.inputsBox}>
                                        <View style={styles.halfInput}>
                                            <Input
                                                label = 'Expiration'
                                                labelStyle={styles.label}
                                                autoCompleteType='cc-exp'
                                                inputContainerStyle = {styles.inputCont}
                                                placeholder = 'MM/AA'
                                                keyboardType='number-pad'
                                                placeholderTextColor='#a1a7b4'
                                            />
                                        </View>
                                        <View style={styles.halfInput}>
                                            <Input
                                                label = 'CVV'
                                                labelStyle={styles.label}
                                                autoCompleteType='cc-csc'
                                                inputContainerStyle = {styles.inputCont}
                                                placeholder = 'XXX'
                                                keyboardType='number-pad'
                                                placeholderTextColor='#a1a7b4'
                                                secureTextEntry={true}
                                            />
                                        </View>
                                    </View>
                                    <TouchableOpacity
                                        style={styles.scan}
                                    >
                                        <Image
                                            style={styles.scanIcon}
                                            source={require('../../assets/img/icons/camera_icon.png')}
                                        />
                                        <Text style={styles.scanText}>Scanner ma carte</Text>
                                    </TouchableOpacity>
                                    <View style={styles.modalButtonCont}>
                                        <Button
                                            containerStyle={styles.modalButton}
                                            onPress={() => this.setState({
                                                modalVisible: true
                                            })}
                                        >
                                            <Text style={styles.modalButtonText}>Enregistrer cette carte</Text>
                                        </Button>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: hp('6.4%'),
        flex: 1,
        backgroundColor: 'white',
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
        paddingTop: hp(3.94),
        paddingBottom: hp(7.38),
        flex: 1,
    },

    itemBox: {
        position: 'relative',
        height: 192,
        overflow: 'hidden',
        zIndex: 1,
        overflow: 'visible'
    },

    item: {
        flex: 1,
        borderRadius: 10
    },

    name: {
        position: 'absolute',
        left: 28,
        bottom: 28,
        fontFamily: Fonts.Bold,
        fontSize: 14,
        color: "#142444"
    },

    image: {
        position: 'absolute',
        height: 21,
        width: 60,
        right: 17,
        bottom:17,
        resizeMode: 'contain'
    },

    check: {
        position: 'absolute',
        width: 26,
        height: 26,
        top: -10,
        right: -10,
        zIndex: 2
    },

    checkAndroid: {
        position: 'absolute',
        width: 26,
        height: 26,
        top: 0,
        right: 0,
        zIndex: 2
    },

    cardNum: {
        marginBottom: hp(1.1)
    },
    
    cardNumText: {
        fontFamily: Fonts.Bold,
        fontSize: hp(2.21),
        textAlign: "center",
        color: "#142444"
    },

    select: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    selectBox: {
        width: '50%'
    },

    selectText: {
        fontFamily: Fonts.Regular,
        fontSize: hp(1.97),
        lineHeight: hp(2.95),
        color: "#5a657c",
        textAlign: 'center'
    },

    buttonBox: {
        paddingHorizontal: 17, 
        marginBottom: 0,
        marginTop: 'auto'
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#00ccbd",
        height: hp(6.89),
        width: '100%'
    },

    buttonText: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.97),
        color: "#00ccbd"
    },

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
        height: hp(80),
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
        paddingTop: hp(5.04),
        paddingHorizontal: 17,
        paddingBottom: hp(7.38)
    },

    label: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.97),
        lineHeight: hp(2.95),
        color: "#142444"
    },

    inputCont: {
        borderBottomColor: '#eee',
        marginBottom: hp(3.69)
    },

    inputsBox: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },

    halfInput: {
        width: '48.97%',
    },

    scan: {
        marginTop: hp(2.21),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '70%',
        marginRight: 'auto',
        marginLeft: 'auto'
    },

    scanIcon: {
        height: hp(1.35),
        resizeMode: 'contain',
        marginRight: 10
    },

    scanText: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.97),
        lineHeight: hp(1.97),
        color: "#00ccbd"
    },

    modalButtonCont: {
        marginBottom: 0,
        marginTop: 'auto'
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
})