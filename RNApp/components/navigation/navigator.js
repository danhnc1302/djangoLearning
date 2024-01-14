import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Landing from '../screens/Landing'
const Stack = createStackNavigator()

const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default Navigator

const styles = StyleSheet.create({})