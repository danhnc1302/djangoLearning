import React, {useContext} from 'react'
import { 
    StyleSheet, 
    Text, 
    View 
} from 'react-native'
import { Context } from '../globalContext/globalContext'
import containers from '../styles/container'
import fonts from '../styles/fonts'

const Landing = () => {
    const globalContext = useContext(Context)
    const { isLoggedIn, appSettings } = globalContext

    console.log("Landing: ", )
  return (
    <View style={containers(appSettings).outerPage}>
      <Text style={fonts(appSettings).h1}>Landing</Text>
      <Text style={fonts(appSettings).p}>You are {(isLoggedIn)? '' : "Not "}logged in</Text>
    </View>
  )
}

export default Landing

const styles = StyleSheet.create({})