import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useTheme } from '../ThemeContext';

const CustomTextinput = ({ styletop,styelmarview2, styelmarview,contactstyle, onPress, placeholder, maxLength, onChangeText, value, secureTextEntry, placeholderTextColor, keyboardType }) => {
    const { theme, themeStyles,IconName, themeStylestext, updateThemeForAllScreens } = useTheme();
    return (
        <View>

            <TextInput
                placeholder={placeholder}
                value={value}
                placeholderTextColor={themeStyles[theme].textColor}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                maxLength={maxLength}
                // default={"#000"}
                style={[styles.input,styelmarview2, styletop,contactstyle,{color: themeStyles[theme].textColor}]}
            />
            
           
           
            <View style={[styles.maniviewstyle,styelmarview]}></View>
           
        </View>
    )
}

export default CustomTextinput

const styles = StyleSheet.create({
    maniviewstyle: {
        height: 2, width: "85%",
        alignSelf: "center", backgroundColor: "#f39643",
    },
    input: {
        marginLeft: "8%",


    },
    flexrow: {
        flexDirection: 'row',

    },
    titlestyle: {
        color: '#000',
        marginTop: '3%', marginLeft: "10%"
    },
    flexrowstyle:{
        flexDirection:"row"
    },
   
})