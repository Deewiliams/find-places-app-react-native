import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function PlaceList({ placeList }) {
  return (
    <View>
      <Text style={styles.tite}>Found {placeList.length} places</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tite: {
    fontSize: 20,
    fontFamily: "raleway-bold",
    marginTop: 10,
  },
});
