import React from "react";
import * as Location from "expo-location";
import MapViewDirections from "react-native-maps-directions";
import { MAPS_API } from "./../../util/constants";

const Directions = ({ destination }) => {
  const [myLocation, setMyLocation] = React.useState();

  const getLocation = React.useCallback(async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      return;
    }
    let {
      coords: { longitude, latitude },
    } = await Location.getCurrentPositionAsync({});
    setMyLocation({ longitude, latitude });
  }, []);

  // React.useEffect(() => {
  //   setInterval(() => getLocation(), 1000);
  // }, [getLocation]);

  React.useEffect(() => {
    getLocation();
  }, [destination]);

  return (
    <MapViewDirections
      origin={myLocation}
      destination={destination}
      apikey={MAPS_API}
      strokeWidth={4}
      mode="DRIVING"
      strokeColor="#0096FF"
    />
  );
};

export default Directions;
