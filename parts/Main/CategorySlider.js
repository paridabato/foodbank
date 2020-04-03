import React, { Component } from 'react';
import { Text, View, Image, ScrollView, StyleSheet } from 'react-native';
import Fonts from '../../assets/styles/Fonts';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import StoreCard from '../../parts/StoreCard';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category_name: props.category_name
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
                    <ScrollView 
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        decelerationRate={0}
                        snapToAlignment={"center"}>
                            <StoreCard
                            navigation={this.props.navigation}
                            counter={'8 invendus'}
                            rating={'4,5 (50+)'}
                            distance={'1,2km'}
                            name={'Yapan Sushi - Nuée bleue'}
                            category={'Sushis - soupes - salades'}
                            logo={require('../../assets/img/burgers.png')}
                            status={'Ferme dans 1h'}
                            discount={'Plus que 1h pour profiter des -20%'}
                            img={require('../../assets/img/store_image.png')} />

                            <StoreCard
                            navigation={this.props.navigation}
                            counter={'8 invendus'}
                            rating={'4,5 (50+)'}
                            distance={'1,2km'}
                            name={'Yapan Sushi - Nuée bleue'}
                            category={'Sushis - soupes - salades'}
                            logo={require('../../assets/img/burgers.png')}
                            status={'Ferme dans 1h'}
                            discount={'Plus que 1h pour profiter des -20%'}
                            img={require('../../assets/img/store_image.png')} />

                            <StoreCard
                            navigation={this.props.navigation}
                            counter={'8 invendus'}
                            rating={'4,5 (50+)'}
                            distance={'1,2km'}
                            name={'Yapan Sushi - Nuée bleue'}
                            category={'Sushis - soupes - salades'}
                            logo={require('../../assets/img/burgers.png')}
                            status={'Ferme dans 1h'}
                            discount={'Plus que 1h pour profiter des -20%'}
                            img={require('../../assets/img/store_image.png')} />

                            <StoreCard
                            navigation={this.props.navigation}
                            counter={'8 invendus'}
                            rating={'4,5 (50+)'}
                            distance={'1,2km'}
                            name={'Yapan Sushi - Nuée bleue'}
                            category={'Sushis - soupes - salades'}
                            logo={require('../../assets/img/burgers.png')}
                            status={'Ferme dans 1h'}
                            discount={'Plus que 1h pour profiter des -20%'}
                            img={require('../../assets/img/store_image.png')} />
                        </ScrollView>
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
        fontSize: hp(1.97),
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