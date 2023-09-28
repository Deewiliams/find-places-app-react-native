import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Marker } from "react-native-maps";
import React, { useContext, useEffect, useState } from "react";
import { UserLocationContext } from "../../Context/UserLocationcontext";
import PlaceMarker from "./PlaceMarker";

export default function GoogleMapView({ placeList }) {
  const [mapRegion, setmapRegion] = useState();
  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    if (location) {
      setmapRegion({
        latitude: location?.coords?.latitude,
        longitude: location?.coords?.longitude,
        latitudeDelta: 0.0522,
        longitudeDeltal: 0.0421,
      });
    }
  }, []);

  return (
    <View style={{ marginTop: 20, borderRadius: 20 }}>
      <View>
        <Text
          style={{
            fontSize: 20,
            marginBottom: 10,
            fontWeight: "600",
            fontFamily: "raleway-bold",
          }}
        >
          Top near by places
        </Text>
      </View>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        region={mapRegion}
      >
        <Marker title="you" coordinate={mapRegion} />
        {placeList.map((item, index) =>index<=5&& (
          <PlaceMarker item={item}  />
        ))}
      </MapView>
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
