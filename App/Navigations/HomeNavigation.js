import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from "../Screens/Home";
import PlaceDetails from '../Components/Home/placeDetails/PlaceDetails';

const HomeNavigation = () => {
    const Stack = createStackNavigator()
  return (
    <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="place-detail" component={PlaceDetails} />
    </Stack.Navigator>
  )
}

export default HomeNavigation

const styles = StyleSheet.create({})