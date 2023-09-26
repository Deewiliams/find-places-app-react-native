import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import React, { useState } from "react";

export default function GoogleMapView() {
  const [mapRegion, setmapRegion] = useState({
    latitude: 28.398297,
    longitude: -15.3653549,
    latitudeDelta: 0.0522,
    longitudeDeltal: 0.0421,
  });
  return (
    <View style={{ marginTop: 20, borderRadius: 20, overflow: "hidden" }}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        region={mapRegion}
      />
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
    borderRadius: 20,
  },
});
