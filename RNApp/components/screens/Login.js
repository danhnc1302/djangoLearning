import React, { useContext, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native'
import { Context } from '../globalContext/globalContext'
import containers from '../styles/container'
import fonts from '../styles/fonts'
import input from '../styles/input'
import margin from '../styles/margin'
import { TouchableOpacity } from 'react-native-gesture-handler'
import button from '../styles/button'
import { useNavigation } from '@react-navigation/native'
const Login = () => {
  const globalContext = useContext(Context)
  const { isLoggedIn, appSettings, setIsLoggedIn } = globalContext
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [securePass, setSecurePass] = useState(true)
  const navigation = useNavigation()

  const handleLogin = () => {
    setIsLoggedIn(true)
    navigation.navigate("Home")
  }
  return (
    <View style={containers(appSettings).outerPage}>
      <View style={containers(appSettings).formBox}>
        <Text style={[fonts(appSettings).h1, margin.top30Percent]}>Login</Text>

        <Text style={[fonts(appSettings).inputLabel, margin.topTenPercent]} >Email Address</Text>
        <TextInput
          style={input(appSettings).textInput}
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
        />

        <Text style={[fonts(appSettings).inputLabel, margin.topTenPercent]}>Password</Text>
        <TextInput
          style={input(appSettings).textInput}
          placeholder='password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry={securePass}
        />

        <TouchableOpacity 
          style={[button(appSettings).login,{alignSelf: "center", marginTop: 10}]}
          onPress={handleLogin}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})