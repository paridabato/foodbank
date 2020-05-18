import React, { Component } from 'react';
import { View, FlatList, Text, TouchableOpacity, Image, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../assets/styles/Fonts';
import StoreCard from '../parts/StoreCard';

import { SHOPS } from '../data/dummy-data.js';

export default class Category extends Component {
    constructor(props){
        super(props);
        this.state={
            categoryName: props.route.params.category_name,
            stores: [
                {
                    counter: '8 invendus',
                    rating: '4,5 (50+)',
                    distance: '1,2km',
                    name: 'Yapan Sushi - Nuée bleue',
                    category: 'Sushis - soupes - salades',
                    logo: require('../assets/img/burgers.png'),
                    status: 'Ferme dans 1h',
                    discount: 'Plus que 1h pour profiter des -20%',
                    img: require('../assets/img/store_image.png'),
                    fw: 'true'
                },
                {
                    counter: '8 invendus',
                    rating: '4,5 (50+)',
                    distance: '1,2km',
                    name: 'Yapan Sushi - Nuée bleue',
                    category: 'Sushis - soupes - salades',
                    logo: require('../assets/img/burgers.png'),
                    status: 'Ferme dans 1h',
                    discount: 'Plus que 1h pour profiter des -20%',
                    img: require('../assets/img/store_image.png'),
                    fw: 'true'
                },
                {
                    counter: '8 invendus',
                    rating: '4,5 (50+)',
                    distance: '1,2km',
                    name: 'Yapan Sushi - Nuée bleue',
                    category: 'Sushis - soupes - salades',
                    logo: require('../assets/img/burgers.png'),
                    status: 'Ferme dans 1h',
                    discount: 'Plus que 1h pour profiter des -20%',
                    img: require('../assets/img/store_image.png'),
                    fw: 'true'
                },
                {
                    counter: '8 invendus',
                    rating: '4,5 (50+)',
                    distance: '1,2km',
                    name: 'Yapan Sushi - Nuée bleue',
                    category: 'Sushis - soupes - salades',
                    logo: require('../assets/img/burgers.png'),
                    status: 'Ferme dans 1h',
                    discount: 'Plus que 1h pour profiter des -20%',
                    img: require('../assets/img/store_image.png'),
                    fw: 'true'
                },
            ]
        }
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
                                source={require('../assets/img/back_arrow.png')}
                            />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>{this.state.categoryName}</Text>
                </View>
                    <FlatList 
                            style={styles.content}
                            data={SHOPS}
                            keyExtractor={(item,index) => index.toString()}
                            renderItem={({ item: row, index }) =>
                                <StoreCard
                                    navigation={this.props.navigation}
                                    store={row}
                                    fw={true}
                                />
                            }
                    />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    header: {
        paddingTop: hp('6.4%'),
        position: 'relative',
        width: '100%',
        paddingBottom: hp(1.35),
        backgroundColor: '#fff',
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 20,
        shadowOpacity: 1,
        zIndex: 1,
        elevation: 8,
        marginBottom: hp(3.94),
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
        width: '100%',
        height: hp(100),
        paddingHorizontal: 17,
        backgroundColor: '#fff',
    }
})