import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../../Helper/icons'
import { useTheme } from '../../Componets/ThemeContext';
import { styles } from './styles';
import CustomTextinput from '../../Componets/CustomTextinput/CustomTextinput';
import CustomButton from '../../Componets/CustomButton/CustomButton';
import { string } from '../../Helper/string';

const SignUp = ({ navigation }) => {
    const { theme, themeStyles } = useTheme();
    const [email_id, setEmail_id] = useState('');
    const [fullname, setFullName] = useState('');
    const [contactnumber, setContactNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmpassword, setShowConfirmPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const togglePasswordconfrimVisibility = () => {
        setShowConfirmPassword(!showConfirmpassword);
    };
    const isValidEmail = (email_id) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email_id);
    };

    const handleLogin = () => {
        const newErrors = {};
        if (!fullname) {
            newErrors.fullname = 'Please enter fullname';
        }

        if (!email_id) {
            newErrors.email_id = 'Please enter email';
        } else if (!isValidEmail(email_id)) {
            newErrors.email_id = 'Please enter a valid email';
        }

        if (!contactnumber) {
            newErrors.contactnumber = 'Please enter contactnumber';
        }
        if (!password) {
            newErrors.password = 'Please enter password';
        }
        if (!password) {
            newErrors.password = 'Please enter password';
        }
        if (!confirmpassword) {
            newErrors.confirmpassword = 'Please enter confirm password';
        } else if (password !== confirmpassword) {
            newErrors.confirmpassword = 'Confirm Password do not match';
        }
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            navigation.navigate('Phonenumber');
        }

    };
    return (
        <View style={[styles.cantainer, { backgroundColor: themeStyles[theme].backgroundColor }]}>
            <ScrollView>
                <Image source={icons.loginfoodimages} style={styles.signupimgfood} />
                <CustomTextinput
                    placeholder="Full Name"
                    placeholderTextColor={{ default: "#000", color: themeStyles[theme].textColor }}
                    value={fullname}
                    onChangeText={(fullname) => setFullName(fullname)}
                    styletop={styles.styletop}
                />
                {errors.fullname && <Text style={styles.erroetext}>{errors.fullname}</Text>}
                <CustomTextinput
                    placeholder="Email_id"
                    placeholderTextColor={{ default: "#000", color: themeStyles[theme].textColor }}
                    value={email_id}
                    onChangeText={(email_id) => setEmail_id(email_id)}
                    styletop={styles.styletop}
                />
                {errors.email_id && <Text style={styles.erroetext}>{errors.email_id}</Text>}
                <CustomTextinput
                    placeholder="Contact Number"
                    placeholderTextColor={{ default: "#000", color: themeStyles[theme].textColor }}
                    value={contactnumber}
                    maxLength={10}
                    keyboardType="numeric"
                    onChangeText={(contactnumber) => setContactNumber(contactnumber)}
                    styletop={styles.styletop}
                />
                {errors.contactnumber && <Text style={styles.erroetext}>{errors.contactnumber}</Text>}
                <View style={styles.flexrowstyle}>
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor={themeStyles[theme].textColor}
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                        secureTextEntry={!showPassword}
                        style={styles.input}
                    />
                    <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconpostionstyle}>
                        <Image source={showPassword ? icons.view : icons.hidden} style={[styles.iconstyle, { tintColor: themeStyles[theme].iconColor }]} />
                    </TouchableOpacity>
                </View>
                <View style={styles.maniviewstyle} />
                {errors.password && <Text style={styles.erroetext}>{errors.password}</Text>}
                <View style={styles.flexrowstyle}>
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor={themeStyles[theme].textColor}
                        value={confirmpassword}
                        onChangeText={(confirmpassword) => setConfirmPassword(confirmpassword)}
                        secureTextEntry={!showConfirmpassword}
                        style={styles.input}
                    />
                    <TouchableOpacity onPress={togglePasswordconfrimVisibility} style={styles.iconpostionstyle}>
                        <Image source={showConfirmpassword ? icons.view : icons.hidden} style={[styles.iconstyle, { tintColor: themeStyles[theme].iconColor }]} />
                    </TouchableOpacity>
                </View>
                <View style={styles.maniviewstyle} />
                {errors.confirmpassword && <Text style={styles.erroetext}>{errors.confirmpassword}</Text>}
                <CustomButton
                    title={string.submit}
                    onPress={handleLogin}
                />
                <View style={styles.marginbottom} />
            </ScrollView>
        </View>
    )
}

export default SignUp

