import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AddNotes from './src/screens/AddNotes';
import ListNoteScreen from './src/screens/ListNoteScreen';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import noteSlice from './src/store/noteSlice';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View} from 'react-native';
import CustomNavigation from './src/navigation';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  const store = configureStore({
    reducer: {
      note: noteSlice,
    },
  });

  return (
    // <Provider store={store}>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     {/* <Stack.Screen name="ListNode" component={ListNoteScreen} /> */}
    //     <Stack.Screen name="AddNotes" component={AddNotes} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // </Provider>
    <Provider store={store}>
      <ListNoteScreen />
    </Provider>
  );
}

export default App;
