import { StyleSheet, Text, View, TouchableOpacity, Alert, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomHearder from '../../Componets/CustomHearder/CustomHearder'
import { useTheme } from '../../Componets/ThemeContext';
import { styles } from './styles';
import CustomModal from '../../Componets/CustomModal/CustomModal';
import { icons } from '../../Helper/icons';
import { Image } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import CustomTextinput from '../../Componets/CustomTextinput/CustomTextinput';
import CustomButton from '../../Componets/CustomButton/CustomButton';
import { string } from '../../Helper/string';

const Profile = ({navigation}) => {
    const { theme, themeStyles } = useTheme();
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [proffestion, setProffestion] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    console.log('selectedImages-----', selectedImage)
    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };
    const handleChangeProfile = () => {
        Alert.alert(
            'Confirmation',
            'Are you sure you want to change your profile picture?',
            [
                {
                    text: 'Cancel',
                    onPress: () => { },
                    style: 'cancel',
                },
                {
                    text: 'Confirm',
                    onPress: () => selectImage(),
                },
            ]
        );
    };

    const selectImage = () => {
        Alert.alert('Alert', 'Choose an option', [
            {
                text: 'Back',
                onPress: () => { },
            },
            {
                text: 'Camera',
                onPress: () => openCamera(),
            },
            {
                text: 'Library',
                onPress: () => openLibrary(),
            },
        ]);
    };

    const openLibrary = () => {
        const options = {
            storageOptions: {
                path: 'Image',
            },
        };
        console.log('Opening Library');
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                setSelectedImage(response.assets[0].uri);
                console.log(response.assets[0].uri);
            }
        });
    };

    const openCamera = () => {
        launchCamera(
            {
                mediaType: 'photo',
                quality: 1,
                includeBase64: false,
                saveToPhotos: true,
            },
            (response) => {
                if (!response.didCancel) {
                    setSelectedImage(response.assets[0].uri);
                    console.log('Photo captured:', response.assets[0].uri);
                }
            }
        );
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

        if (!name) {
            newErrors.name = 'Please enter name';
        }
        if (!proffestion) {
            newErrors.proffestion = 'Please enter proffestion';
        }
        if (!age) {
            newErrors.age = 'Please enter age';
        }
        if (!address) {
            newErrors.address = 'Please enter address';
        }
        if (!contact) {
            newErrors.contact = 'Please enter contact';
        }
        if (!email) {
            newErrors.email = 'Please enter email';
        }
        setErrors(newErrors);


        if (Object.keys(newErrors).length === 0) {
            navigation.navigate('Home');
        }
    };
    return (
        <View style={[styles.cantainer, { backgroundColor: themeStyles[theme].backgroundColor }]}>
            <CustomHearder
                title={string.Profile}
                onPress={() => setModalVisible(true)}
            />
             <CustomModal
        isVisible={modalVisible}
        onBackdropPress={toggleModal}
        swipeDirection={['down']}
        modalestyle={styles.modalestyle}
        onPress={() => {
          setModalVisible(false);
          navigation.navigate('Profile')
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
                <View style={styles.flexrowview}>
                    <TouchableOpacity style={styles.mainviewprofile}>
                        {selectedImage && typeof selectedImage === 'string' && (<Image source={{ uri: selectedImage }} style={styles.mainviewprofile}></Image>)}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleChangeProfile} style={styles.editview}>
                        <Text style={styles.editetxt}>Edit</Text>
                    </TouchableOpacity>
                </View>
                <CustomTextinput
                    placeholder="Name"
                    placeholderTextColor={{ default: "#000", color: themeStyles[theme].textColor  }}
                    value={name}
                    onChangeText={(name) => setName(name)}
                    contactstyle={styles.contactstyle}

                />
                 {errors.name && <Text style={styles.erroetext}>{errors.name}</Text>}
                <CustomTextinput
                    placeholder="Proffestion"
                    placeholderTextColor={{ default: "#000", color: themeStyles[theme].textColor }}
                    value={proffestion}
                    onChangeText={(proffestion) => setProffestion(proffestion)}
                    contactstyle={styles.contactstyle}
                />
                 {errors.proffestion && <Text style={styles.erroetext}>{errors.proffestion}</Text>}
                <CustomTextinput
                    placeholder="Age"
                    placeholderTextColor={{ default: "#000", color: themeStyles[theme].textColor }}
                    value={age}
                    onChangeText={(age) => setAge(age)}
                    contactstyle={styles.contactstyle}
                />
                 {errors.age && <Text style={styles.erroetext}>{errors.age}</Text>}
                <CustomTextinput
                    placeholder="Address"
                    placeholderTextColor={{ default: "#000", color: themeStyles[theme].textColor }}
                    value={address}
                    onChangeText={(address) => setAddress(address)}
                    contactstyle={styles.contactstyle}
                />
                 {errors.address && <Text style={styles.erroetext}>{errors.address}</Text>}
                <CustomTextinput
                    placeholder="Contact"
                    placeholderTextColor={{ default: "#000", color: themeStyles[theme].textColor }}
                    value={contact}
                    maxLength={10}
                    keyboardType="numeric"
                    onChangeText={(contact) => setContact(contact)}
                    contactstyle={styles.contactstyle}
                />
                 {errors.contact && <Text style={styles.erroetext}>{errors.contact}</Text>}
                <CustomTextinput
                    placeholder="Email"
                    placeholderTextColor={{ default: "#000", color: themeStyles[theme].textColor }}
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                    contactstyle={styles.contactstyle}
                />
                 {errors.email && <Text style={styles.erroetext}>{errors.email}</Text>}
                <CustomButton
                    title={string.submit}
                    contactusbutton={styles.contactusbutton}
                    onPress={handleLogin}
                />
              
                <View style={styles.marginbottom} />
            </ScrollView>
        </View>
    )
}

export default Profile

