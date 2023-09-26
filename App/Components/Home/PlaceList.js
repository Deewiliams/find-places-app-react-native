import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import PlaceItem from "./PlaceItem";

export default function PlaceList({ placeList }) {
  return (
    <View>
      <Text style={styles.tite}>Found {placeList.length} places</Text>

      <FlatList
        data={placeList}
        renderItem={({ item }) => (
         <PlaceItem place={item} />
        )}
      />
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
