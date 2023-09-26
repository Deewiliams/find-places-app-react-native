import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../Shared/Colors";

export default function CategoryItem({ category }) {
  return (
    <View
      style={styles.center}
    >
      <Image style={styles.image} source={category.icon} />
      <Text style={styles.name}>{category.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
  name: {
    fontSize: 13,
    fontFamily: "raleway",
  },
  center: 
  {
    padding: 5,
    alignItems: "center",
    margin: 8,
    width: 100,
    height: 100, 
    backgroundColor:Colors.GRAY
  }
});
