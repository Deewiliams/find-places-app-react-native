import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView from "react-native-maps";
import React from "react";

export default function GoogleMapView() {
  return (
    <View>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("screen").width * 0.89,
    height: Dimensions.get("screen").height * 0.23,
  },
});
