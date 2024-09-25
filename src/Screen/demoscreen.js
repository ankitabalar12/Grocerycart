import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import { icons } from '../Helper/icons'
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native'

const demoscreen = ({navigation}) => {
    const [isSaved, setIsSaved] = useState(false);
    const [savedImages, setSavedImages] = useState([]);
  
    const toggleSave = () => {
      setIsSaved(!isSaved);
    };
  
    const handleSavePress = () => {
      toggleSave();
      // Perform any save action here, such as saving the image URI to state
      if (!isSaved) {
        setSavedImages([...savedImages, icons.mastercardimg]); // Add the image URI to savedImages
      }
    };
  
    const handleViewSavedImages = () => {
        navigation.navigate('saveimge', { savedImages });
    };

    return (
        <View>
          <TouchableOpacity onPress={handleSavePress}>
      <View>
        <Image source={icons.mastercardimg} style={styles.caredstyle} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '20%' }}>
        <TouchableOpacity>
          <Image source={icons.heart} style={[styles.heart]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleViewSavedImages}>
          <Image source={icons.saveinstagram} style={[styles.heart]} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
        </View>
    )
}

export default demoscreen

const styles = StyleSheet.create({
    caredstyle: {
        height: 200, width: 300, alignSelf: "center"
    },
    heart: {
        height: 20, width: 20
    }
})