import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { icons } from '../../Helper/icons';
import { useTheme } from '../../Componets/ThemeContext';

const Splash = () => {
    const navigation = useNavigation();
    const { theme, themeStyles, themeStylestext, updateThemeForAllScreens } = useTheme();
    useEffect(() => {
        const timeout = setTimeout(() => {
         navigation.navigate('OnBoard');
        }, 2000);
        return () => clearTimeout(timeout);
    }, [navigation]);
    return (
        <View style={[styles.cantainer, { backgroundColor: themeStyles[theme].backgroundColor }]}>
            <View style={styles.fleximgrow}>
                <Image source={icons.vegetable} style={styles.vegetable} />
                <Image source={icons.fruits} style={styles.vegetable} />
                <Image source={icons.foodpakag} style={styles.milk} />
                <Image source={icons.milk} style={[styles.milk2,styles.milk3]} />

                <Image source={icons.foodpakag} style={styles.milk} />
                <Image source={icons.milk} style={[styles.milk2,styles.milk3]} />
                <Image source={icons.fruits} style={styles.vegetable} />
                <Image source={icons.vegetable} style={styles.milk} />

                <Image source={icons.vegetable} style={styles.vegetable} />
                <Image source={icons.milk} style={[styles.milk2,styles.milk3]} />
                <Image source={icons.fruits} style={styles.milk} />
                <Image source={icons.foodpakag} style={styles.vegetable} />
            </View>
            <Image source={icons.foodLogo} style={styles.foodLogo} />
            <View style={[styles.fleximgrow, styles.fleximgrow2]}>

                <Image source={icons.foodpakag} style={styles.vegetable} />
                <Image source={icons.fruits} style={styles.vegetable} />
                <Image source={icons.milk} style={[styles.milk2,styles.milk3]} />
                <Image source={icons.vegetable} style={styles.milk} />

                <Image source={icons.vegetable} style={styles.milk} />
                <Image source={icons.milk} style={[styles.milk2,styles.milk3]} />
                <Image source={icons.fruits} style={styles.vegetable} />
                <Image source={icons.foodpakag} style={styles.milk} />

                <Image source={icons.foodpakag} style={styles.vegetable} />
                <Image source={icons.fruits} style={styles.milk} />
                <Image source={icons.milk} style={[styles.milk2,styles.milk3]} />
                <Image source={icons.vegetable} style={styles.vegetable} />

                <Image source={icons.vegetable} style={styles.vegetable} />
                <Image source={icons.fruits} style={styles.vegetable} />
                <Image source={icons.foodpakag} style={styles.milk} />
                <Image source={icons.milk} style={[styles.milk2,styles.milk3]} />

                <Image source={icons.foodpakag} style={styles.milk} />
                <Image source={icons.milk} style={[styles.vegetable,styles.milk3]} />
                <Image source={icons.fruits} style={styles.vegetable} />
                <Image source={icons.vegetable} style={styles.milk} />

                <Image source={icons.foodpakag} style={styles.vegetable} />
                <Image source={icons.fruits} style={styles.milk} />
                <Image source={icons.milk} style={[styles.milk2,styles.milk3]} />
                <Image source={icons.vegetable} style={styles.vegetable} />
            </View>
        </View>
    )
}

export default Splash
const styles = StyleSheet.create({
    cantainer: {
        flex: 1,
        backgroundColor: "#fff"
    },
    fleximgrow: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginHorizontal: "2%",
        justifyContent: "space-between",
    },
    vegetable: {
        height: 40,
        width: 40,
        margin: 20,
        tintColor: "#e9e72d"
    },
    milk: {
        height: 40,
        width: 40,
        margin: 20,
        tintColor: "#e85816"
    },
    milk2: {
        height: 40,
        width: 40,
        margin: 20,
        tintColor: "#e85816"
    },
    foodLogo: {
        alignSelf: "center",
        marginTop: '1%'
    },
    fleximgrow2: {
        marginTop: -20
    },
    milk3:{
        height:40,
        width:36
    }
})