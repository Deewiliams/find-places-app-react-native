import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import PlaceItemDetail from "./PlaceItemDetail";
import { Linking, Platform, Text, TouchableOpacity, View } from "react-native";
import GoogleMapView from "../GoogleMapView";
import { Touchable } from "react-native";

const PlaceDetails = () => {
  const param = useRoute().params;
  const [place, setPlace] = useState();
  useEffect(() => {
    setPlace(param.place);
  }, []);

  const onDirectionClick = () => {
   const url = Platform.select({
    ios:"maps:"+place.geometry.location.lat + "," + place.geometry.location.lng + "?q=" +  place.vicinity,
    android:"geo:"+place.geometry.location.lat + "," + place.geometry.location.lng + "?q=" +  place.vicinity
   })
   Linking.openURL(url)
  }

  return (
    <View style={{ padding: 20, backgroundColor: "white", flex: 1 }}>
      <PlaceItemDetail place={place} />
      <GoogleMapView placeList={[place]} />
      <TouchableOpacity
        style={{   
          backgroundColor: "black",
          padding: 15,
          alignContent: "center",
          alignItems: "center",
          margin: 8,
          borderRadius: 50,
        }}
        onPress={() => onDirectionClick()}
      >
        <Text style={{ fontFamily: "center", color: "white" }}>
          Get Direction on Google Map
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlaceDetails;
