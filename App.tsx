import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StateList from "./src/Components/StateList";
import ZipCodeList from "./src/Components/ZipCodeList";
import UpdateZipCode from "./src/Components/UpdateZipCode";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StateList">
        <Stack.Screen
          name="StateList"
          component={StateList}
          options={{ title: "States" }}
        />
        <Stack.Screen
          name="ZipCodeList"
          component={ZipCodeList}
          options={{ title: "Zip Codes" }}
        />
        <Stack.Screen
          name="UpdateZipCode"
          component={UpdateZipCode}
          options={{ title: "Update Zip Code" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
