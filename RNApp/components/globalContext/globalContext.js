import React, { useState, useContext, createContext, useRef, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Context = createContext()

const Provider = ({ children }) => {

    const [domain, setDomain] = useState("http://192.168.68.109:8000")
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userObj, setUserObj] = useState()
    const [appSettings, setAppSettings] = useState({})

    function initAppSettings() {
        fetch(`${domain}/api/v1.0/app/settings`, {
            method: "GET"
        })
        .then(res => {
            if(res.ok) return res.json()
            else throw res.json()
        })
        .then(json => {
            setAppSettings(json)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const setToken = async (token) => {
        await AsyncStorage.setItem("token", token)
    }

    useEffect(()=> {
        initAppSettings()
    },[])
    console.log(appSettings)
    const globalContext = {
        appSettings,
        setAppSettings,
        domain,
        isLoggedIn,
        setIsLoggedIn,
        userObj,
        setUserObj,
        setToken
    }

    return <Context.Provider value={globalContext}>{children}</Context.Provider>
}

export { Context, Provider }