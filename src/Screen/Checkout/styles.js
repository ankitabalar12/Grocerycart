import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
flex:1, backgroundColor:"#fff"
    },
    flexrowview: {
        flexDirection: 'row',
        marginTop: "5%",
        marginHorizontal: "5%",
        //  alignSelf:"center"
    },
    mainviewstyle: {
        height: 100,
        width: "100%",
        backgroundColor: "#f2f2f2",
         justifyContent: "center",
         shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
       
    },
    hamburger: {
        height: 25,
        width: 25,
        tintColor: "#f39643", 
         marginTop:"20%"
    },
    contactustext: {
        fontSize: 20,
        color: "#f39643",
        textAlign: "center",
        fontFamily: 'Poppins-SemiBold',
        marginLeft: "27%"
    },
    flexrowdraction:{
        flexDirection:"row", marginTop:"20%" , alignSelf:"center"
    },
    pinimg:{
        height: 25,
        width: 25, 
        tintColor:"#37A4E0"  
    },
    dotstyle:{
        fontSize:40,
        marginTop:-25, color:"#37A4E0"

    },
    dotstyle2:{
        fontSize:40,
        marginTop:-25, color:"#bfbfbf"
  
    },
    pinimg2:{
        height: 20,
        width: 20, 
        tintColor:"#bfbfbf"     
    },
    cardimg:{
        height:210,
         width:280,
        marginTop:"15%",
        justifyContent:'center',
        alignSelf:"center"

    },
    cardimg2:{
        height:180,
        width:280,
       marginTop:"15%",
       justifyContent:'center',
       alignSelf:"center"
    },
    cardimg3:{
        height:180,
        width:290,
       marginTop:"15%",
       justifyContent:'center',
       alignSelf:"center"
    },
    textorstyle:{
        fontSize:16, 
        textAlign:'center',
        fontFamily: 'Poppins-SemiBold',
        color:'#a6a6a6', marginTop:'5%'


    },
    paypal:{
        height:30,
        width:'30%',
         alignSelf:"center",
          marginTop:"8%"
    },
    flexrowviewstyles:{
        flexDirection:'row',
        alignSelf:'center',
        marginTop:"8%"
    },
    applelogo:{
        height:25, width:25
    },
    paytext:{
        color:'#000',
        fontFamily: 'Poppins-SemiBold',
        fontSize:19, marginLeft:3
    },
    stylepaymentbutton:{
        width:'90%'
    },
    mainviewmodal:{
        height:400, 
        width:"100%", 
        backgroundColor:"#fff",
         position:"absolute",
          bottom:0, borderTopLeftRadius:50, 
          borderTopRightRadius:50
    },
    thankstextstyle:{
        fontSize:40,
        alignSelf:"center",
        fontFamily: 'Poppins-SemiBold',
        marginTop:'25%',
        color:"#fff"
        
    },
    modalVisibleBackground:{
        backgroundColor:'#f39643'
    },
    modalVisibleimg:{
tintColor:'#FFF'
    },
    modalVisibletext:{
        color:'#fff'
    },
    checkview:{
        height:80, width:80,
        backgroundColor:"#f39643",
        justifyContent:'center',
        alignSelf:"center",
        marginTop:"10%", borderRadius:50
    },
    checkimg:{
        height:40, width:40,
    tintColor:'#fff', alignSelf:"center"
    },
    purcahingtext:{
        textAlign:"center",
        marginTop:'4%',
        fontFamily: 'Poppins-SemiBold',
        fontSize:20,
        color:'#f39643'

    },
    yourordertext:{
        textAlign:"center",
        marginHorizontal:"20%",
        fontSize:15,
        fontFamily: 'Poppins-SemiBold',
        marginTop:'3%'
    }
})