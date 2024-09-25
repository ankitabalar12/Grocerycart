import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cantainer:{
      flex:1, 
      backgroundColor:"#fff"
    },
    nainview:{
      height:350,
       width:"90%", 
       alignSelf:"center",
       marginTop:"5%",
       borderRadius:5,
       backgroundColor:'#ffff',
       borderColor:"#CCCBCB",
       borderWidth:1,
       shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    },
    userimg:{
        width:'100%',
         height:200, 
         borderTopRightRadius:5,
         borderTopLeftRadius:5
    },
    specialtext:{
        color:'#000',
        fontSize:18,
        fontFamily: 'Poppins-SemiBold',
        marginLeft:"5%", marginTop:"2%"
    },
    limitedtet:{
        fontSize:15,
        color:"#404040",   
        marginLeft:"5%",
        fontFamily: 'Poppins-SemiBold',
    },
    loremipsumtext:{
        marginTop:"3%",
        marginLeft:"5%" , marginRight:"3%"  ,
        color:"#404040",  
    },
    dollertex:{
        marginLeft:"5%" ,  
        color:"#404040", 
        marginTop:5,
        fontSize:15,
    },
    marginbottom:{
        marginBottom:"40%"
    }
  })