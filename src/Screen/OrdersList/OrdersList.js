import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../../Helper/icons'
import { useTheme } from '../../Componets/ThemeContext';
import { styles } from './styles';
import CustomModal from '../../Componets/CustomModal/CustomModal';
import { string } from '../../Helper/string';
import AddModale from '../../Componets/AddModale/AddModale';
import ReactNativeModal from 'react-native-modal';

const OrdersList = ({ navigation }) => {
    const { theme, themeStyles } = useTheme();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [text1, settext1] = useState(false)
    const colorOpacityModal = 0.9;
    const [selectedStars, setSelectedStars] = useState(0);
    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };
    const toggleModal2 = () => {
        setModalVisible2(!modalVisible2);
    };
    const toggleStar = (index) => {
        setSelectedStars(index + 1);
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
            <TouchableOpacity onPress={() => setModalVisible(true)} style={[styles.mainviewstyle, { backgroundColor: themeStyles[theme].backgroundColor }]}>
                <Image source={icons.hamburger} style={[styles.hamburger]} />
            </TouchableOpacity>
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
                <View style={styles.flexviewstyles}>
                    <Text style={{ color: themeStyles[theme].textorder }}>{string.ITEMS}</Text>
                    <TouchableOpacity style={styles.checkview}>
                        <Image source={icons.check} style={styles.ckeckstyle}></Image>
                    </TouchableOpacity>
                </View>
                <Text style={[styles.itemlisttext, { color: themeStyles[theme].textColor }]}>Apple 1, Grapes 2, Papaya 1</Text>
                <Text style={[styles.orederstyle, { color: themeStyles[theme].textorder }]}>{string.ORDEREDON}</Text>
                <Text style={[styles.itemlisttext, { color: themeStyles[theme].textColor }]}>October 30, 2020 at 4:00 PM</Text>
                <Text style={[styles.orederstyle, { color: themeStyles[theme].textorder }]}>{string.TOTAL}</Text>
                <View style={styles.flexroestyles}>

                    <Text style={styles.rupessstyles}>₹</Text>
                    <Text style={[styles.numberstyle, { color: themeStyles[theme].textColor }]}>290</Text>
                    <TouchableOpacity onPress={() => setModalVisible2(true)} style={styles.addviewreviewbutton}>
                        <Text style={styles.revireaddtext}>{string.add}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.mainviewinhedth} />
                <View style={styles.flexviewstyles}>
                    <Text style={{ color: themeStyles[theme].textorder }}>{string.ITEMS}</Text>
                    <TouchableOpacity style={styles.checkview}>
                        <Image source={icons.check} style={styles.ckeckstyle}></Image>
                    </TouchableOpacity>
                </View>
                <Text style={[styles.itemlisttext, { color: themeStyles[theme].textColor }]}>Apple 1, Grapes 2, Papaya 1</Text>
                <Text style={[styles.orederstyle, { color: themeStyles[theme].textorder }]}>{string.ORDEREDON}</Text>
                <Text style={[styles.itemlisttext, { color: themeStyles[theme].textColor }]}>October 30, 2020 at 4:00 PM</Text>
                <Text style={[styles.orederstyle, { color: themeStyles[theme].textorder }]}>{string.TOTAL}</Text>
                <View style={styles.flexroestyles}>
                    <Text style={styles.rupessstyles}>₹</Text>
                    <Text style={[styles.numberstyle, { color: themeStyles[theme].textColor }]}>290</Text>
                    <TouchableOpacity onPress={() => setModalVisible2(true)} style={styles.addviewreviewbutton}>
                        <Text style={styles.revireaddtext}>{string.add}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.mainviewinhedth} />
                <View style={styles.flexviewstyles}>
                    <Text style={{ color: themeStyles[theme].textorder }}>{string.ITEMS}</Text>
                    <TouchableOpacity style={styles.checkview}>
                        <Image source={icons.check} style={styles.ckeckstyle}></Image>
                    </TouchableOpacity>
                </View>
                <Text style={[styles.itemlisttext, { color: themeStyles[theme].textColor }]}>Apple 1, Grapes 2, Papaya 1</Text>
                <Text style={[styles.orederstyle, { color: themeStyles[theme].textorder }]}>{string.ORDEREDON}</Text>
                <Text style={[styles.itemlisttext, { color: themeStyles[theme].textColor }]}>October 30, 2020 at 4:00 PM</Text>
                <Text style={[styles.orederstyle, { color: themeStyles[theme].textorder }]}>{string.TOTAL}</Text>
                <View style={styles.flexroestyles}>
                    <Text style={styles.rupessstyles}>₹</Text>
                    <Text style={[styles.numberstyle, { color: themeStyles[theme].textColor }]}>290</Text>
                    <TouchableOpacity onPress={() => setModalVisible2(true)} style={styles.addviewreviewbutton}>
                        <Text style={styles.revireaddtext}>{string.add}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.mainviewinhedth} />
                <ReactNativeModal
                    isVisible={modalVisible2}
                    backdropColor='rgba(0, 0, 0, 0.8)'
                    backdropOpacity={colorOpacityModal}
                    onBackdropPress={toggleModal2}
                    supportedOrientations={['portrait', 'landscape']}
                    onSwipeComplete={() => setModalVisible2(false)}
                    swipeDirection={['right']}
                    onRequestClose={() => setModalVisible2(false)}
                    style={{ margin: 0, bottom: 0 }}
                >
                    <View style={styles.mainviewmodal}>
                        <View style={styles.flwxrowsdf}>
                            <TouchableOpacity onPress={() => setModalVisible2(false)} style={styles.arrowstyle}>
                                <Image source={icons.back} style={styles.backArrow} />
                            </TouchableOpacity>
                            <Text style={styles.title2}>{string.rate}</Text>
                        </View>
                        <View style={styles.flexrwowfdds}>
                <Text style={styles.rattext}>{string.rating}</Text>
                <Text style={styles.selecnumber}> {selectedStars.toFixed(1)}</Text>
                <Text style={styles.starnumver}> / 5</Text>
              </View>
                        <View style={styles.starflexwrow}>
                            {[...Array(5).keys()].map((index) => (
                                <TouchableOpacity key={index} style={styles.margstar} onPress={() => toggleStar(index)}>
                                    <Image source={index < selectedStars ? icons.star : icons.starline} style={[styles.selectedStar, index < selectedStars && styles.startwo]} />
                                </TouchableOpacity>
                            ))}
                        </View>
                        <TextInput
                style={styles.input}
                placeholder="Write your comment..."
                placeholderTextColor={'#fff'}
                value={text1}
                onChangeText={(text1) => settext1(text1)} />
                  <View style={styles.buttomviewhe}></View>
                  <TouchableOpacity style={styles.sbmitview} onPress={() => setModalVisible2(false)}>
                <Text style={styles.submitview}>{string.submit}</Text>
              </TouchableOpacity>
                    </View>
                </ReactNativeModal>

                <View style={styles.marginbotom} />

            </ScrollView>
        </View>
    )
}

export default OrdersList

