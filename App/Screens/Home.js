import { View, Text, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Header from "../Components/Home/Header";
import GoogleMapView from "../Components/Home/GoogleMapView";
import CategoryList from "../Components/Home/CategoryList";
import GlabalApi from "../Services/GlabalApi";
import PlaceList from "../Components/Home/PlaceList";
import { UserLocationContext } from "../Context/UserLocationcontext";

export default function Home() {
  const [placeList, setPlaceList] = useState([]);
  const {location, setSetLocation} = useContext(UserLocationContext)

  const GetNearByPlace = (value) => {
    console.log("valeu",value);
    GlabalApi.nearByPlace(location?.coords?.latitude,location?.coords?.longitude,value).then((response) => {
      setPlaceList(response.data.results);
      // console.log("response", response.data.results);
    });
  };

  useEffect(() => {
    GetNearByPlace("cafe");
  }, []);
  return (
    <ScrollView style={{ padding: 20 }}>
      <Header />
      <GoogleMapView />
      <CategoryList  setSelectedCategory={(value)=>GetNearByPlace(value)} />
      {placeList ? <PlaceList placeList={placeList} /> : null}
    </ScrollView>
  );
}
