import React from "react";
import {
  View
} from "react-native"
import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native";
import { Context, Provider } from "./components/globalContext/globalContext";
import Navigator from "./components/navigation/navigator";
export default function App() {
  return (
    <Provider>
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <Navigator/>
        </NavigationContainer>
      </View> 
    </Provider>
  )
}