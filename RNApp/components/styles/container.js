import React, {useContext} from "react";
import {
    StyleSheet,
    Dimensions
} from 'react-native'

const containers = (appSettings) => 
{
    return (
        StyleSheet.create({
            outerPage: {
                backgroundColor: ('backgroundColor' in appSettings) ? appSettings['backgroundColor'] : "#ffffff",
                color: ('foregroundColor' in appSettings) ? appSettings['foregroundColor'] : "#ffffff",
                width: Dimensions.get("screen").width,
                height: Dimensions.get("screen").height,
                justifyContent: 'center',
                alignItems: "center"
            },
            formBox: {
                width: "80%",
                height: "60%",
                backgroundColor: "#6e7c85",
                borderRadius: 20,
                padding: "4%",
            }
        })
        
    )
}


export default containers