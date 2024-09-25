import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTheme } from '../../Componets/ThemeContext';
import { icons } from '../../Helper/icons';
import { styles } from './styles';
import { string } from '../../Helper/string';
import OTPTextView from 'react-native-otp-textinput';
import CustomButton from '../../Componets/CustomButton/CustomButton';

const otpscreen = ({navigation}) => {
  const { theme, themeStyles } = useTheme();
  const [otp, setOpt] = useState('');
  const [resendTime, setResendTime] = useState(29);
  useEffect(() => {
    const timer = setInterval(() => {
      setResendTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };
  return (
    <View style={[styles.cantainer, { backgroundColor: themeStyles[theme].backgroundColor }]}>
      <ScrollView>
        <Image source={icons.otpfoodicon} style={styles.signupimgfood} />
        <Text style={[styles.textstyle, { color: themeStyles[theme].textColor }]}>
          Verification OTP sent to +91 7905355997
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center' ,marginHorizontal:"15%"}}>
      <OTPTextView
      
        handleTextChange={(otp) => console.log(otp)}
        inputCount={6}
        keyboardType="numeric"
        tintColor="#f39643"
        textInputStyle={{  width: 30 ,}}
        // inputContainerStyles={{ marginHorizontal: 5 }}
      />
    </View>
<Text style={styles.resendtext}>Resend in {formatTime(resendTime)}</Text>
<CustomButton
                    title={string.submit}
                    onPress={() => { navigation.navigate('Login') }}
                />
      </ScrollView>
    </View>
  )
}

export default otpscreen