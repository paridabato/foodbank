import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../../assets/styles/Fonts';

export default class ProfileMenu extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.top}>
                    <TouchableOpacity
                        onPress={()=>this.props.navigation.navigate('ProfileOrders')}
                    >
                        <View style={styles.item}>
                            <View style={styles.left}>
                                <View style={styles.imageBox}>
                                    <Image
                                        style={styles.image}
                                        source={require('../../assets/img/icons/orders_icon.png')}
                                    />
                                </View>
                                <Text style={styles.text}>Mes commandes</Text>
                            </View>
                            <View style={styles.iconBox}>
                                    <Image
                                        style={styles.arrow_next}
                                        source={require('../../assets/img/back_arrow_grey.png')}
                                    />
                                </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>this.props.navigation.navigate('UserInfo', {user: this.props.user})}
                    >
                        <View style={styles.item}>
                            <View style={styles.left}>
                                <View style={styles.imageBox}>
                                    <Image
                                        style={styles.image}
                                        source={require('../../assets/img/icons/user_info_icon.png')}
                                    />
                                </View>
                                <Text style={styles.text}>Mes informations</Text>
                            </View>
                            <View style={styles.iconBox}>
                                   <Image
                                        style={styles.arrow_next}
                                        source={require('../../assets/img/back_arrow_grey.png')}
                                    />
                                </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>this.props.navigation.navigate('UserPayment', {user: this.props.user})}
                    >
                        <View style={styles.item}>
                            <View style={styles.left}>
                                <View style={styles.imageBox}>
                                    <Image
                                        style={styles.image}
                                        source={require('../../assets/img/icons/card_icon.png')}
                                    />
                                </View>
                                <Text style={styles.text}>Moyens de paiement</Text>
                            </View>
                            <View style={styles.iconBox}>
                                   <Image
                                        style={styles.arrow_next}
                                        source={require('../../assets/img/back_arrow_grey.png')}
                                    />
                                </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>this.props.navigation.navigate('Notifications')}
                    >
                        <View style={styles.item}>
                            <View style={styles.left}>
                                <View style={styles.imageBox}>
                                    <Image
                                        style={styles.image}
                                        source={require('../../assets/img/icons/notifications_icon.png')}
                                    />
                                </View>
                                <Text style={styles.text}>Notifications</Text>
                            </View>
                            <View style={styles.iconBox}>
                                   <Image
                                        style={styles.arrow_next}
                                        source={require('../../assets/img/back_arrow_grey.png')}
                                    />
                                </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.bot}>
                    <TouchableOpacity
                        onPress={()=>this.props.navigation.navigate('Support')}
                    >
                            <View style={styles.item}>
                                <View style={styles.left}>
                                    <View style={styles.imageBox}>
                                        <Image
                                            style={styles.image}
                                            source={require('../../assets/img/icons/support_icon.png')}
                                        />
                                    </View>
                                    <Text style={styles.text}>Support</Text>
                                </View>
                                <View style={styles.iconBox}>
                                    <Image
                                        style={styles.arrow_next}
                                        source={require('../../assets/img/back_arrow_grey.png')}
                                    />
                                    </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={styles.item}>
                            <View style={styles.left}>
                                <View style={styles.imageBox}>
                                    <Image
                                        style={styles.image}
                                        source={require('../../assets/img/icons/logout_icon.png')}
                                    />
                                </View>
                                <Text style={styles.text}>Deconnexion</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 17,
        paddingVertical: hp(1.97),
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },

    left: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    imageBox: {
        width: 20,
        height: 17,
        marginRight: 18
    },

    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    },

    text: {
        fontFamily: Fonts.Regular,
        fontSize: hp(1.97),
        lineHeight: hp(1.97),
        color: "#142444"
    },

    iconBox: {
        width: 20,
        height: 22,
        justifyContent: 'center',
        alignItems: 'center'
    },

    top: {
        marginBottom: hp(2.95)
    },

    arrow_next: {
        transform: [{
            rotate: '180deg'
        }]
    }
})