import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cantainer: {
        flex: 1, backgroundColor: '#fff'
    },
    hamburger: {
        height: 30, width: 30,
        marginTop: "5%", marginLeft: "5%",
        tintColor: "#f39643",
        marginBottom: "6%"
    },
    mainviewstyle: {
        height: 100,
        width: "100%",
        backgroundColor: "#e6e6e6", justifyContent: "center"
    },
    flexviewstyles: {
        flexDirection: "row",
        justifyContent: 'space-between', marginHorizontal: "5%", marginTop: "5%"
    },
    checkview: {
        height: 25, width: 25, borderRadius: 30,
        backgroundColor: "#f39643", justifyContent: "center"
    },
    ckeckstyle: {
        height: 15, width: 15, tintColor: "#fff",
        alignSelf: "center"
    },
    itemlisttext: {
        color: "#000",
        fontSize: 16,
        marginLeft: "5%",

    },
    orederstyle: {
        marginTop: "2%",
        marginLeft: "5%", marginBottom: "2%"
    },
    flexroestyles: {
        flexDirection: "row", marginLeft: "5%"
    },
    rupessstyles: {
        color: "#f39643", fontSize: 20, marginRight: 5
    },
    numberstyle: {
        color: '#000', fontSize: 17
    },
    mainviewinhedth: {
        height: 2,
        width: "100%",
        backgroundColor: "#f39643", marginTop: "2%"
    },
    marginbotom: {
        marginBottom: "30%"
    },
    addreviewflex: {
        flexDirection: "row",

    },
    addviewreviewbutton: {
        height: 30,
        width: 90,
        borderRadius: 50,
        backgroundColor: "#f39643",
        position: "absolute",
        right: 20, justifyContent: "center"
    },
    revireaddtext: {
        fontSize: 15,
        color: "#fff",
        fontFamily: 'Poppins-SemiBold',
        textAlign: "center"
    },
    mainviewmodal:{
        height:'100%',
         width:"100%",
        //  borderRadius:10,
         backgroundColor:"#f39643",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // This is for Android, 
        alignSelf:"center"
      },
  
    buttonview: {
        height: 40,
        width: 200,
        backgroundColor: '#f39643',
        borderRadius: 20,
        marginTop: "10%",
        alignSelf: 'center', justifyContent:"center"
    },
    backArrow:{
         height:20,
        width:20, 
        marginTop:"25%", tintColor:'#fff'
    },
    flwxrowsdf:{
        flexDirection:"row",
        marginTop:"5%", 
         marginLeft:"5%"
    },
    title2:{
         marginLeft:"5%", 
          textAlign:"center",
         fontSize:19 ,
         color:"#fff",
         fontFamily: 'Poppins-SemiBold',
    },
    selectedStar:{
        height:30 , width:30 , 
        tintColor:"#fff"
      },
      startwo:{
        height:30 , width:30 
      },
      starflexwrow:{
        flexDirection:"row", 
         alignSelf:"center",
    marginTop:"5%"
    },
    flexrwowfdds:{
        flexDirection:"row", alignSelf:"center", marginTop:"10%"
      },
      rattext:{
        fontSize:20, color:"#fff"
      },
      selecnumber:{
        fontSize:30,
        fontFamily: 'Poppins-SemiBold',
        color:"#fff",
         textAlign:"center",
         marginTop:-5
    
      },
      starnumver:{
        fontSize:18, 
        marginTop:'1%', fontFamily: 'Poppins-SemiBold',
        color:"#fff",
      },
      input:{
        marginLeft:"5%", 
        color:"#fff", marginTop:'10%'
      },
      buttomviewhe:{
        height:2, width:"90%",
         backgroundColor:"#4d4d4d",
          marginTop:"15%",
           alignSelf:"center"
      },
      buttomviewhe:{
        height:2, width:"90%",
         backgroundColor:"#4d4d4d", marginTop:"15%", alignSelf:"center"
      },
      sbmitview:{
        height:40, width:"90%", borderRadius:20,
        backgroundColor:"#fff", 
        marginTop:"10%", alignSelf:"center", justifyContent:"center"
      },
      submitview:{
        textAlign:"center",
         fontSize:15,
        color:"#f39643",
        fontFamily: 'Poppins-SemiBold',
      }
})