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
const Register = () => {
    const globalContext = useContext(Context)
    const { isLoggedIn, appSettings, setIsLoggedIn, setUserObj, setToken } = globalContext
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [securePass, setSecurePass] = useState(true)
    const navigation = useNavigation()

    function handleRegister() {
        setError("")
        let body = {
            "email": email.toLowerCase(),
            "username": email.toLowerCase(),
            "first_name": firstName,
            "last_name": lastName,
            "password": password
        }
        console.log(body)
        fetch("http://192.168.68.109:8000/api/v1.0/user/create-user/", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(res => {
                console.log(res)
                if (res.ok) {
                    return res.json()
                } else {
                    setError("User already exists!")
                    throw res.json()
                }
            })
            .then(json => {
                console.log(json.data.token)
                setUserObj(json)
                setToken(json.data.token)
                setIsLoggedIn(true)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <View style={containers(appSettings).outerPage}>
            <View style={containers(appSettings).formBox}>
                <Text style={fonts(appSettings).h1}>Register</Text>
                <Text style={fonts(appSettings).errorLabel}>{error}</Text>
                <Text style={[fonts(appSettings).inputLabel, margin.topTenPercent]} >First Name</Text>
                <TextInput
                    style={input(appSettings).textInput}
                    placeholder='First Name'
                    value={firstName}
                    onChangeText={setFirstName}
                />
                <Text style={[fonts(appSettings).inputLabel, margin.topTenPercent]} >Last Name</Text>
                <TextInput
                    style={input(appSettings).textInput}
                    placeholder='Last Name'
                    value={lastName}
                    onChangeText={setLastName}
                />
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
                    style={[button(appSettings).login, { alignSelf: "center", marginTop: 10 }]}
                    onPress={handleRegister}>
                    <Text>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({})