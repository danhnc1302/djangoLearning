import React, {useContext} from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity 
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Context } from '../globalContext/globalContext'
import containers from '../styles/container'
import fonts from '../styles/fonts'
import button from '../styles/button'

const Landing = () => {
    const globalContext = useContext(Context)
    const { isLoggedIn, appSettings } = globalContext
    const navigation = useNavigation()
  return (
    <View style={containers(appSettings).outerPage}>
      <Text style={fonts(appSettings).h1}>Landing</Text>
      <Text style={fonts(appSettings).p}>You are {(isLoggedIn)? '' : "Not "}logged in</Text>
      <TouchableOpacity 
        onPress={() => navigation.navigate("Login")}
        style={button(appSettings).login}>
            <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Landing

const styles = StyleSheet.create({})