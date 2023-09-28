import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import PlaceItemDetail from "./PlaceItemDetail";

const PlaceDetails = () => {
  const param = useRoute().params;
  const [place, setPlace] = useState();
  useEffect(() => {
    setPlace(param.place);
    console.log("params", param.place);
  }, []);

  return <PlaceItemDetail place={place} />;
};

export default PlaceDetails;

