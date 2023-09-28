import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";

const PlaceMarker = ({ item }) => {
  return (
    <Marker
      title={item.name}
      coordinate={{
        latitude: item.geometry.location.latitude,
        longitude: item.geometry.location.longitude,
        latitudeDelta: 0.0522,
        longitudeDeltal: 0.0421,
      }}
    />
  );
};

export default PlaceMarker;

const styles = StyleSheet.create({});
