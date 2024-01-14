import React, { useState, useContext, createContext, useRef } from "react";

const Context = createContext()

const Provider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const globalContext = {
        isLoggedIn,
        setIsLoggedIn
    }

    return <Context.Provider value={globalContext}>{children}</Context.Provider>
}

export { Context, Provider }