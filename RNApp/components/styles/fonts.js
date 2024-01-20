import React from "react";
import {
    StyleSheet, Dimensions
} from 'react-native'

const fonts = (appSettings) => StyleSheet.create({
    h1: {
        color: ("foregroundColor" in appSettings) ? appSettings["foregroundColor"] : "#000000",
        fontSize: 34,
        fontWeight: "bold",
        textAlign: "center",
        width: "100%"
    },
    p: {
        color: ("foregroundColor" in appSettings) ? appSettings["foregroundColor"] : "#000000",
        fontSize: 12,
        width: "100%",
        textAlign: "center",
    },
    inputLabel: {
        color: "white",
        fontSize: 16
    },
    errorLabel: {
        width: "100%",
        textAlign: "center",
        color: "white"
    }
})

export default fonts