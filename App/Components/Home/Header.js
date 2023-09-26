import { View, Text, Image, StyleSheet, TextInput, Dimensions } from "react-native";
import React from "react";
import Colors from "../../Shared/Colors";

export default function Header() {
  return (
    <View style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center"}}>
      <Image style={styles.logo} source={require("../../../assets/logo.png")} />
      <View>
        <TextInput placeholder="search" style={styles.searchBar} />
      </View>
      <Image
        style={styles.userImage}
        source={require("../../../assets/placeholder.jpg")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: Colors.black,
    padding: 4,
    borderRadius: 50,
    paddingLeft: 10,
    width:Dimensions.get('screen').width*0.6,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 100 
  },
});
