import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomModal from '../../Componets/CustomModal/CustomModal';
import CustomHearder from '../../Componets/CustomHearder/CustomHearder';
import { useTheme } from '../../Componets/ThemeContext';
import { string } from '../../Helper/string';
import { icons } from '../../Helper/icons';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';

import CustomButton from '../../Componets/CustomButton/CustomButton';
import { styles } from './styles';

const Address = ({navigation}) => {
    const { theme, themeStyles } = useTheme();
    const [modalVisible, setModalVisible] = useState(false);
    const [location, setLocation] = useState('');
    const [homenumber, setHomeNumber] = useState('')
    const [floornumbr, setFloorNumber] = useState('')
    const [floornumbroption, setFloorNumberOption] = useState('')
    const [errors, setErrors] = useState({});

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
    const handleLogin = () => {
        const newErrors = {};

        if (!location) {
            newErrors.location = 'Please enter location';
        }
        if (!homenumber) {
            newErrors.homenumber = 'Please enter homenumber';
        }
        if (!floornumbr) {
            newErrors.floornumbr = 'Please enter floornumbr';
        }
        if (!floornumbroption) {
            newErrors.floornumbroption = 'Please enter floornumbroption';
        }
        setErrors(newErrors);


        if (Object.keys(newErrors).length === 0) {
            // navigation.navigate('OrdersList');
            navigation.navigate('PaymentMethods');
        }
    };
    return (
        <View style={[styles.cantainer, { backgroundColor: themeStyles[theme].backgroundColor }]}>
            <CustomHearder
                title={string.Address}
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
            <Text style={styles.loction}>{string.loction}</Text>
            <View style={styles.flexviewrowtwo}>
                <TouchableOpacity style={styles.circleview}>
                    <Image source={icons.check} style={styles.check} />
                </TouchableOpacity>
                <TextInput
                    placeholder="Enter Your Loction"
                    placeholderTextColor={themeStyles[theme].textColor }
                    value={location}
                    onChangeText={text => setLocation(text)}
                    style={[styles.input,{color: themeStyles[theme].textColor}]}

                />
                <TouchableOpacity style={styles.postiontext}>
                    <Text style={styles.textchangesstyle}>{string.chnages}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.mainviewstyle} />
                 {errors.location && <Text style={styles.erroetext}>{errors.location}</Text>}
            <Text style={[styles.loction]}>{string.completeaddress}</Text>
            <TextInput
                placeholder="Hose no./ Flat no./ Building"
                placeholderTextColor={themeStyles[theme].textColor}
                value={homenumber}
                onChangeText={(homenumber) => setHomeNumber(homenumber)}
                style={[styles.input2,{color: themeStyles[theme].textColor}]}
            />
            <View style={[styles.mainviewstyle, styles.mainviewstyle2]} />
            {errors.homenumber && <Text style={styles.erroetext}>{errors.homenumber}</Text>}
            <TextInput
                placeholder="Floor (optional)"
                placeholderTextColor={themeStyles[theme].textColor }
                value={floornumbr}
                onChangeText={(floornumbr) => setFloorNumber(floornumbr)}
                style={[styles.input2,{color: themeStyles[theme].textColor}]}
            />
            <View style={[styles.mainviewstyle, styles.mainviewstyle2]} />
            {errors.floornumbr && <Text style={styles.erroetext}>{errors.floornumbr}</Text>}
            <TextInput
                placeholder="Floor (optional)"
                placeholderTextColor={themeStyles[theme].textColor }
                value={floornumbroption}
                onChangeText={(floornumbroption) => setFloorNumberOption(floornumbroption)}
                style={[styles.input2,{color: themeStyles[theme].textColor}]}
            />
            <View style={[styles.mainviewstyle, styles.mainviewstyle2]} />
            {errors.floornumbroption && <Text style={styles.erroetext}>{errors.floornumbroption}</Text>}
            <CustomButton
                title={string.submit}
                contactusbutton={styles.contactusbutton}
                onPress={handleLogin}
            />
            
        </View>
    )
}

export default Address

