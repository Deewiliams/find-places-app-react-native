import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import PlaceItemDetail from "./PlaceItemDetail";
import { View } from "react-native";
import GoogleMapView from "../GoogleMapView";

const PlaceDetails = () => {
  const param = useRoute().params;
  const [place, setPlace] = useState();
  useEffect(() => {
    setPlace(param.place);
  }, []);

  return (
    <View style={{padding:20,backgroundColor: "white", flex:1}}>
      <PlaceItemDetail place={place} />
      <GoogleMapView placeList={[place]} />
    </View>
  );
};

export default PlaceDetails;
