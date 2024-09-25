import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTheme } from '../../Componets/ThemeContext';
import CustomHearder from '../../Componets/CustomHearder/CustomHearder';
import CustomModal from '../../Componets/CustomModal/CustomModal';
import { styles } from './styles';
import { string } from '../../Helper/string';
import { icons } from '../../Helper/icons';
import CustomTextinput from '../../Componets/CustomTextinput/CustomTextinput';
import DateTimePicker from '@react-native-community/datetimepicker';
const AddPaymentMethod = ({navigation,route}) => {
    const { theme, themeStyles } = useTheme();
    const [modalVisible, setModalVisible] = useState(false);
    const [is_selectPayment, setis_SelectPayment] = useState(false);
    const [cardnumber, setCardNumber] = useState()
    const [cardholdername, setCardHolderName] = useState()
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDateText, setSelectedDateText] = useState('');
    const paymentcared = route.params
    console.log('paymentcared >> ', paymentcared)
    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(Platform.OS === 'ios');
        setDate(currentDate);
        setSelectedDateText(currentDate.toLocaleDateString());
        setShowDatePicker(false);
    };

    const toggleDatePicker = () => {
        setShowDatePicker(!showDatePicker);
    };

    const selectedpaymentoption = (id) => {
        setis_SelectPayment(id)
    }
    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };
    const handleLogout = () => {
        Alert.alert(
            'Logout',
            'Are you sure you want to logout?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'Logout',
                    onPress: () => {
                        navigation.navigate('Login')

                        console.log('User logged out');

                    }
                }
            ],
            { cancelable: false }
        );
    };
    return (
        <View style={[styles.cantainer, { backgroundColor: themeStyles[theme].backgroundColor }]}>
            <CustomHearder
                title={string.addPaymentMethod}
                onPress={() => setModalVisible(true)}
                styletext={styles.styletext}
            />
            <CustomModal
                isVisible={modalVisible}
                onBackdropPress={toggleModal}
                swipeDirection={['down']}
                modalestyle={styles.modalestyle}
                onPress={() => {
                    navigation.navigate('Profile')
                    setModalVisible(false);
                }}
                onPress2={() => {
                    navigation.navigate('ContactUs')
                    setModalVisible(false);
                }}
                onPress4={() => {
                    navigation.navigate('OrdersList')
                    setModalVisible(false);
                }}
                onPress3={() => {
                    setModalVisible(false);
                    handleLogout();
                }}
                onPress5={() => {
                    navigation.navigate('Home')
                    setModalVisible(false);

                }}
                onPress6={() => {
                    navigation.navigate('InFormatiom')
                    setModalVisible(false);
                }}
            />
            <ScrollView>
                <Text style={[styles.usetext,{color:themeStyles[theme].textColor}]}>{string.addnewpaymeny}</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scrollViewContainer}
                >
                    <TouchableOpacity onPress={() => { selectedpaymentoption(1) }}
                        style={[styles.mainview,
                        {
                            borderWidth: 1, borderColor: is_selectPayment === 1 ? '#f39643' : '#cccccc',
                            borderRadius: is_selectPayment === 1 ? 10 : 15
                        }]}>
                        <TouchableOpacity onPress={() => { selectedpaymentoption(1) }} style={styles.addview}>
                            <View>
                                <Image source={icons.plusone} style={styles.img5} />
                            </View>

                        </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { selectedpaymentoption(2) }}
                        style={[styles.mainview, {
                            borderWidth: 1, borderColor: is_selectPayment === 2 ? '#f39643' : '#cccccc',
                            borderRadius: is_selectPayment === 2 ? 10 : 15
                        }]}>
                        <Image source={icons.mastercard} style={styles.img} />
                        <Text style={styles.mastercaredtext}>{string.mastercard}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { selectedpaymentoption(3) }}
                        style={[styles.mainview, {
                            borderWidth: 1, borderColor: is_selectPayment === 3 ? '#f39643' : '#cccccc',
                            borderRadius: is_selectPayment === 3 ? 10 : 15
                        }]}>
                        <Image source={icons.visacard} style={styles.img2} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { selectedpaymentoption(4) }}
                        style={[styles.mainview, {
                            borderWidth: 1, borderColor: is_selectPayment === 4 ? '#f39643' : '#cccccc',
                            borderRadius: is_selectPayment === 4 ? 10 : 15
                        }]}>
                        <Image source={icons.bcacrad} style={styles.img3} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { selectedpaymentoption(5) }}
                        style={[styles.mainview, {
                            borderWidth: 1, borderColor: is_selectPayment === 5 ? '#f39643' : '#cccccc',
                            borderRadius: is_selectPayment === 5 ? 10 : 15
                        }]}>
                        <Image source={icons.payplecard} style={styles.img4} />
                    </TouchableOpacity>
                </ScrollView>
                <Text style={[styles.cardnumbertext,{color:themeStyles[theme].textColor}]}>{string.cardnumber}</Text>

                <View style={styles.flexrowstyle}>
                    <TextInput
                        placeholder="Card Number"
                        placeholderTextColor={themeStyles[theme].textColor}
                        value={cardnumber}
                        onChangeText={(cardnumber) => setCardNumber(cardnumber)}
                        keyboardType="numeric"
                        style={[styles.input,{color:themeStyles[theme].textColor}]}
                    />
                    {is_selectPayment === 2 && (
                        <View style={styles.viewstyles}>
                            <Image source={icons.mastercard} style={styles.caredstyle} />
                            <Text style={[styles.mastercaredtext, styles.mastercaredtext2,{color:themeStyles[theme].textColor}]}>{string.mastercard}</Text>
                        </View>
                    )}
                    {is_selectPayment === 3 && (
                        <Image source={icons.visacard} style={styles.visacard} />
                    )}
                    {is_selectPayment === 4 && (
                        <Image source={icons.bcacrad} style={styles.bcacrad} />
                    )}
                    {is_selectPayment === 5 && (
                        <Image source={icons.payplecard} style={styles.payplecard} />
                    )}
                </View>
                <View style={[styles.maniviewstyle]} />
                <Text style={[styles.cardnumbertext,{color:themeStyles[theme].textColor}]}>{string.CardHolderName}</Text>
                <CustomTextinput
                    placeholder="Card Holder Name"
                    placeholderTextColor={themeStyles[theme].textColor}
                    value={cardholdername}
                    onChangeText={(cardholdername) => setCardHolderName(cardholdername)}
                    styelmarview2={[styles.styelmarview2,]}
                    styelmarview={styles.styelmarview}
                />
                <Text style={[styles.cardnumbertext, styles.cardnumbertext2,{color:themeStyles[theme].textColor}]}>{string.expirydate}</Text>
                <View style={styles.flexrowstyle}>
                    {showDatePicker && (
                        <DateTimePicker
                            modal
                            value={date}
                            mode="date"
                            display="default"
                            onChange={handleDateChange}
                            onCancel={() => setShowDatePicker(false)}
                        />
                    )}
                    {selectedDateText ? (
                        <Text style={[styles.input2,{color:themeStyles[theme].textColor}]}>{selectedDateText}</Text>
                    ) : (
                        <Text style={[styles.input2,{color:themeStyles[theme].textColor}]}>Select Date</Text>
                    )}

                    <TouchableOpacity onPress={toggleDatePicker} style={styles.postionstyle}>
                        <Image source={icons.calendar} style={[styles.dataimg,{tintColor:themeStyles[theme].iconColor}]} />
                    </TouchableOpacity>
                </View>

                <View style={[styles.maniviewstyle, styles.maniviewstyle2,{color:themeStyles[theme].textColor}]} />
                <Text style={[styles.cardnumbertext,{color:themeStyles[theme].textColor}]}>{string.CVV}</Text>
                <View style={styles.flexflowtwo}>
                    <Text style={[styles.input2,{color:themeStyles[theme].textColor}]}>ccv</Text>
                    <TouchableOpacity style={styles.postionstyle}>
                        <Image source={icons.question} style={[styles.dataimg,{tintColor:themeStyles[theme].iconColor}]} />
                    </TouchableOpacity>


                </View>
                <View style={[styles.maniviewstyle, styles.maniviewstyle2]} />
                <View style={styles.flecrowthree}>
                    <Image source={icons.info} style={styles.infoimg} />
                    <View>
                    <Text style={styles.margintext}>By Clicking "Save Payment Method" it means</Text>
                    <View style={styles.flexrtemestext}>
                        <Text style={styles.margintext2}>you agree to the </Text>
                        <TouchableOpacity>
                            <Text style={[styles.termstextstyle,{color:themeStyles[theme].textColor}]}>Terms and Condition</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('Checkout',{ selectedPaymentId: is_selectPayment })} style={styles.bottomview}>
                <Text style={styles.chnagestext}>{string.Savesplyament}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddPaymentMethod

