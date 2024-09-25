import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { icons } from '../../Helper/icons';
import { useTheme } from '../ThemeContext';

const HeaderComponet = ({onPress ,onPress2, onPress3}) => {
    const { theme, themeStyles } = useTheme();
    return (
        <View style={styles.flexrowstyle}>
            <TouchableOpacity onPress={onPress}>
                <Image source={icons.hamburger} style={[styles.hamburger]} />
            </TouchableOpacity >
            <TouchableOpacity  onPress={onPress3} style={[styles.trollysty,{backgroundColor: themeStyles[theme].backgroundColorview}]}>
                <Image source={icons.trolly} style={styles.trolly} />
            </TouchableOpacity>
            <TouchableOpacity  onPress={onPress2} style={styles.profileview}>
            <Image source={icons.foodprofileimg} style={styles.profileview2} /> 
            </TouchableOpacity>
        </View>
    )
}

export default HeaderComponet

export const styles = StyleSheet.create({
    flexrowstyle: {
        flexDirection: "row",
        marginHorizontal: "5%", marginTop: "5%",
        // justifyContent:"space-between"
        marginBottom:"10%"
    },
    trolly: {
        height: 30,
        width: 30,
        tintColor:'#009900'

    },
    trollysty: {
        position: "absolute",
        right: 60,
        marginTop: "1%",
        height: 40,
        width: 40,
        borderRadius: 10,
        backgroundColor: '#f2f2f2',
        justifyContent: "center"
    },
    hamburger: {
        height: 30,
        width: 30,
        alignSelf: "center",
        tintColor:"#f39643"
    },
    profileview: {
        height: 50,
        width: 50,
         borderRadius: 10,
        backgroundColor: '#cfd0d1',
        position: "absolute",
        right: 0
    },
    profileview2:{
        height: 50,
        width: 50,
        borderRadius: 10,
    }
})