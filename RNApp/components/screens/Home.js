import { StyleSheet, Text, View } from 'react-native'
import React, {useContext }from 'react'
import containers from '../styles/container'
import fonts from '../styles/fonts'
import { Context } from '../globalContext/globalContext'
const Home = () => {
    const globalContext = useContext(Context)
    const { isLoggedIn, appSettings } =globalContext
  return (
    <View style={containers(appSettings).outerPage}>
    <Text style={fonts(appSettings).h1}>HELLO USER!</Text>
    <Text style={fonts(appSettings).p}>You are {(isLoggedIn)? '' : "Not "}logged in</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})