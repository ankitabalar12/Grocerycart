import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cantainer: {
    flex: 1,
    backgroundColor: '#fff',
    
},
    flexrowview:{
        flexDirection:'row', 
        marginTop:"5%",
         marginHorizontal:"5%",
        //  alignSelf:"center"
    },
    hamburger:{
        height:30,
        width:30,
        tintColor:"#f39643"
    },
    contactustext:{
        fontSize:20,
        color:"#000",
        textAlign:"center",
        fontFamily: 'Poppins-SemiBold', 
        marginLeft:"25%"
    },
    erroetext: {
        fontSize: 14,
        color: 'red',
        marginTop: 4,
        alignSelf: 'flex-start',
        marginLeft: '9%'
      },
      contactstyle:{
        marginTop:'8%'
      },
      contactusbutton:{
        width:'85%',borderRadius:10
      }
})
