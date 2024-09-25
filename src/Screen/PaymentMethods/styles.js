import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cantainer:{
        flex:1,
        backgroundColor:"#fff"
    },
    usetext:{
        fontSize:18,
        color:'#000',
        marginTop:"5%",
         marginLeft:"5%",
         fontFamily: 'Poppins-SemiBold',
    },
    paymentviewflexrow:{
        flexDirection:"row",
        flexWrap:'wrap',
    //   justifyContent:'center',
    justifyContent:"space-between",
         marginHorizontal:"5%"
    },
    paymentoption:{
        height:100,
         width:170,
         justifyContent:"center",
        
          backgroundColor:"#fff",
          borderRadius:20, marginTop:'5%',
          borderColor: "#cccccc",
          borderWidth: 1,
          shadowOffset: {
              width: 0,
              height: 1,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
},
img:{
    height:50, width:80,
    alignSelf:"center",

},
mastercaredtext:{
    fontSize:15, color:'#000', textAlign:"center",
    fontFamily: 'Poppins-SemiBold',
  
},
img2:{
    tintColor:"#8b94c2"  ,  
    height:50, width:80,
    alignSelf:"center",
},
img3:{
    tintColor:"#8b94c2"  ,  
    height:50,
     width:120,
    alignSelf:"center",   
},
addview:{
    height:40, width:40,
     backgroundColor:"#f39643",
     borderRadius:50,
      alignSelf:"center",
       justifyContent:'center'

},
img5:{
    height:20, width:20, tintColor:'#fff', alignSelf:'center'
},
caredstyle:{
    height:220, width:360, alignSelf:'center',
    marginTop:'6%'
},
marbottom:{
    marginBottom:"30%"
},
bottomview:{
    height:60, width:"100%", backgroundColor:"#f39643", 
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    justifyContent:"center"
},
chnagestext:{
    fontSize:17,
    textAlign:"center", 
    color:"#fff",
    fontFamily: 'Poppins-SemiBold',
}
})
