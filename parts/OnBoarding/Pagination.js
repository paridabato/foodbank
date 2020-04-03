import React, {Component} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const DATA = [
    [
      'id' ,'1'
    ],
    [
      'id', '2'
    ],
    [
      'id', '3'
    ],
  ];

function Item(id) {
    return (
      <View style={styles.page}></View>
    );
  }

export default class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: props.page
        }
    }

    render() {
        return (
            <View style={styles.pagination}>
               {DATA.map((prop, key) => {
                    if(key == this.state.page) {
                        return (<View style={[styles.page, styles.currentPage]}  key={key}></View>)
                    } else {
                        return (<View style={styles.page}  key={key}></View>)
                    }
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pagination:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    page: {
        width: wp('2.1%'),
        height: wp('2.1%'),
        backgroundColor: '#FFFFFF',
        opacity: 0.3,
        borderRadius: 999,
        marginRight: wp('2.1%')
    },

    currentPage: {
        width: wp('4.3%'),
        opacity: 1
    }
})