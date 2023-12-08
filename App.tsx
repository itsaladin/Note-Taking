import "react-native-gesture-handler";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import CustomNavigation from "./src/navigation";
import { persistor, store } from "./src/store/store";

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CustomNavigation />
      </PersistGate>
    </Provider>
  );
}

export default App;
