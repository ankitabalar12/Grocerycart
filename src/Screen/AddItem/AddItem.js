import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '../../Componets/ThemeContext';
import { icons } from '../../Helper/icons';
import { Image } from 'react-native';
import { styles } from './styles';
import { items } from '../items';
import { string } from '../../Helper/string';
import CustomButton from '../../Componets/CustomButton/CustomButton';
import AddModale from '../../Componets/AddModale/AddModale';
import CustomModal from '../../Componets/CustomModal/CustomModal';

const AddItem = ({navigation,route}) => {
    const { theme, themeStyles } = useTheme();
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const discount = 20;
    const detailsdata = route?.params?.detailsdata;
    const foodPrice = route?.params?.foodPrice;
    const foodname = route?.params?.foodname;
   console.log('item >>', detailsdata,foodPrice,foodname)
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [items, setItems] = useState([
        { id: 1, name: 'Banana', price: 35, image: icons.banana, count: 0, deleted: false },
        { id: 2, name: 'Watermelon Seed', price: 35, image: icons.watermelonseed, count: 0, deleted: false },

    ]);
    const toggleModal2 = () => {
        setModalVisible2(!modalVisible2);
    };
    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };
    const formatCount = (num) => {
        return num.toString().padStart(2, '0');
    };

    const incrementCount = (item) => {
        item.count++;
        setTotalPrice(prevTotalPrice => prevTotalPrice + item.price);
        setItems([...items]);
    };

    const decrementCount = (item) => {
        if (item.count > 0) {
            item.count--;
            setItems([...items]);
            setTotalPrice(prevTotalPrice => prevTotalPrice - item.price);
        }
    };
    const nonDeletedItems = items.filter(item => !item.deleted);

    const toggleDeletedView = (item) => {
        item.deleted = !item.deleted;
        setItems([...items]);
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
            <TouchableOpacity  onPress={() => setModalVisible(true)}>
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

                {nonDeletedItems.map(item => (
                    <View key={item.id} style={[styles.mainview,
                    // { backgroundColor: themeStyles[theme].backgroundColorbox }
                    ]}>

                        <View style={styles.flexrowstyle}>
                            <View style={[styles.favourtiesview,
                                // { backgroundColor: themeStyles[theme].backgroundColorbox }
                                ]}>
                                <Image source={item.image} style={styles.cauliflower} />
                            </View>
                            <View style={styles.marleft}>
                                <Text style={styles.textstyleitem}>{item.name}</Text>
                                <Text style={styles.textstyleitem2}>{item.price}</Text>
                            </View>
                            <View style={styles.flextworow}>
                                <TouchableOpacity onPress={() => decrementCount(item)} style={styles.lessthenview}>
                                    <Image source={icons.minus} style={styles.minus} />
                                </TouchableOpacity>
                                <Text style={styles.incrementtext}>{formatCount(item.count)}</Text>
                                <TouchableOpacity onPress={() => incrementCount(item)} style={styles.mmorethenview}>
                                    <Image source={icons.add} style={styles.plus} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => toggleDeletedView(item)} style={styles.deledtview}>
                            <Image source={icons.close} style={styles.close} />
                        </TouchableOpacity>

                    </View>
                ))}

                <View style={styles.flexviewinrow}>
                    <Text style={[styles.subtotale,{color: themeStyles[theme].textColor}]}>{string.subtotale}</Text>
                    <Text style={[styles.textstylerupesss,{color: themeStyles[theme].textorder}]}>₹{totalPrice}</Text>
                </View>
                <View style={styles.flexviewinrow}>
                    <Text style={[styles.subtotale,{color: themeStyles[theme].textColor}]}>{string.discount}</Text>
                    <Text style={[styles.textstylerupesss,{color: themeStyles[theme].textorder}]}>₹{discount}</Text>
                </View>
                <View style={styles.flexviewinrow}>
                    <Text style={[styles.subtotale2,{color: themeStyles[theme].textColor}]}>{string.total}</Text>
                    <Text style={styles.textstylerupesss2}>₹{totalPrice - discount}</Text>
                </View>
                <CustomButton
                    title={string.Cackout}
                    contactusbutton={styles.contactusbutton}
                    onPress={() => setModalVisible2(true)}

                />
                <AddModale
                    isVisible={modalVisible2}
                    onBackdropPress={toggleModal2}
                    backdropColor={'#000'}
                    backdropOpacity={0.1}
                    swipeDirection={['down']}
                    modalestyle={styles.modalestyle}
                    colorfullview={styles.colorfullview}
                    title={string.aeryousure}
                    yesview2={styles.yesview2}
                    noview={styles.noview}
                    IamgesName={icons.close}
                    IconName={icons.check}
                    onPress2={() => setModalVisible2(false)}
                    onPress={() => { navigation.navigate('Address');
                    setModalVisible2(false);
                     }}  />
                <View style={styles.marginebottom} />
            </ScrollView>

        </View>
    )
}

export default AddItem

