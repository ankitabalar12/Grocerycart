import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '../../Componets/ThemeContext';
import { icons } from '../../Helper/icons';
import { string } from '../../Helper/string';
import { styles } from './styles';
import CustomTextinput from '../../Componets/CustomTextinput/CustomTextinput';
import CustomButton from '../../Componets/CustomButton/CustomButton';

const ForgotPassword = () => {
    const { theme, themeStyles } = useTheme();
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  };
  const handleLogin = () => {
    const newErrors = {};

    if (!email) {
        newErrors.email = 'Please enter email';
    } else if (!isValidEmail(email)) {
        newErrors.email = 'Please enter a valid email';
    }
   setErrors(newErrors);
 if (Object.keys(newErrors).length === 0) {
        navigation.navigate('Login');
    }
};
  return (
    <View style={[styles.cantainer, { backgroundColor: themeStyles[theme].backgroundColor }]}>
     <Image source={icons.forgotpasswor} style={styles.forgotpasswor} />
     <Text style={styles.textstyles}>{string.ForgotPassword}</Text>
     <CustomTextinput
                    placeholder="Email"
                    placeholderTextColor={{ default: "#000", color: themeStyles[theme].textColor }}
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                />
                {errors.email && <Text style={styles.erroetext}>{errors.email}</Text>}
                <CustomButton
                    title={string.save}
                    onPress={handleLogin}
                />
    </View>
  )
}

export default ForgotPassword

