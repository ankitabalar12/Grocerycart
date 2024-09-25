import React, { useState, useEffect } from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity, View, StatusBar, Image } from 'react-native';
import ReactNativeModal from 'react-native-modal';
const AddModale = ({isVisible,title,colorfullview,backdropColor,
    backdropOpacity, onBackdropPress,
    onPress, 
    swipeDirection,
    modalestyle,
    IconName,
    IamgesName,
    yesview2,
    onPress2,
    noview,
    modalestyleaddoder,
   modalestyle1} ) => {
    return (
        <View>
            <ReactNativeModal
                isVisible={isVisible}
                onBackdropPress={onBackdropPress}
                backdropColor={backdropColor}
                backdropOpacity={backdropOpacity}
                onSwipeComplete={() => setModalVisible(false)}
                swipeDirection={swipeDirection}
                onRequestClose={() => {
                setModalVisible(false);
                
                }}
            >
                <View style={[styles.mainviewstyle,modalestyle,modalestyle1,modalestyleaddoder]}>
                   <View style={[styles.secondview,colorfullview]}>
                    <Text style={styles.textstyle}>{title}</Text>
                   </View>
                   <View style={styles.flexrowstyle}>
                    <TouchableOpacity onPress={onPress} style={[styles.yesview,yesview2]}>
                        <Image source={IconName} style={styles.iconstyles}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onPress2} style={[styles.yesview,noview]}>
                    <Image source={IamgesName} style={styles.Imagesstyles}></Image>
                    </TouchableOpacity>
                   </View>
                  </View>
            </ReactNativeModal>
        </View>
    )
}
const styles = StyleSheet.create({
   
    mainviewstyle:{
      height:'50%',
      width:'85%',
      borderRadius:10,
      backgroundColor:'#fff',
      alignSelf:'center'
     },
    
     textstyle:{
textAlign:'center', color:'#fff', fontSize:18
     },
     flexrowstyle:{
        flexDirection:"row", 
      justifyContent:'center',
     },
     Imagesstyles:{
        height:20,
         width:20,
         alignSelf:"center", tintColor:"#fff"
     },
     iconstyles:{
        height:20,
         width:20,
         alignSelf:"center", tintColor:"#fff"  
     }
    
});
export default AddModale;