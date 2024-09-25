import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cantainer: {
        flex: 1,
        backgroundColor: "#fff"
    },
    flexrowview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: "10%", marginHorizontal: "10%"
    },
    mainviewprofile: {
        height: 100,
        width: 100,
        borderRadius: 10,
        backgroundColor: "#e6e6e6",
        justifyContent: "center",
        alignSelf: "center"
    },
    editview: {
        height: 30, width: 70,
        backgroundColor: "#f39643",
        borderRadius: 30,
        right: 50,
        marginTop: "7%", justifyContent: "center",

    },
    contactstyle:{
        marginTop:'8%'
      },
    editetxt: {
        color: '#fff',
        fontSize: 17,
        fontFamily: 'Poppins-SemiBold',
        alignSelf: "center"

    },
    contactusbutton:{
        width:'85%',borderRadius:10
      },
      marginbottom:{
        marginBottom:'40%'
      },
      erroetext: {
        fontSize: 14,
        color: 'red',
        marginTop: 4,
        alignSelf: 'flex-start',
        marginLeft: '9%'
      },
})