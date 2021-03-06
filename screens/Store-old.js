import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Button from 'react-native-button';
import Fonts from '../assets/styles/Fonts';
import StoreHeader from '../parts/Store/StoreHeader';
import StoreStickyHeader from '../parts/Store/StoreStickyHeader';
import ProductCategory from '../parts/Store/ProductCategory';
import AddToCartModal from '../parts/Tunel/AddToCartModal';
import CartModal from '../parts/Tunel/CartModal';

MAIN_MAX_HEIGHT = hp(62)
MAIN_MIN_HEIGHT = hp(17.8)
export default class Store extends Component {
    constructor(props){
        super(props);
        this.state={
            categories: [
                    {
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
                    {
                        title: 'Nos sandwiches',
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
                        }
                        ]
                    },
                    {
                        title: 'Nos salades',
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
                            name: 'Poulet Curry', 
                            qty: 3,
                            desc: 'Sandwich, mayonnaise, poulet, curry',
                            discount: false,
                            oldPrice: '640 XPF',
                            newPrice: '640 XPF'
                            }
                        ]
                    },
                    {
                        title: 'Nos sandwiches',
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
                        name: 'Poulet Curry', 
                        qty: 3,
                        desc: 'Sandwich, mayonnaise, poulet, curry',
                        discount: false,
                        oldPrice: '640 XPF',
                        newPrice: '640 XPF'
                        }
                        ]
                    },
            ],
            enabled: false,
            cart: false,
            cartModal: false,
            scrollY: new Animated.Value(0.01),
            currentCat: 0
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
                {/* <Text  style={styles.cartTopText}>Vous avez une commande ?? retirer avant 19h</Text>
                <Button
                    containerStyle={styles.button}
                    // onPress={this.showHideCartModal}
                >
                    <View style={styles.buttonInner}>
                        <View>
                            <Text style={styles.buttonText}>Voir ma commande ?? retirer</Text>
                        </View>
                    </View>
                </Button>  */}
            </View>
        )
    }

    goIndex = (item) => {
        this.flatList_Ref.getNode().scrollToIndex({ animated: true, index: item });
    };

    onViewableItemsChanged = ({ viewableItems, changed }) => {
        this.setState(prevState => ({
            currentCat: viewableItems.length > 0 ?
                viewableItems[0].index !== prevState.currentCat ?
                    viewableItems[0].index
                    :
                    prevState.currentCat
                :
                prevState.currentCat
        }))
    }
    render() {
        const headerHeight = this.state.scrollY.interpolate({
            inputRange:[0, 40],
            outputRange: [MAIN_MAX_HEIGHT, MAIN_MIN_HEIGHT],
            extrapolate: 'clamp'

        })
        const headerOpacity = this.state.scrollY.interpolate({
            inputRange: [0, 30],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        })

        const stickyOpacity = this.state.scrollY.interpolate({
            inputRange: [0, 10],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        })

        const padding = this.state.scrollY.interpolate({
            inputRange: [0, 40],
            outputRange: [MAIN_MAX_HEIGHT, MAIN_MIN_HEIGHT],
            extrapolate: 'clamp'
        })

        const zIndex = this.state.scrollY.interpolate({
            inputRange: [0.01, 20],
            outputRange: [0, 2],
            extrapolate: 'clamp'
        })
        return(
            <View style={styles.container}>
                    <StoreHeader 
                        navigation={this.props.navigation} 
                        adress={'12 rue des Hallebardes, Noum?????'} 
                        height={headerHeight}
                        opacity={headerOpacity} 
                    />
                    <StoreStickyHeader 
                        navigation={this.props.navigation}  
                        categories={this.state.categories}
                        opacity={stickyOpacity}
                        zIndex={zIndex}
                        onClick={this.goIndex}
                        currentCat={this.state.currentCat}
                    />
                    <View >
                    <Animated.FlatList
                        style={{paddingTop: padding}}
                        contentContainerStyle={{ paddingBottom: hp(40) }}
                        data={this.state.categories}
                        ref={ref => {this.flatList_Ref = ref; }}
                        onScroll={Animated.event(
                            [{nativeEvent: { contentOffset: { y: this.state.scrollY } } }]
                        )}
                        onViewableItemsChanged={this.onViewableItemsChanged}
                        viewabilityConfig={{itemVisiblePercentThreshold: 60}}
                        renderItem={({item,index}) =>
                            <ProductCategory handler={this.showModal} category={item} />
                        }
                        keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                    <View style={[styles.warning,  {paddingBottom: this.state.cart ? hp(28) : hp(14)}]}>
                        <Text style={styles.warningText}>Si vous souffrez d???allergies alimentaires ou si vous suivez un r??gime sp??cifique adressez vous directement au commer??ant</Text>
                        <View style={styles.linkBox}>
                            <TouchableOpacity>
                                <Text style={styles.link}>Contacter le commer??ant</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                {this.state.cart ? this.cart() : null}
                <AddToCartModal enabled={this.state.enabled} cart={this.showCart} handler={this.hideModal}/>
                <CartModal navigation={this.props.navigation} buy={this.buyButton} enabled={this.state.cartModal} handler={this.showHideCartModal}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#eee',
        position: 'relative'
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
        backgroundColor: "#00ccbd"
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