import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({onPress,contactusbutton,title,stylepaymentbutton}) => {
  return (
    <TouchableOpacity style={[styles.bottonstyle, contactusbutton,stylepaymentbutton]} onPress={onPress}>
      <Text style={styles.textstyle}>{title}</Text>
</TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  bottonstyle: {
    height: 50,
    width: "50%",
    backgroundColor: "#f39643",
    borderRadius:50, alignSelf:"center",
    marginTop:"15%", justifyContent:"center"
  },
  textstyle:{
    color:"#fff", 
    textAlign:"center",
    fontSize:15,
    fontFamily: 'Poppins-SemiBold',
  }
})