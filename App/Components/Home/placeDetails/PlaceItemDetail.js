import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../../Shared/Colors";
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

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
      {place?.opening_hours ? (
        <Text>
          {place?.opening_hours?.open_now == true ? "(Open)" : "(Closed"}
        </Text>
      ) : null}

     <View style={{marginTop: 10, flexDirection:"row", display:"flex",gap:10}}>
     <View
        style={{
          direction: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
          backgroundColor:"gray",
          width:110,
          padding:3,
          borderRadius:40,
          justifyContent: "center"
        }}
      >
        <Ionicons name="navigate-circle-outline" size={20} color="black" />
        <Text style={{fontFamily: "raleway", fontSize: 16}}>
           Direction
        </Text>
      </View>
      <View
        style={{
          direction: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
          backgroundColor:"gray",
          width:110,
          padding:3,
          borderRadius:40,
          justifyContent: "center"
        }}
      >
        <Entypo name="share-alternative" size={20} color="black" />
        <Text style={{fontFamily: "raleway", fontSize: 16}}>
           Share
        </Text>
      </View>
     </View>
    </View>
  );
};

export default PlaceItemDetail;

const styles = StyleSheet.create({
  vicinity: {
    fontSize: 18,
    marginBottom: 5,
    color: "black",
    marginTop: 10,
  },
});
