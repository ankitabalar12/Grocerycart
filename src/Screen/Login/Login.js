import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '../../Componets/ThemeContext';
import { styles } from './styles';
import { icons } from '../../Helper/icons';
import CustomTextinput from '../../Componets/CustomTextinput/CustomTextinput';
import { string } from '../../Helper/string';
import CustomButton from '../../Componets/CustomButton/CustomButton';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const { theme, themeStyles, updateThemeForAllScreens } = useTheme();
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleLogin = () => {
        const newErrors = {};

        if (!email) {
            newErrors.email = 'Please enter email';
        } else if (!isValidEmail(email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!password) {
            newErrors.password = 'Please enter password';
        }


        setErrors(newErrors);


        if (Object.keys(newErrors).length === 0) {
            navigation.navigate('Home');
        }
    };

    return (
        <View style={[styles.cantainer, { backgroundColor: themeStyles[theme].backgroundColor }]}>
            {/* <ScrollView> */}
                <Image source={icons.siginfoodimage} style={styles.foodloignimg} />
                <CustomTextinput
                    placeholder="Email"
                    placeholderTextColor={{ default: "#000", color: themeStyles[theme].textColor }}
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                />
                {errors.email && <Text style={styles.erroetext}>{errors.email}</Text>}
                <View style={styles.flexrowstyle}>
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor={themeStyles[theme].textColor}
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                        secureTextEntry={!showPassword}
                        style={[styles.input,{color: themeStyles[theme].textColor }]}
                    />
                    <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconpostionstyle}>
                        <Image source={showPassword ? icons.view : icons.hidden} style={[styles.iconstyle,{tintColor: themeStyles[theme].iconColor }]} />
                    </TouchableOpacity>
                </View>
                <View style={styles.maniviewstyle} />
                {errors.password &&
                    <Text style={styles.erroetext}>{errors.password}</Text>
                }
                <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                    <Text style={[styles.forgotpasstext,
                    { color: themeStyles[theme].textColor }]}>
                        {string.ForgetPassword}
                    </Text>
                </TouchableOpacity>
                <CustomButton
                    title={string.login}
                    onPress={handleLogin}
                />
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.ifyoutext}>{string.ifyouare}</Text>
                </TouchableOpacity>
                {/* <View style={styles.marginbottom} /> */}
            {/* </ScrollView> */}

        </View>
    )
}

export default Login

