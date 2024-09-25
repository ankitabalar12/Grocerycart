import { Image, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ReactNativeModal from 'react-native-modal'
import { icons } from '../../Helper/icons'
import { string } from '../../Helper/string'
import { useTheme } from '../ThemeContext'

const CustomModal = ({ onPress, isVisible, backdropColor,
    onBackdropPress, onPress2, navigation, onPress3, onPress4,
    swipeDirection, onPress6, onPress5

}) => {
    const { theme, themeStyles, themeStylestext, updateThemeForAllScreens } = useTheme();
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>
            <ReactNativeModal
                isVisible={isVisible}
                onBackdropPress={onBackdropPress}
                backdropColor={backdropColor}
                backdropOpacity={0.2}
                onSwipeComplete={() => setModalVisible(false)}
                swipeDirection={swipeDirection}
                onRequestClose={() => {
                    setModalVisible(false);

                }}
                animationIn="slideInLeft"
                animationOut="slideOutLeft"
                style={{ justifyContent: 'flex-end', margin: 0, bottom: 0 }}
            >
                <View style={[styles.mainvew, { backgroundColor: themeStyles[theme].backgroundColor }]}>
                    {/* <TouchableOpacity onPress={onPress5}>
                <Image source={icons.hamburger} style={[styles.hamburger]} />
                </TouchableOpacity> */}
                    <View style={styles.profilemainview}>
                        <View style={styles.flexrow}>
                            <TouchableOpacity onPress={onPress} style={styles.profileview}>
                                <Image source={icons.foodprofileimg} style={styles.profileview2} />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.nametext}>Ketan Kushwah</Text>
                                <Text style={styles.nametext2}>Student</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={onPress5} style={styles.flxrowsecond}>
                        <Text style={[styles.protext, { color: themeStyles[theme].textColor }]}>{string.home}</Text>
                        <Image source={icons.grayhome} style={[styles.userimg, { tintColor: themeStyles[theme].iconColor }]} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onPress} style={styles.flxrowsecond}>
                        <Text style={[styles.protext, { color: themeStyles[theme].textColor }]}>{string.Profiles}</Text>
                        <Image source={icons.user} style={[styles.userimg, { tintColor: themeStyles[theme].iconColor }]} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onPress4} style={styles.flxrowsecond}>
                        <Text style={[styles.protext, { color: themeStyles[theme].textColor }]}>{string.order}</Text>
                        <Image source={icons.trolly} style={[styles.trolly, { tintColor: themeStyles[theme].iconColor }]} />
                    </TouchableOpacity >
                    <TouchableOpacity onPress={onPress2} style={styles.flxrowsecond} >
                        <Text style={[styles.protext, { color: themeStyles[theme].textColor }]}>{string.contactus}</Text>
                        <Image source={icons.phonecall} style={[styles.userimg, { tintColor: themeStyles[theme].iconColor }]} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.flxrowsecond}>
                        <Text style={[styles.protext, { color: themeStyles[theme].textColor }]}>{string.shar}</Text>
                        <Image source={icons.share} style={[styles.userimg, { tintColor: themeStyles[theme].iconColor }]} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onPress3} style={styles.flxrowsecond}>
                        <Text style={[styles.protext, { color: themeStyles[theme].textColor }]}>{string.LogOut}</Text>
                        <Image source={icons.logout} style={styles.logout} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onPress6} style={styles.flxrowsecond}>
                        <Text style={[styles.protext, { color: themeStyles[theme].textColor }]}>{string.InFormatiom}</Text>
                        <Image source={icons.privacypolicy} style={[styles.logout, { tintColor: themeStyles[theme].iconColor }]} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.flxrowsecond}>
                        <Text style={[styles.protext, { color: themeStyles[theme].textColor }]}>{string.DarkThume}</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#d1d9fa" }}
                            thumbColor={theme === 'dark' ? "#1536c0" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => updateThemeForAllScreens(theme === 'light' ? 'dark' : 'light')}
                            value={theme === 'dark'}
                        />
                    </TouchableOpacity>

                </View>
            </ReactNativeModal>
        </View>
    )
}

export default CustomModal

const styles = StyleSheet.create({
    mainvew: {
        height: '100%',
        width: 250,
        backgroundColor: "#f2f2f2",
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderColor: "#CCCBCB",
        borderWidth: 1,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    profilemainview: {
        height: 80,
        width: "100%",
        backgroundColor: "#fff",
        marginTop: "20%",
        justifyContent: "center",
    },
    flexrow: {
        flexDirection: "row"
    },
    profileview: {
        height: 50,
        width: 50,
        borderRadius: 10,
        backgroundColor: '#cfd0d1',
        marginLeft: "9%"

    },
    profileview2: {
        height: 50,
        width: 50,
        borderRadius: 10,
    },
    nametext: {
        color: '#000',
        fontSize: 15,
        fontFamily: 'Poppins-SemiBold',
        marginLeft: '6%'

    },
    nametext2: {
        fontSize: 15,
        // fontFamily: 'Poppins-SemiBold',
        marginLeft: '6%'
    },
    flxrowsecond: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: "10%", marginTop: "8%"
    },
    protext: {
        color: '#000',
        fontSize: 17,
        fontFamily: 'Poppins-SemiBold',

    },
    userimg: {
        height: 20, width: 20
    },
    trolly: {
        height: 30, width: 30
    },
    logout: {
        height: 25, width: 25
    },
    hamburger: {
        height: 30, width: 30,
        marginTop: "5%",
        marginLeft: "5%"
    }
})