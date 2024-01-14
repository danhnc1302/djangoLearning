import React, {useContext} from 'react'
import { 
    StyleSheet, 
    Text, 
    View 
} from 'react-native'
import { Context } from '../globalContext/globalContext'

const Landing = () => {
    const globalContext = useContext(Context)
    const { isLoggedIn } = globalContext
  return (
    <View>
      <Text>Landing</Text>
      <Text>You are {(isLoggedIn)? '' : "Not "}logged in</Text>
    </View>
  )
}

export default Landing

const styles = StyleSheet.create({})