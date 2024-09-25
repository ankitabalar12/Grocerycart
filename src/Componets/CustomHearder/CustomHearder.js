import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '../ThemeContext';
import { icons } from '../../Helper/icons';
import CustomModal from '../CustomModal/CustomModal';

const CustomHearder = ({title,onPress,styletext}) => {
    const { theme, themeStyles } = useTheme();
    
    return (
        <View style={[styles.cantainer, { backgroundColor: themeStyles[theme].backgroundColor }]}>
            <View style={[styles.mainviewstyle,{ backgroundColor: themeStyles[theme].backgroundColor }]}>
                <View style={styles.flexrowview}>
                    <TouchableOpacity  onPress={onPress} >
                        <Image source={icons.hamburger} style={styles.hamburger} />
                    </TouchableOpacity>
                    <Text style={[styles.contactustext,styletext]}>{title}</Text>
                </View>
            </View>
          
        </View>
    )
}

export default CustomHearder

const styles = StyleSheet.create({
    flexrowview: {
        flexDirection: 'row',
        marginTop: "5%",
        marginHorizontal: "5%",
        //  alignSelf:"center"
    },
    hamburger: {
        height: 30,
        width: 30,
        tintColor: "#f39643"
    },
    contactustext: {
        fontSize: 20,
        color: "#f39643",
        textAlign: "center",
        fontFamily: 'Poppins-SemiBold',
        marginLeft: "27%"
    },
    mainviewstyle: {
        height: 100,
        width: "100%",
        backgroundColor: "#e6e6e6",
         justifyContent: "center",
         shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
       
    }
})
