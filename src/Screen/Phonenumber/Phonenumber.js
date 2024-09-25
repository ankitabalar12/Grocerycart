import { Image, ScrollView, View, TouchableOpacity, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import { icons } from '../../Helper/icons';
import { useTheme } from '../../Componets/ThemeContext';

import CoustomCountrycode from '../../Componets/CoustomCountrycode/CoustomCountrycode';
import CustomButton from '../../Componets/CustomButton/CustomButton';
import { string } from '../../Helper/string';
import { styles } from './styles';

const Phonenumber = ({navigation }) => {
    const { theme, themeStyles } = useTheme();
    const [contactnumber, setContactNumber] = useState('');
return (
        <View style={[styles.container, { backgroundColor: themeStyles[theme].backgroundColor }]}>
            <ScrollView>
                <Image source={icons.otpfoodimg} style={styles.signupimgfood} />

                <CoustomCountrycode
                    IconName2={icons.down}
                    placeholder="Your Mobile number"
                    placeholderTextColor={themeStyles[theme].textColor}
                    value={contactnumber}
                    maxLength={10}
                    keyboardType="numeric"
                    onChangeText={(contactnumber) => setContactNumber(contactnumber)}
                    style={styles.input}

                />
                <CustomButton
                    title={string.getotp}
                    onPress={() => { navigation.navigate('otpscreen') }}
                />
                <Text style={styles.ortex}>{string.or}</Text>
                <TouchableOpacity style={styles.textInputView}>
                    <View style={styles.flexrwoone}>
                        <Image source={icons.google} style={styles.google}></Image>
                        <Text style={styles.countinuetext}>{string.continuewithgoogle}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.textInputView,styles.textInputView2]}>
                    <View style={styles.flexrwoone}>
                        <Image source={icons.facebook} style={[styles.google,styles.google2]}></Image>
                        <Text style={[styles.countinuetext,styles.continuewithfacebook2]}>{[string.continuewithfacebook]}</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.marbottom} />
            </ScrollView>
        </View>
    );
};

export default Phonenumber;
