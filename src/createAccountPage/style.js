import { StyleSheet } from "react-native";

export default StyleSheet.create({
    boxLogin:{
        height: "100%",
        width: "100%",
        backgroundColor: "#e0e5e5",
        paddingTop: 50,
        alignItems: "center",
    },
    
    textTitle:{
        margin: 30,
        fontWeight: "bold",
        fontSize: 24,
        color: "#0DAEE6",
    },

    boxMain:{
        flex: 1,
        width: "80%",
        marginBottom: 10,
        backgroundColor: "#fff",
        borderRadius: 50,
    },

    textLabel:{
        fontSize: 18,
    },

    boxUserData:{
        padding: 30,
    },
    
    input:{
        height: 50,
        borderColor: "#0DAEE6",
        borderBottomWidth: 2,
    },

    boxTouchableButton:{
        marginTop: 60,
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: "10%",
    },

    boxButton:{
        width: 100,
        height: 40,
        borderRadius: 50,
        backgroundColor: "#0DAEE6",
        justifyContent: "center",
        alignItems: "center",
    },

    button:{
        fontSize: 16,
        fontWeight: "bold",
        color: "#e0e5e5",
    },

    textError:{
        fontSize: 14,
        color: "red",
        paddingVertical: 5,
    },

    response:{
        color: "red",
        fontSize: 24,
        padding: 10,
        paddingLeft: 30,
    },
});