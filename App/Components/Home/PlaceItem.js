import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../Shared/Colors";

export default function PlaceItem({ place }) {
  return (
    <View style={styles.arrange}>
      <Image
        style={styles.image}
        source={{
          uri:
            "https://maps.googleapis.com/maps/api/place/photo" +
            "?maxwidth=400" +
            "&photo_reference=" + 
            place?.photos[0]?.photo_reference +
            "&key=AIzaSyBadLZxZ3YM8lxQctCq9uhvYCmYBfnk7rY",
        }}
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.name} numberOfLines={2}>
          {place.name}
        </Text>
        <Text style={styles.vicinity} numberOfLines={2}>
          {place.vicinity}
        </Text>
        <View style={styles.rating}>
          <AntDesign name="star" size={20} color={Colors.YELLOW} />
          <Text>{place.rating}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    borderRadius: 15,
  },
  name: {
    fontSize: 20,
    fontFamily: "raleway-bold",
    marginBottom: 10,
  },
  vicinity: {
    fontSize: 18,
    marginBottom: 5,
  },
  arrange: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    width: "100%",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
    marginTop: 2,
  },
  rating: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
});
