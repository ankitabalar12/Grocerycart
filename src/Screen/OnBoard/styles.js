import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    wrapper: {
      // backgroundColor:'red'
    },
    slide1: {
    alignSelf:"center",
     marginTop:"20%"
    },
    slide2: {
    alignSelf:"center",
    marginTop:"20%"
    },
    slide3: {
      alignSelf:"center", 
      marginTop:"35%"
    },
    img:{
      height:350, width:350,
      alignSelf:"center", 
    },
    img3:{
      height:250, 
      width:350 ,
      alignSelf:"center",  marginTop:'10%'
    },
    img2:{
      height:350, 
      width:450 , 
      // alignSelf:"center"
      marginRight:"20%"
    },
    textstyles:{
      color:'#000',
      textAlign:"center",
      fontSize:20,
      fontWeight:"bold",
      fontFamily: 'Poppins-SemiBold',
      marginTop:"10%"
      
    },
    loremtaxt:{
      marginHorizontal:"10%", textAlign:"center", marginTop:"3%", color:'#000'
    },
    loremtaxt2:{
      marginHorizontal:"25%", textAlign:"center"  ,marginTop:"3%",color:'#000'
    },
    dot: {
      backgroundColor: '#cccccc',
      width: 10,
      height: 10,
      borderRadius: 5,
      marginLeft: 3,
      marginRight: 3,
      marginTop: 3,
      marginBottom: 3,
    },
    activeDot: {
      backgroundColor: '#f39643',
      width: 10,
      height: 10,
      borderRadius: 5,
      marginLeft: 3,
      marginRight: 3,
      marginTop: 3,
      marginBottom: 3,
    },
    flrxrowtext:{
      flexDirection:'row',
       justifyContent:"space-between",
       marginHorizontal:"12%", marginTop:'35%'
      
    },
    flrxrowtext2:{
        marginHorizontal:"25%",
        marginTop:'30%'
       
    },
    // skipetext:{
    //   position:"absolute", bottom:-135, 
    // },
    // Nexttext:{
    //   position:"absolute", bottom:-135, 
    // },
    // skipetext2:{
    //     position:"absolute", bottom:-120, 
    // },
    // Nexttext2:{
    //     position:"absolute", bottom:-120, right:100
    //   },
    textstyleskip:{
      fontSize:18, 
      color:'#999999',
      fontFamily: 'Poppins-SemiBold',
  
    },
    textstylenext:{
      fontSize:18, 
      color:'#f39643',
      fontFamily: 'Poppins-SemiBold',
   
    }
  });