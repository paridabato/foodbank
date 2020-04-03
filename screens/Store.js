import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Button from 'react-native-button';
import Fonts from '../assets/styles/Fonts';
import StoreHeader from '../parts/Store/StoreHeader';
import StoreInfo from '../parts/Store/StoreInfo.js';
import ProductCategory from '../parts/Store/ProductCategory';
import AddToCartModal from '../parts/Tunel/AddToCartModal';
import CartModal from '../parts/Tunel/CartModal';

export default class Store extends Component {
    constructor(props){
        super(props);
        this.state={
            category: {
                title: 'Nos paniers',
                products: [
                    {
                        name: 'Le petit brie', 
                        qty: 4,
                        desc: 'Sandwich beurre, brie, salade',
                        discount: '-20%',
                        oldPrice: '900 XPF',
                        newPrice: '720 XPF'
                    }, 
                    {
                        name: 'Poulet Curry', 
                        qty: 3,
                        desc: 'Sandwich, mayonnaise, poulet, curry',
                        discount: false,
                        oldPrice: '640 XPF',
                        newPrice: '640 XPF'
                    }, 
                    {
                        name: 'Jambon emmental', 
                        qty: 0,
                        desc: 'Sandwich beurre, jambon blanc, emmental AOP',
                        discount: false,
                        oldPrice: '640 XPF',
                        newPrice: '640 XPF'
                    }
                ]
            },
            enabled: false,
            cart: false,
            cartModal: false
        }
        this.hideModal = this.hideModal.bind(this)
        this.showModal = this.showModal.bind(this)
        this.showCart = this.showCart.bind(this)
        this.showHideCartModal = this.showHideCartModal.bind(this)
        this.buyButton = this.buyButton.bind(this)
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

    showCart() {
        this.setState({
            enabled: false,
            cart: true
        })
    }

    showHideCartModal() {
        this.setState((prevState ) => ({
            cartModal: !prevState.cartModal
        }));
    }

    buyButton() {
        this.setState({
            cart: false,
            cartModal: false,
        })
    }

    cart() {
        return(
            <View style={styles.cart}>
                <Button
                    containerStyle={styles.button}
                    onPress={this.showHideCartModal}
                >
                    <View style={styles.buttonInner}>
                        <View style={styles.cartIconBox}>
                            <Image
                                style={styles.image}
                                source={require('../assets/img/icons/iconBagButton.png')}
                            />
                        </View>
                        <View>
                            <Text style={styles.buttonText}>Voir ma commande</Text>
                        </View>
                        <View style={styles.inCartBox}>
                            <Text style={styles.inCartText}>x1</Text>
                        </View>
                    </View>
                </Button>
                {/* <Text  style={styles.cartTopText}>Vous avez une commande à retirer avant 19h</Text>
                <Button
                    containerStyle={styles.button}
                    // onPress={this.showHideCartModal}
                >
                    <View style={styles.buttonInner}>
                        <View>
                            <Text style={styles.buttonText}>Voir ma commande à retirer</Text>
                        </View>
                    </View>
                </Button>  */}
            </View>
        )
    }

    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <StoreHeader navigation={this.props.navigation} />
                    <StoreInfo navigation={this.props.navigation} adress={'12 rue des Hallebardes, Noumé…'} />
                    <ProductCategory handler={this.showModal} catName={this.state.category.title} products={this.state.category.products} />
                    <View style={[styles.warning,  {paddingBottom: this.state.cart ? hp(17.24) : 0}]}>
                        <Text style={styles.warningText}>Si vous souffrez d’allergies alimentaires ou si vous suivez un régime spécifique adressez vous directement au commerçant</Text>
                        <View style={styles.linkBox}>
                            <TouchableOpacity>
                                <Text style={styles.link}>Contacter le commerçant</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <AddToCartModal enabled={this.state.enabled} cart={this.showCart} handler={this.hideModal}/>
                <CartModal navigation={this.props.navigation} buy={this.buyButton} enabled={this.state.cartModal} handler={this.showHideCartModal}/>
                {this.state.cart ? this.cart() : null}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee'
    },

    warning: {
        paddingHorizontal: 18,
        backgroundColor: 'transparent'
    },

    warningText: {
        textAlign: 'center',
        fontFamily: Fonts.Regular,
        color: "#5a657c",
        fontSize: hp(1.72),
        lineHeight: hp(2.95),
        marginBottom: hp(2.46)
    },

    linkBox: {
        paddingBottom: hp(9.35)
    },

    link: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.72),
        textAlign: "center",
        color: "#00ccbd"
    },
    
    cart: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: hp(17.24),
        backgroundColor: 'white',
        zIndex: 10,
        paddingHorizontal: 17,
        paddingTop: hp(2.95),
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
            width: 0,
            height: -5
        },
        shadowRadius: 20,
        shadowOpacity: 1,
        elevation: 5
    },

    button: {
        width: '100%',
        height: hp(6.89),
        borderRadius: hp(0.61),
        backgroundColor: "#00ccbd",
        
    },

    buttonInner: {
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },

    buttonText: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.97),
        color: "#ffffff",
        width: '100%',
    },

    cartIconBox: {
        width: hp(1.97),
        height: hp(2.46),
        marginRight: wp(4)
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },

    cartTopText: {
        fontFamily: Fonts.Regular,
        fontSize: hp(1.72),
        lineHeight: hp(2.95),
        color: "#5a657c",
        marginBottom: hp(1.1)
    },

    inCartBox: {
        width: hp(2.95),
        height: hp(2.95),
        borderRadius: hp(0.36),
        backgroundColor: "#00998e",
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: wp(3.73),
        left: 'auto'
    },

    inCartText: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.72),
        color: "#ffffff",
        lineHeight: hp(1.72)
    }
})