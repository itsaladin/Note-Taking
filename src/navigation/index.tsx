import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AddNotesScreen from "../screens/AddNotes";
import ListNoteScreen from "../screens/ListNoteScreen";

const CustomNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AddNote">
        <Stack.Screen name="AddNote" component={AddNotesScreen} />
        <Stack.Screen name="ListNotes" component={ListNoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CustomNavigation;
