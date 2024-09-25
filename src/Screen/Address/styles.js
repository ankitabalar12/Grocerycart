import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cantainer: {
        flex: 1,
        backgroundColor: '#fff',
        
    },
    loction: {
        marginLeft: "7.5%",
        marginTop: "5%",
        color: '#8c8c8c'
    },
    flexviewrowtwo: {
        flexDirection: "row",
        marginHorizontal: "7%", marginTop: "2%"
    },
    circleview: {
        height: 20, width: 20,
        borderRadius: 20,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: "#3399ff",
        marginTop: "1.5%"
    },
    check: {
        height: 10,
        width: 10,
        alignSelf: "center",
        tintColor: '#3399ff'
    },
    input: {
        marginLeft: "3%", marginTop: -10
    },
    textchangesstyle: {
        color: "#f39643",
        fontFamily: 'Poppins-SemiBold',
        // marginTop:"3%"
    },
    postiontext: {
        position: "absolute",
        right: 20,
    },
    mainviewstyle: {
        height: 2, width: "85%",
        alignSelf: "center", backgroundColor: "#f39643",

    },
    styletop: {
        marginTop: "5%"
    },
    input2: {
        marginLeft: '7%'
    },
    mainviewstyle2: {
        marginBottom: '4%'
    },
    contactusbutton: {
        width: '85%', borderRadius: 10
    },
    erroetext: {
        fontSize: 14,
        color: 'red',
        marginTop: 4,
        alignSelf: 'flex-start',
        marginLeft: '9%'
      },
})