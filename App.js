import { StatusBar } from 'expo-status-bar';
import { AppRegistry} from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import Dashboard from './Dashboard';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Location from 'expo-location';
import React, { useState, useEffect } from 'react';
import { GlobalContext } from './GlobalContext';

export default function App() {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [user, setUser] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const globalObj = {profile: [[user, setUser], [email, setEmail], [password, setPassword]]}
  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  
  return (
    <GlobalContext.Provider value={globalObj}>
    <SafeAreaProvider>
    <PaperProvider>
        <Dashboard/>
      <StatusBar style="auto" />
    </PaperProvider>
    </SafeAreaProvider>
    </GlobalContext.Provider>
  );
}
AppRegistry.registerComponent(appName, () => Main);
