import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../../assets/styles/Fonts';
import * as SearchNav from '../../RootNavigation.js';

export default class SearchHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loading: false,
        data: [],
        error: null,
        inputActive: false,
    };
    this.arrayholder = [];
  }

    componentDidMount() {
        this.makeRemoteRequest()
    }

    makeRemoteRequest = () => {
    const url = `https://randomuser.me/api/?&results=20`;
    this.setState({ loading: true });
    fetch(url)
        .then(res => res.json())
        .then(res => {
        this.setState({
            data: res.results,
            error: res.error || null,
            loading: false,
        });
        this.arrayholder = res.results;
    })
    .catch(error => {
        this.setState({ error, loading: false });
    });
    }

  searchFilterFunction = text => {
    const newData = this.arrayholder.filter(item => {
        const itemData = `${item.name.title.toUpperCase()} 
        ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
    });
    this.setState({ data: newData });
  }

toggleInput() {
    this.props.inputActive();      
    SearchNav.navigate('SearchResult', {data: this.state.data});
    this.setState({
        inputActive :  true
    });
  }

  blurInput() {
        if(!this.props.active) {
            this.setState({
                inputActive: false
            })
        }
  }

  render() {
    return (
        <View>
            <TouchableWithoutFeedback
                onPress={()=>this.props.touchHandler()}
            >
                <View style={styles.tag}></View>
            </TouchableWithoutFeedback>
            <Text style={styles.title}>Rechercher</Text>
            <View style={styles.search}>
                <View style={styles.inputWrapper}>
                    <Input
                        onChangeText={text => this.searchFilterFunction(text)}
                        containerStyle={{paddingHorizontal: 0}}
                        labelStyle={styles.label}
                        autoCompleteType='email'
                        keyboardType='default'
                        inputStyle= {styles.input}
                        inputContainerStyle = {styles.inputCont}
                        placeholder = 'Commerçant ou lieu…'
                        placeholderTextColor='#5a657c'
                        leftIcon={
                            <Icon
                                size={24}
                                name='ios-search'
                                type='ionicon'
                                color='#517fa4'
                            />
                        }
                        leftIconContainerStyle={styles.inputIconCont}
                        onFocus={()=>this.toggleInput()}
                        onBlur={()=>this.blurInput()}
                    />
                </View>
                <TouchableOpacity
                    style={styles.filterButton}
                    onPress={()=>this.props.showModal()}
                >
                    <Image
                        style={styles.filterIcon}
                        source={require('../../assets/img/icons/filter_icon.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    tag: {
        width: wp(10.66),
        height: 6,
        borderRadius: 6,
        backgroundColor: '#eee',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: hp(1.97)
    },

    title: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.97),
        lineHeight: hp(2.95),
        color: "#142444",
        paddingHorizontal: 17,
        marginBottom: hp(1.23)
    },

    search: {
        flexDirection: 'row',
        paddingHorizontal: 17,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: hp(3.44)
    },

    inputWrapper: {
        width: wp(75.73),
        paddingHorizontal: 0
    },

    inputCont: {
        borderBottomWidth: 0,
        height: hp(5.91),
        width: '100%',
        borderRadius: hp(0.61),
        backgroundColor: "#eee",
        paddingHorizontal: 0
    },

    input: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.97),
        color: "#a1a7b4",
    },

    inputIconCont: {
        paddingHorizontal: 16,
        marginLeft: 0
    },

    filterButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(5.91),
        width: hp(5.91)
    },

    filterIcon: {
        width: hp(2.94),
        height: hp(2.46),
        resizeMode: 'contain'
    }
})
