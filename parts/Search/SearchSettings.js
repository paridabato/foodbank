import React, { Component } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Slider, Button } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fonts from '../../assets/styles/Fonts';

export default class SearchSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
        distance: 0.5,
        price: 500,
        discount: {
            first: false,
            second: false,
            third: false
        },
        special: {
            veg: false,
            hal: false,
            glut: false
        }
    }
  }

reset () {
    this.setState({
        distance: 0.5,
        price: 500,
        discount: {
            first: false,
            second: false,
            third: false
        },
        special: {
            veg: false,
            hal: false,
            glut: false
        }
    })
}

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.enabled}
        onRequestClose={() => {
            Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.modal}>
            <View style={styles.modalContent}>
                <View style={styles.modalHead}>
                    <View style={styles.cellLeft}>
                        <TouchableOpacity
                            onPress={()=>this.reset()}
                        >
                            <Text style={styles.clear}>Effacer</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.cellCenter}>
                        <Text style={styles.modalHeadText}>Filtres</Text>
                    </View>
                    <View style={styles.cellRight}>
                        <Icon
                            onPress= {this.props.handler}
                            name='close'
                            size={hp(2.95)}
                            type='material-community'
                            color='#142444'
                            containerStyle={styles.closeCont}
                        />
                    </View>
                </View>
                <View style={styles.modalInner}>
                    <View style={styles.sliderCont}>
                        <View style={styles.sliderHead}>
                            <Text style={styles.sliderName}>Proximité</Text>
                            <Text style={styles.sliderValue}>0 - {this.state.distance}km</Text>
                        </View>
                        <View style={styles.sliderWrapper}>
                            <Slider
                                maximumTrackTintColor='#eee'
                                minimumTrackTintColor='#00ccbd'
                                thumbStyle={styles.thumbStyle}
                                thumbTintColor='#00ccbd'
                                maximumValue={10}
                                step={0.5}
                                value={this.state.distance}
                                onValueChange={(value) => this.setState({distance: value})}
                            />
                        </View>
                    </View>
                    <View style={[styles.sliderCont, {marginBottom: hp(6.89)}]}>
                        <View style={styles.sliderHead}>
                            <Text style={styles.sliderName}>Échelle de prix (XPF)</Text>
                            <Text style={styles.sliderValue}>0 - {this.state.price} XPF</Text>
                        </View>
                        <View style={styles.sliderWrapper}>
                            <Slider
                                maximumTrackTintColor='#eee'
                                minimumTrackTintColor='#00ccbd'
                                thumbStyle={styles.thumbStyle}
                                thumbTintColor='#00ccbd'
                                maximumValue={3000}
                                step={500}
                                value={this.state.price}
                                onValueChange={(value) => this.setState({price: value})}
                            />
                        </View>
                    </View>
                    <View style={styles.discountCont}>
                        <View style={styles.discountTitle}>
                            <Text style={styles.sliderName}>Niveau de remise minimum</Text>
                        </View>
                        <View style={styles.discountWrapper}>
                            <Button
                                titleStyle={this.state.discount.first ? styles.buttonTitleEnabled : styles.buttonTitleDisabled}
                                containerStyle={styles.button}
                                buttonStyle={this.state.discount.first ? styles.buttonEnabled : styles.buttonDisabled}
                                title="10%"
                                onPress={()=>this.setState({
                                    discount: {
                                        ...this.state.discount,
                                        first: true,
                                        second: false,
                                        third: false
                                    }})}
                            />
                            <Button
                                titleStyle={this.state.discount.second ? styles.buttonTitleEnabled : styles.buttonTitleDisabled}
                                containerStyle={styles.button}
                                buttonStyle={this.state.discount.second ? styles.buttonEnabled : styles.buttonDisabled}
                                title="20%"
                                onPress={()=>this.setState({
                                    discount: {
                                        ...this.state.discount,
                                        first: false,
                                        second: true,
                                        third: false
                                    }})}
                            />
                            <Button
                                titleStyle={this.state.discount.third ? styles.buttonTitleEnabled : styles.buttonTitleDisabled}
                                containerStyle={styles.button}
                                buttonStyle={this.state.discount.third ? styles.buttonEnabled : styles.buttonDisabled}
                                title="30%"
                                onPress={()=>this.setState({
                                    discount: {
                                        ...this.state.discount,
                                        first: false,
                                        second: false,
                                        third: true
                                    }})}
                            />
                        </View>
                    </View>
                    <View style={styles.specialCont}>
                        <View style={styles.discountTitle}>
                            <Text style={styles.sliderName}>Régime spécial</Text>
                        </View>
                        <View style={styles.discountWrapper}>
                            <Button
                                titleStyle={this.state.special.veg ? styles.buttonTitleEnabled : styles.buttonTitleDisabled}
                                containerStyle={styles.button}
                                buttonStyle={this.state.special.veg ? styles.buttonEnabled : styles.buttonDisabled}
                                title="Végétarien"
                                onPress={()=>this.setState({
                                    special: {
                                        ...this.state.special,
                                        veg: true,
                                        hal: false,
                                        gluten: false
                                    }})}
                            />
                            <Button
                                titleStyle={this.state.special.hal ? styles.buttonTitleEnabled : styles.buttonTitleDisabled}
                                containerStyle={styles.button}
                                buttonStyle={this.state.special.hal ? styles.buttonEnabled : styles.buttonDisabled}
                                title="Hallal"
                                onPress={()=>this.setState({
                                    special: {
                                        ...this.state.special,
                                        veg: false,
                                        hal: true,
                                        gluten: false
                                    }})}
                            />
                            <Button
                                titleStyle={this.state.special.gluten ? styles.buttonTitleEnabled : styles.buttonTitleDisabled}
                                containerStyle={styles.button}
                                buttonStyle={this.state.special.gluten ? styles.buttonEnabled : styles.buttonDisabled}
                                title="Sans gluten"
                                onPress={()=>this.setState({
                                    special: {
                                        ...this.state.special,
                                        veg: false,
                                        hal: false,
                                        gluten: true
                                    }})}
                            />
                        </View>
                    </View>
                    <View style={styles.saveCont}>
                    <Button
                        titleStyle={styles.saveTitle}
                        containerStyle={styles.saveButtonCont}
                        buttonStyle={styles.saveButton}
                        title="Appliquer les filtres"
                        onPress={this.props.handler}
                    />
                    </View>
                </View>
            </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row'
    },

    modalContent: {
        height: hp(93),
        width: '100%',
        paddingHorizontal: 17,
        backgroundColor: 'white',
        borderTopLeftRadius: hp(1.84),
        borderTopRightRadius: hp(1.84),
        alignSelf: 'flex-end',
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
            width: 0,
            height: -5
        },
        shadowRadius: 20,
        shadowOpacity: 1,
        elevation: 5
    },

    modalHead: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: hp(2.23),
        marginBottom: hp(5.54)
    },

    clear: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.72),
        color: "#00ccbd"
    },

    modalHeadText: {
        fontFamily: Fonts.Bold,
        fontSize: hp(2.21),
        lineHeight: hp(2.95),
        color: "#142444",
        textAlign: 'center'
    },

    closeCont: {
        height: hp(3.69),
        width: hp(3.69),
        backgroundColor: '#eee',
        borderRadius: 999,
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    modalInner: {
        flex: 1,
        paddingBottom: hp(7.38)
    },

    cellLeft: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-start'
    },

    cellCenter: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center'
    },

    cellRight: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: "flex-end"
    },

    sliderCont: {
        marginBottom: hp(4.92)
    },

    sliderHead: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: hp(2.21)
    },

    sliderName: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.97),
        lineHeight: hp(2.95),
        color: "#142444"
    },

    sliderValue: {
        fontFamily: Fonts.Regular,
        fontSize: hp(1.97),
        lineHeight: hp(2.95),
        color: "#5a657c"
    },

    thumbStyle: {
        height: hp(3.69), 
        width: hp(3.69), 
        borderRadius: 999,
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
            width: 0,
            height: -2
        },
        shadowRadius: 10,
        shadowOpacity: 1,
        elevation: 2
    },

    discountCont: {
        marginBottom: hp(4.18)
    },

    specialCont: {
        marginBottom: hp(9.85)
    },

    discountWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    discountTitle: {
        marginBottom: hp(2.21)
    },

    button: {
        width: '31.67%'
    },

    buttonDisabled: {
        borderRadius: 5,
        height: hp(5.91),
        backgroundColor: 'white',
        borderColor: '#eee',
        borderWidth: 1
    },

    buttonEnabled: {
        borderRadius: 5,
        height: hp(5.91),
        backgroundColor: '#142444'
    },

    buttonTitleDisabled: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.72),
        color: "#142444"
    },

    buttonTitleEnabled: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.72),
        color: "white"
    },

    saveCont: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    saveTitle: {
        fontFamily: Fonts.Bold,
        fontSize: hp(1.97),
        color: "#ffffff"
    },

    saveButtonCont: {
        width: 199
    },

    saveButton: {
        height: 56,
        borderRadius: 5,
        backgroundColor: "#00ccbd",
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowRadius: 10,
        shadowOpacity: 1,
        elevation: 8
    }
})
