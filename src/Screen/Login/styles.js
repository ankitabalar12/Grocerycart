import { StyleSheet } from "react-native";
import { ThemeProvider } from "../../Componets/ThemeContext";
import { colors } from "../../Helper/colors";

export const styles = StyleSheet.create({
    cantainer:{
        flex:1,
         backgroundColor:'#fff'
    },
    foodloignimg:{
    alignSelf:"center",
    height:200,
     width:300, 
     marginTop:"20%", marginBottom:"5%"
    },
    styletop:{
      marginTop:"5%"  
    },
    forgotpasstext:{
        color:'#000',
         fontFamily: 'Poppins-SemiBold',
        marginTop:'2%', 
        textAlign:'right',
        marginRight:"7%"
    },
    ifyoutext:{
        fontSize:16,
        color:"#f39643",
        textAlign:"center", 
        marginTop:'5%',
        fontFamily: 'Poppins-SemiBold',
    },
    marginbottom:{
        marginBottom:'30%'
    },
    error:{
        marginLeft:"9%", 
        color:colors.red
    },
    erroetext: {
        fontSize: 14,
        color: 'red',
        marginTop: 4,
        alignSelf: 'flex-start',
        marginLeft: '9%'
      },
      iconstyle:{
        height:20, width:20,
        
    },
    iconpostionstyle:{
        position:"absolute",
        right:50, top:15
    },
    maniviewstyle: {
        height: 2, width: "85%",
        alignSelf: "center", backgroundColor: "#f39643",
    },
    input: {
        marginLeft: "8%",
     color:"#000"

    },
    flexrowstyle:{
     flexDirection:"row", marginTop:"5%"
    }
})