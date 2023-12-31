import { NavigationContainer } from "@react-navigation/native";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,SafeAreaView } from "react-native";
import TabNavigation from "./App/Navigations/TabNavigation";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { useFonts } from 'expo-font';
import { UserLocationContext } from "./App/Context/UserLocationcontext";

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [fontsLoaded] = useFonts({
    'raleway': require('./assets/Fonts/Raleway-Regular.ttf'),
    'raleway-bold': require('./assets/Fonts/Raleway-SemiBold.ttf'),
  });
 
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log("app location", location.coords.latitude);
     
    })();
  }, []); 

  return (
    <SafeAreaView style={styles.container}>
      <UserLocationContext.Provider value={{ location, setLocation }}>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </UserLocationContext.Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
