import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../../assets/styles/Fonts';

const colors = {
    burgers: '#00ccbd',
    salades: '#b4d012',
    sushis: '#E54C88',
    pates: '#F59A00',
    desserts: '#FFD70D',
    asiatique: '#B4D012',
    desserts2: '#E54C88',
    bagels: '#FFD70D'
}

const images = {
    burgers: require('../../assets/img/categories/burgers.png'),
    salades: require('../../assets/img/categories/salades.png'),
    sushis: require('../../assets/img/categories/sushis.png'),
    pates: require('../../assets/img/categories/pates.png'),
    desserts: require('../../assets/img/categories/desserts.png'),
    asiatique: require('../../assets/img/categories/salades.png'),
    desserts2: require('../../assets/img/categories/sushis.png'),
    bagels: require('../../assets/img/categories/desserts.png')
}

export default class SearchMenuCats extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cats: [
            {
                slug: 'burgers',
                name: 'Burgers'
            },
            {
                slug: 'salades',
                name: 'Salades'
            },
            {
                slug: 'sushis',
                name: 'Sushis'
            },
            {
                slug: 'pates',
                name: 'Pâtes'
            },
            {
                slug: 'desserts',
                name: 'Desserts'
            },
            {
                slug: 'asiatique',
                name: 'Asiatique'
            },
            {
                slug: 'desserts2',
                name: 'Desserts'
            },
            {
                slug: 'bagels',
                name: 'Bagels'
            },

        ]
    };
  }

  

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Meilleures catégories</Text>
        <View style={styles.menu}>
            {this.state.cats.map( (item, index) => {
                return (
                    <TouchableOpacity 
                        key={index} 
                        style={[styles.item, {backgroundColor: colors[item.slug]}]}
                        onPress={()=>this.props.navigation.navigate('SearchStoreList')}
                    >
                        <Text style={styles.itemText}>{item.name}</Text>
                        <Image
                            style={styles.itemImage}
                            source={images[item.slug]}
                        />
                    </TouchableOpacity>
                )
            })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 17,
        backgroundColor: 'white'
    },

    title: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.48),
        color: "#aaaaaa",
        marginBottom: hp(1.6)
    },

    menu: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        flex: 1
    },

    item: {
        position: 'relative',
        width: wp(44.53),
        height: hp(15.76),
        marginBottom: wp(2.13),
        borderRadius: 5,
        justifyContent: 'center'
    },

    itemText: {
        fontFamily: Fonts.Bold,
        fontSize: hp(2.21),
        color: "#ffffff",
        marginLeft: wp(4)
    },

    itemImage: {
        position: 'absolute',
        right: 0,
        top: 0,
        height: '100%',
    }
})
