import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import CategoryItem from "./CategoryItem";

export default function CategoryList({ setSelectedCategory }) {
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
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedCategory(item.value)}>
            <CategoryItem category={item} />
          </TouchableOpacity>
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
