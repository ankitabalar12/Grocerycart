import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '../../Componets/ThemeContext';
import { styles } from './styles';
import { icons } from '../../Helper/icons';
import { Image } from 'react-native';
import CustomHearder from '../../Componets/CustomHearder/CustomHearder';
import CustomTextinput from '../../Componets/CustomTextinput/CustomTextinput';
import CustomButton from '../../Componets/CustomButton/CustomButton';
import { string } from '../../Helper/string';
import CustomModal from '../../Componets/CustomModal/CustomModal';

const ContactUs = ({navigation}) => {
    const { theme, themeStyles } = useTheme();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [subject, setSubject] = useState('');
    const [messages, setMessagess] = useState('');
    const [errors, setErrors] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };
    const handleLogin = () => {
        const newErrors = {};

        if (!name) {
            newErrors.name = 'Please enter name';
        }
        if (!number) {
            newErrors.number = 'Please enter number';
        }
        if (!subject) {
            newErrors.subject = 'Please enter subject';
        }
        if (!messages) {
            newErrors.messages = 'Please enter messages';
        }
        setErrors(newErrors);


        if (Object.keys(newErrors).length === 0) {
        //    navigation.navigate('PaymentMethods');
        }
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
                title={'Contact Us'}
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
            <CustomTextinput
                placeholder="Name"
                placeholderTextColor={{ default: "#000", color: themeStyles[theme].textColor }}
                value={name}
                onChangeText={(name) => setName(name)}
                contactstyle={styles.contactstyle}

            />
            {errors.name && <Text style={styles.erroetext}>{errors.name}</Text>}
            <CustomTextinput
                placeholder="Number"
                placeholderTextColor={{ default: "#000", color: themeStyles[theme].textColor }}
                value={number}
                maxLength={10}
                keyboardType="numeric"
                onChangeText={(number) => setNumber(number)}
                contactstyle={styles.contactstyle}
            />
            {errors.number && <Text style={styles.erroetext}>{errors.number}</Text>}
            <CustomTextinput
                placeholder="Subject"
                placeholderTextColor={{ default: "#000", color: themeStyles[theme].textColor }}
                value={subject}
                onChangeText={(subject) => setSubject(subject)}
                contactstyle={styles.contactstyle}
            />
            {errors.subject && <Text style={styles.erroetext}>{errors.subject}</Text>}
            <CustomTextinput
                placeholder="Messages"
                placeholderTextColor={{ default: "#000", color: themeStyles[theme].textColor }}
                value={messages}
                onChangeText={(messages) => setMessagess(messages)}
                contactstyle={styles.contactstyle}
            />
            {errors.messages && <Text style={styles.erroetext}>{errors.messages}</Text>}
            <CustomButton
                title={string.submit}
                contactusbutton={styles.contactusbutton}
                onPress={handleLogin}
            />
          
        </View>
    )
}

export default ContactUs

