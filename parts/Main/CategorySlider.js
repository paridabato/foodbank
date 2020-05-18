import React, { Component } from 'react';
import { Text, View, Image, FlatList, StyleSheet,TouchableOpacity } from 'react-native';
import Fonts from '../../assets/styles/Fonts';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import StoreCard from '../../parts/StoreCard';
import { SHOPS } from '../../data/dummy-data';

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category_name: props.category_name,
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>{this.state.category_name}</Text>
                    <TouchableOpacity
                        onPress={()=>this.props.navigation.navigate('Category', {category_name: this.state.category_name})}
                    >
                        <View style={styles.arrowBox}>
                            <Image
                                style={styles.arrow}
                                source={require('../../assets/img/scroll_arrow.png')}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.wrapper}>
                    <FlatList 
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={SHOPS}
                        keyExtractor={(item,index) => index.toString()}
                        renderItem={({ item: row, index }) =>
                            <StoreCard
                                navigation={this.props.navigation}
                                store={row}
                            />
                        }
                    />
                    </View>
                </View>
            )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: hp(3.69),
        marginBottom: hp(2.46)
    },

    header: {
        flexDirection: 'row',
        marginBottom: hp(2.21),
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp('4.3%')
    },

    wrapper: {
        paddingLeft: wp('4.3%')
    },

    title: {
        fontFamily: Fonts.Bold,
        fontSize: wp(4.26),
        lineHeight: hp(2.95),
        color: '#142444'
    },

    arrowBox: {
        width: 20,
        height: 12,
    },

    arrow: {
        flex: 1,
        resizeMode: 'contain'
    }
})