import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Landing from '../screens/Landing'
import Login from '../screens/Login'
import Home from '../screens/Home'
import Register from '../screens/Register'

import { Context } from '../globalContext/globalContext'
const Stack = createStackNavigator()

const Navigator = () => {
  const globalContext = useContext(Context)
  const { isLoggedIn, userObj } = globalContext
  return (
    <Stack.Navigator>
      {
        (!isLoggedIn || !userObj) ? (
          <>
            <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
          </>
        ) : (
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        )
      }
    </Stack.Navigator>
  )
}

export default Navigator

const styles = StyleSheet.create({})