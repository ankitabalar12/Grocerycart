import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cantainer: {
      flex: 1,
  
    },
    fvoritestext: {
      color: "#f39643", fontSize: 20,
      alignSelf: "center",
      marginTop: "8%",
      fontFamily: 'Poppins-SemiBold',
      marginBottom: "8%"
    },
    mainview: {
      height: 80,
      width: "90%",
      borderRadius: 10,
      backgroundColor: "#fff",
      justifyContent: "center",
      alignSelf: "center",
      marginBottom:'5%',
  
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
  
    },
    favourtiesview: {
      height: 60, width: 60,
      backgroundColor: "#fff",
      marginLeft: "3%",
      borderRadius: 10,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    flexrowstyle: {
      flexDirection: "row"
    },
    textstyleitem: {
      color: "#000",
      marginLeft: "4%",
      fontSize: 15,
  
  
    },
    marleft: {
      marginLeft: "4%"
    },
    textstyleitem2: {
      color: "#f39643",
      marginLeft: "4%",
      fontSize: 15},
      addview:{
        height:30, width:60,
        borderColor:'#f39643',
        borderWidth:2,
        position:"absolute",
        right:10,
        justifyContent:"center",
        alignSelf:"center"
      },
      flexrowstyle2:{
        flexDirection:"row",
        alignSelf:"center"
      },
      addtext:{
        fontSize:15, color:'#000',
  
      },
      cauliflower:{
        height:50, width:50, alignSelf:"center"
      },
      plus:{
        height:10, width:10,
        alignSelf:"center", marginLeft:"4%"
      },
      margibottom:{
        marginBottom:"30%"
      },
      contactusbutton:{
        width:'65%',borderRadius:10
      }
  })