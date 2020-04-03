import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, KeyboardAvoidingView, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SearchBar } from 'react-native-elements';
import Fonts from '../../assets/styles/Fonts';

export default class Location extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            search: ''
        }
    }

    updateSearch = search => {
        this.setState({ search });
    };

    SearchIcon (){
        return(
            <Image
                source={require('../../assets/img/icons/search_grey.png')}
            />
        )
    }

    render(){
        const { search } = this.state;
        return (
            <KeyboardAvoidingView style={{flex: 1}}>
                <View style={styles.container}>
                    <SafeAreaView style={styles.wrapper}>

                        <View style={styles.header}>
                            <TouchableOpacity 
                                style={styles.back}
                                onPress={()=>this.props.navigation.goBack()}
                            >
                                <Image
                                    style={styles.backImg}
                                    source={require('../../assets/img/back_arrow_grey.png')}
                                />
                            </TouchableOpacity>
                            <Text style={styles.headerText}>Où es-tu ?</Text>
                        </View>

                        <SearchBar
                            containerStyle = {styles.searchCont}
                            inputContainerStyle = {styles.searcInputCont}
                            inputStyle = {styles.searchInput}
                            searchIcon={this.SearchIcon}
                            placeholder="Chercher une ville..."
                            onChangeText={this.updateSearch}
                            value={search}
                        />

                        <View style={styles.content}>
                            <View style={styles.logoCont}>
                                <Image 
                                    style={styles.logoImg}
                                    source={require('../../assets/img/location_logo.png')}
                                />
                            </View>

                            <TouchableOpacity style={styles.position}>
                                <Image
                                    style={styles.positionImg}
                                    source={require('../../assets/img/icons/location_icon.png')}
                                />
                                <Text style={styles.positionText}>Utiliser ma position actuelle</Text>
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: hp('6.4%'),
        paddingBottom: hp('10.8%'),
        backgroundColor: 'white',
        flex: 1,
    },

    wrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
    },

    header: {
        position: 'relative',
        width: '100%',
        marginBottom: hp('5.3%')
    },

    back: {
        position: 'absolute',
        left: wp('3.6%'),
        top: -wp('2.6%'),
        padding: wp('3.6%'),
        zIndex: 2
    },

    backImg: {
        maxWidth: wp('2.1%'),
        resizeMode: 'contain'
    },

    headerText: {
        fontFamily: Fonts.Bold,
        fontSize: 18,
        lineHeight: 18,
        color: '#142444',
        textAlign: 'center'
    },

    searchCont: {
        width: wp('91.5%'),
        height: hp('5.9%'),
        backgroundColor: 'transparent',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        padding: 0
    },

    searcInputCont: {
        backgroundColor: '#e8e8e9',
        borderRadius: 5
    },

    searchInput: {
        fontFamily: Fonts.Bold,
        fontSize: 16
    },

    content: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        width: '91.5%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logoCont: {
        height: hp('18.7%'),
        width: wp('51.7%'),
    },

    logoImg: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },

    position: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0
    },

    positionImg: {
        width: wp('4.8%'),
        marginRight: wp('2.1%'),
        resizeMode: 'contain'
    },

    positionText: {
        fontFamily: Fonts.Bold,
        color: '#142444',
        fontSize: 16
    }
})