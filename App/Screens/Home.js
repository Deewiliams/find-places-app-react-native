import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../Components/Home/Header";
import GoogleMapView from "../Components/Home/GoogleMapView";
import CategoryList from "../Components/Home/CategoryList";
import GlabalApi from "../Services/GlabalApi";

export default function Home() {
  const [placeList, setPlaceList] = useState([]);

  const GetNearByPlace = () => {
    GlabalApi.nearByPlace().then((response) => {
      setPlaceList(response.data.results);
      // console.log("response", response.data.results);
    });
  };

  useEffect(() => {
    GetNearByPlace();
  }, []);
  return (
    <View style={{ padding: 20 }}>
      <Header />
      <GoogleMapView />
      <CategoryList />
    </View>
  );
}
