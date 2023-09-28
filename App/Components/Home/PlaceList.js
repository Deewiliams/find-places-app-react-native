import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import PlaceItem from "./PlaceItem";
import PlaceItemBig from "./PlaceItemBig";
import { useNavigation } from "@react-navigation/native";

export default function PlaceList({ placeList }) {

  const navigator = useNavigation()
  const onPlaceClick = (item) => {
navigator.navigate("place-detail")
  }
  return (
    <View>
      <Text style={styles.tite}>Found {placeList.length} places</Text>

      <FlatList
        data={placeList}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => onPlaceClick(item)}>
            {index % 4 == 0 ? (
              <PlaceItemBig place={item} />
            ) : (
              <PlaceItem place={item} />
            )}
          </TouchableOpacity>
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
