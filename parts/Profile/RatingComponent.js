import React, { Component } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class RatingComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            index: 0,
        }
    }

    ratingSet(i){
        this.setState({
            index: i
        })
    }

    stars(count){
        var stars = [];
        for(let i = 1; i <= count;  i++ ) {
                stars.push(
                <TouchableOpacity
                    activeOpacity={1}
                    style={[styles.star, {backgroundColor: i<=this.state.index ?  '#00ccbd': 'transparent'}]}
                    key={i}
                    onPress={()=> this.ratingSet(i)}
                >
                    <Image
                        style={styles.image}
                        source={require('../../assets/img/icons/star_big.png')}
                    />
                </TouchableOpacity>
            )
        }
        return stars;
    }

    render(){
        return(
            <View style={styles.row}>
                {this.stars(this.props.count)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },

    star: {
        height: hp(4.92),
        width: hp(4.92),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: wp(7.73),
        backgroundColor: 'white'
    },

    active: {
        backgroundColor: '#00ccbd'
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    }
})