import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, Modal, TouchableWithoutFeedback } from 'react-native';
import { CountriesData } from '../../CountriesData'; // Assuming CountriesData contains an array of country objects
import { color } from 'react-native-elements/dist/helpers';
import { colors } from '../../Helper/colors';
import { Countrycode } from '../../Screen/Countrycode';

const CoustomCountrycode = ({ title, IconName, IconName2, placeholder, maxLength, onChangeText, value, secureTextEntry, placeholderTextColor, keyboardType }) => {
    const [showCountryList, setShowCountryList] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(Countrycode[0]);

    const renderCountryItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.countryItem}
                onPress={() => {
                    setSelectedCountry(item);
                    setShowCountryList(false);
                }}
            >
                <Text style={styles.textstyle}>{item.name}</Text>
                <Text style={styles.textstyle}>{item.callingCode}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View>
            <View style={styles.flexRow}>
              
                <TouchableOpacity onPress={() => setShowCountryList(true)} style={styles.iconStyle3}>
                    <Image source={IconName2} style={styles.iconStyle2} />
                </TouchableOpacity>
                <Text style={styles.titleText}>{selectedCountry.callingCode}</Text>
                <TextInput
                    placeholder={placeholder}
                    value={value}
                    placeholderTextColor={placeholderTextColor}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    maxLength={maxLength}
                  
                    style={styles.input}
                />
            </View>
            <Modal
                visible={showCountryList}
                animationType="slide"
                transparent={true}
            >
                <View style={styles.modalView}>
                    <TouchableWithoutFeedback onPress={() => setShowCountryList(false)}>
                        <View style={styles.modalBackground} />
                    </TouchableWithoutFeedback>
                    <FlatList
                        data={Countrycode}
                        renderItem={renderCountryItem}
                        keyExtractor={(item, index) => index.toString()}
                        style={styles.countryList}
                    />
                </View>
            </Modal>
            <View style={styles.maniviewstyle}></View>
        </View>
    );
};

export default CoustomCountrycode;

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: "row", marginLeft:'6%'
    },
  
    iconStyle: {
        height: 25,
        width: 25,
        alignSelf: "center",
        marginLeft: '4%'
    },
    iconStyle2: {
        height: 10,
        width: 10,
    },
    input: {
        marginLeft: "2%"
    },
    iconStyle3: {
        alignSelf: "center",
        marginLeft: '4%'
    },
    titleText: {
        alignSelf: "center",
        marginLeft: '4%',
        color: '#000'
    },
    countryList: {
        marginTop: 15,
        // borderWidth: 1,
        // borderColor: '#ccc',
        borderRadius: 5,
        marginLeft: "2%"
        // maxHeight: 250,
    },
    countryItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // padding: 10,
        height: 50,
        width: "70%",
        // borderBottomWidth: 1,
        // borderBottomColor: '#ccc',
    },
    modalView: {
        flex: 1,
        justifyContent: 'center', alignSelf: "center", alignItems: "center",
        position: "absolute",
        bottom: 300,
        backgroundColor: colors.white, width: "70%"
        // justifyContent: 'flex-end',


    },
    modalBackground: {
        flex: 1,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        // backgroundColor:"red"
    },
    textstyle: {
        color: '#000',
        fontFamily: 'Poppins-SemiBold',
    },
    maniviewstyle:{
        height:2, width:"85%",
         alignSelf:"center", backgroundColor:"#f39643", 
    },
});
