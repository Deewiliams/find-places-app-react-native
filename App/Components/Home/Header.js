import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View>
      <Image style={styles.logo} source={require("../../../assets/logo.png")} />
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
});
