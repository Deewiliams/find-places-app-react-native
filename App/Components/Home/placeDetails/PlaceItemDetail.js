import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../../Shared/Colors";

const PlaceItemDetail = ({ place }) => {
  return (
    <View>
      <Text>{place?.name}</Text>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          marginTop: 5,
          flexDirection: "row",
        }}
      >
        <AntDesign name="star" size={20} color={Colors.YELLOW} />
        <Text>{place?.rating}</Text>
      </View>
      {place?.photos ? (
        <Image
          source={{
            uri:
              "https://maps.googleapis.com/maps/api/place/photo" +
              "?maxwidth=400" +
              "&photo_reference=" +
              place?.photos[0]?.photo_reference +
              "&key=AIzaSyBadLZxZ3YM8lxQctCq9uhvYCmYBfnk7rY",
          }}
          style={{
            width: "100%",
            height: 160,
            borderRadius: 15,
            marginTop: 10,
          }}
        />
      ) : null}

      <Text style={styles.vicinity} numberOfLines={2}>
        {place?.vicinity}
      </Text>
    </View>
  );
};

export default PlaceItemDetail;

const styles = StyleSheet.create({
  vicinity: {
    fontSize: 18,
    marginBottom: 5,
    color: "black",
    marginTop: 10
  },
});
