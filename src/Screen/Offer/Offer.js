import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '../../Componets/ThemeContext';
import CustomHearder from '../../Componets/CustomHearder/CustomHearder';
import CustomModal from '../../Componets/CustomModal/CustomModal';
import { styles } from './styles';
import { icons } from '../../Helper/icons';
import { string } from '../../Helper/string';

const Offer = ({ navigation }) => {
    const { theme, themeStyles } = useTheme();
    const [modalVisible, setModalVisible] = useState(false);
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
                title={' Special Offer'}
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
            <View style={[styles.nainview]}>
                <Image source={icons.foodoffercardone} style={[styles.userimg]} />
                <Text style={styles.specialtext}>{string.speacialoffone}</Text>
                <Text style={styles.limitedtet}>{string.limitedtime}</Text>
                <Text style={styles.loremipsumtext}>{string.loremipsum}</Text>
                <Text style={styles.dollertex}>$9.99</Text>
            </View>
            <View style={[styles.nainview]}>
                <Image source={icons.foodoffertwo} style={[styles.userimg]} />
                <Text style={styles.specialtext}>{string.speacialofftwo}</Text>
                <Text style={styles.limitedtet}>{string.thisweekedonly}</Text>
                <Text style={styles.loremipsumtext}>{string.loremipsum}</Text>
                <Text style={styles.dollertex}>$9.99</Text>
            </View>
            <View style={[styles.nainview]}>
                <Image source={icons.offerthreee} style={[styles.userimg]} />
                <Text style={styles.specialtext}>{string.speacialoffthree}</Text>
                <Text style={styles.limitedtet}>{string.limitedtime}</Text>
                <Text style={styles.loremipsumtext}>{string.loremipsum}</Text>
                <Text style={styles.dollertex}>$9.99</Text>
            </View>
            <View style={styles.marginbottom}/>
            </ScrollView>
        </View>
    )
}

export default Offer

