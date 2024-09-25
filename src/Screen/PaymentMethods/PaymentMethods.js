import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomHearder from '../../Componets/CustomHearder/CustomHearder'
import CustomModal from '../../Componets/CustomModal/CustomModal'
import { useTheme } from '../../Componets/ThemeContext'
import { string } from '../../Helper/string'
import { styles } from './styles'
import { icons } from '../../Helper/icons'

const PaymentMethods = ({ navigation }) => {
    const { theme, themeStyles } = useTheme();
    const [modalVisible, setModalVisible] = useState(false);
    const [is_selectPayment, setis_SelectPayment] = useState(false);
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
                title={string.PaymentMethods}
                onPress={() => setModalVisible(true)}
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
                <Text style={[styles.usetext,{color:themeStyles[theme].textColor}]}>{string.payusing}</Text>
                <View style={styles.paymentviewflexrow}>
                    <TouchableOpacity onPress={() => { selectedpaymentoption(1) }}
                        style={[styles.paymentoption, { borderWidth: 1, borderColor: is_selectPayment === 1 ? '#f39643' : '#cccccc' }]}>
                        <View>
                            <Image source={icons.mastercard} style={styles.img} />
                            <Text style={styles.mastercaredtext}>{string.mastercard}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { selectedpaymentoption(2) }}
                        style={[styles.paymentoption, { borderWidth: 1, borderColor: is_selectPayment === 2 ? '#f39643' : '#cccccc' }]}>
                        <Image source={icons.visacard} style={styles.img2} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { selectedpaymentoption(3) }}
                        style={[styles.paymentoption, { borderWidth: 1, borderColor: is_selectPayment === 3 ? '#f39643' : '#cccccc' }]}>
                        <Image source={icons.bcacrad} style={styles.img3} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { selectedpaymentoption(4) }} style={[styles.paymentoption, { borderWidth: 1, borderColor: is_selectPayment === 4 ? '#f39643' : '#cccccc' }]}>
                        <Image source={icons.payplecard} style={styles.img} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { selectedpaymentoption(5) }} style={[styles.paymentoption, { borderWidth: 1, borderColor: is_selectPayment === 5 ? '#f39643' : '#cccccc' }]}>
                        <TouchableOpacity onPress={() => { selectedpaymentoption(5) }} style={styles.addview}>
                            <View>
                                <Image source={icons.plusone} style={styles.img5} />
                            </View>
                        </TouchableOpacity >
                        <Text style={styles.mastercaredtext}>{string.AddNewCard}</Text>
                    </TouchableOpacity>
                </View>
                {/* <Image source={icons.mastercardimg} style={styles.caredstyle} /> */}
                {is_selectPayment === 1 && (
                    <Image source={icons.mastercardimg} style={styles.caredstyle} />
                )}

                {is_selectPayment === 2 && (
                    <Image source={icons.visacareimag} style={styles.caredstyle} />
                )}
                {is_selectPayment === 3 && (
                    <Image source={icons.bcaCardimges} style={styles.caredstyle} />
                )}
                {is_selectPayment === 4 && (
                    <Image source={icons.paypleimages} style={styles.caredstyle} />
                )}
                <View style={styles.marbottom} />
            </ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('AddPaymentMethod',{paymentcared:icons.mastercard})} style={styles.bottomview}>
                <Text style={styles.chnagestext}>{string.chnagesplyament}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PaymentMethods


