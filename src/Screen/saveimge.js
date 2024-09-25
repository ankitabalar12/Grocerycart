import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage';

const saveimge = ({route}) => {
  // const [savedImages, setSavedImages] = useState([]);
  const { savedImages } = route.params || { savedImages: [] };
  console.log('savedImages >> ', savedImages)
  

  return (
    <View>
     <View style={styles.container}>
     {savedImages.map((uri, index) => (
        <Image key={index} source={{ uri }} style={styles.image} />
      ))}
    </View>
    </View>
  )
}

export default saveimge

const styles = StyleSheet.create({
  image:{
    height:150,
     width:150
  }
})