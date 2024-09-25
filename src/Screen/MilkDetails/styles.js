import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cantainer:{
        flex:1,
        backgroundColor:"#fff"
    },
    cauliflower:{
        height:200, width:280,
        alignSelf:"center", marginTop:"10%"
    },
    mainview:{
        height:"100%",
        width:"100%",
         backgroundColor:"#fff",
          marginTop:"10%",
           borderTopLeftRadius:50,
          borderTopRightRadius:50,
          borderColor: "#fff",
          borderWidth: 1,
          shadowOffset: {
              width: 0,
              height: 1,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
    },
    textstyle:{
        color:"#000",
        fontSize:20,
        fontFamily: 'Poppins-SemiBold',
        marginTop:'8%', marginLeft:"5%"
},
flexrowview:{
    flexDirection:"row",
    marginHorizontal:"5%"
},
rupeestewxt:{
    color:"#e7e520", fontSize:35,
    fontFamily: 'Poppins-SemiBold',
},
pricestext:{
    fontSize:25,
    color:"#e7e520",
     marginTop:"2%", marginLeft:"2%",
     fontFamily: 'Poppins-SemiBold',
},
morethenview:{
    height:40, width:40,
    borderRadius:50,
   position:"absolute",
    right:0, borderColor:"#e7e520",
    borderWidth:2,
    justifyContent:"center"
},
lessthenview:{
    justifyContent:'center',
        height:40, width:40,
        borderRadius:50,
       position:"absolute",
        right:120, borderColor:"#bab9b5",
        borderWidth:2   
},
countitem:{
    position:"absolute",
        right:65, 
         color:"#e7e520",
         fontSize:25,
         fontFamily: 'Poppins-SemiBold',
        
},
plus:{
    height:20,
     width:20,
      alignSelf:"center",
      tintColor:"#e7e520"
},
minus:{
    height:20,
    width:20,
     alignSelf:"center",
     tintColor:"#bab9b5"   
},
pcstext:{
    fontSize:16,
    color:"#bab9b5",
    marginLeft:'4%', fontWeight:"500"
},
detailstext:{
    marginTop:"10%",
    marginLeft:"5%",
    color:"#000",
    fontWeight:"500",
    fontSize:19,
    },
    datailsinfom:{
        marginHorizontal:"5%", marginTop:'4%'
    },
    flexrowtwo:{
        flexDirection:"row"
    },
    readmoretext:{
        color:"#ff0000"
    },
    readmorepostiontexxt:{
        position:"absolute",
        bottom:0,
        right:20
    },
    flexrowviewthree:{
        flexDirection:"row",
         marginHorizontal:"20%", 
         alignSelf:"center",
         marginTop:"10%"
        
    },
    trolly:{
        height:70,
         width:70,
         tintColor:"#e7e520",
         marginTop:'4%'
    },
    buttonviewc:{
        height:50, 
        width:200,
        backgroundColor:"#e7e520",
        borderRadius:10, 
        marginTop:'7%', 
        marginLeft:'25%',
        justifyContent:"center"
    },
    addtotext:{
        color:'#fff',
        textAlign:"center",
        fontSize:20,
        fontFamily: 'Poppins-SemiBold',

    },
    martopmargin:{
        marginBottom:"20%"
    }
})