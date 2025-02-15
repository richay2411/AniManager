import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import AddAnimalScreen from "../screens/AddAnimalScreen";
import EditAnimalScreen from "../screens/EditAnimalScreen";

const Stack = createStackNavigator();
const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddAnimal" component={AddAnimalScreen } />
      <Stack.Screen name="EditAnimal" component={EditAnimalScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
