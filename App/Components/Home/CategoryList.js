import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import CategoryItem from "./CategoryItem";

export default function CategoryList() {
  const categoryList = [
    {
      id: 1,
      name: "Gas Station",
      value: "gas_station",
      icon: require("./../../../assets/gas.png"),
    },
    {
      id: 2,
      name: "Restuarants",
      value: "restuarants",
      icon: require("./../../../assets/food.png"),
    },
    {
      id: 3,
      name: "Cafe",
      value: "cafe",
      icon: require("./../../../assets/cafe.png"),
    },
  ];

  return (
    <View style={{ marginTop: 15 }}>
      <Text style={styles.title}>Select category</Text>
      <FlatList
        data={categoryList}
        horizontal={true}
        renderItem={({ item }) => (
          <View>
            <CategoryItem category={item} />
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: "raleway",
  },
});
