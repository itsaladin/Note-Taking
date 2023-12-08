import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View} from 'react-native';
import noteSlice from '../store/noteSlice';
import AddNotesScreen from '../screens/AddNotes';
import ListNoteScreen from '../screens/ListNoteScreen';

const CustomNavigation = () => {
  const Stack = createNativeStackNavigator();

  const store = configureStore({
    reducer: {
      note: noteSlice,
    },
  });
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AddNote">
        <Stack.Screen name="AddNote" component={AddNotesScreen} />
        <Stack.Screen name="Screen2" component={ListNoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CustomNavigation;
