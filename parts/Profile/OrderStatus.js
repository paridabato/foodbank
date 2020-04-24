import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../../assets/styles/Fonts';

function StatusWorker(item) {
    switch (Object.keys(item)[0]) {
        case 'ready':
            return (
                <Text style={styles.itemText}>Commande prête</Text>
            )
            break;
        case "waiting":
            return (
            <View style={styles.itemContent}>
                <Text style={[styles.itemContentText, styles.itemText]}>À retirer chez votre commerçant</Text>
                <Text style={styles.itemContentTextBold}>avant 19h</Text>
            </View>
            )
            break;
        case 'finished':
            return (
                <Text style={styles.itemText}>Commande retirée</Text>
            )
            break;
        default:
            console.log(Object.keys(item))
    }
}

function StatusItem(item, key) {
    return(
        <View style={styles.item} key={key}>
            {Object.values(item)[0]  == 'done' ?
                    <View style={styles.itemIconBox}>
                        <Image
                            style={styles.itemIcon}
                            source={require('../../assets/img/icons/status_ok.png')}
                        />
                    </View>
                    :
                    Object.values(item)[0]  == 'disabled' ? 
                        <View style={styles.itemIconBoxDisabled}>
                            <View style={styles.itemIconDisabled}>
                            </View>
                        </View>
                        :
                        <View style={styles.itemIconBoxDisabled}>
                            <View style={[styles.itemIconDisabled, {backgroundColor: '#00ccbd'}]}>
                            </View>
                        </View>
            }
            {StatusWorker(item)}
        </View>
    )
}

export default class OrderStatus extends Component {
    constructor(props){
        super(props);
        this.state = {
            order: props.order
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.head}>
                    <Text style={styles.title}>Statut de la commande</Text>
                    <TouchableOpacity
                        onPress={()=>this.props.navigation.navigate('Support')}
                    >
                        <Text style={styles.support}>Support</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <View style={styles.line}></View>
                    {this.state.order.statuses.map((item, key) => (
                        StatusItem(item,key)
                    ))}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   container: {
       paddingHorizontal: 17,
       paddingTop: hp(3.69),
       paddingBottom: hp(3.94),
       borderBottomColor: '#eee',
       borderBottomWidth: 1
   },

   head: {
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
       marginBottom: hp(2.95)
   },

   title: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.97),
        lineHeight: hp(2.95),
        color: "#142444"
   },

   support: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.72),
        color: "#00ccbd"
   },

   content: {
       position: 'relative'
   },

   item: {
       flexDirection: 'row',
       alignItems: 'center',
       height: wp(12.8)
   },

   itemIconBox: {
       width: hp(3.44),
       height: hp(3.44),
       justifyContent: 'center',
       alignItems: 'center',
       marginRight: 32,
       borderRadius: 999,
       borderWidth: 2, 
       borderColor: 'white',
       overflow: 'hidden'
   },

   itemIconBoxDisabled: {
       width: hp(3.44),
       height: hp(3.44),
       justifyContent: 'center',
       alignItems: 'center',
       overflow: 'hidden',
       backgroundColor: 'white',
       marginRight: 32,
   },

   itemIcon: {
        width: hp(3.2),
        height: hp(3.2),
        resizeMode: 'contain'
   },

   itemIconDisabled: {
    width: 28,
    height: 28,
    borderWidth: 10, 
    borderColor: '#fff',
    borderRadius: 999,
    overflow: 'hidden',
    backgroundColor: 'rgba(227, 229, 233, 1)'
   },

   line: {
        position: 'absolute',
        left: hp(1.55),
        top: hp(1.4),
        width: 1,
        height: '80%',
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#eeeeee"
   },

   itemContent: {
        flexDirection: 'column',
        justifyContent: 'space-between'
   },

   itemText: {
        fontFamily: Fonts.Regular,
       fontSize: wp(4.26),
        lineHeight: hp(2.95),
        color: "#5a657c"
   },

   itemContentTextBold: {
       fontFamily: Fonts.Bold,
       fontSize: wp(4.26),
       color: '#142444'
   }
})