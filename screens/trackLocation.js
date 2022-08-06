import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { Geojson, Circle, Marker } from "react-native-maps";
import React from "react";
import useBus from "../hooks/useBus";
import Dot from "../assets/dot.png";
import * as Location from "expo-location";

const TrackLocation = ({ navigator }) => {
  const { location, selectedName } = useBus();
  const [coordinates, setCoordinates] = React.useState([67.1154, 24.9455]);
  const [myLocation, setMyLocation] = React.useState([1, 1]);

  const myPlace = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Point",
          coordinates: coordinates,
        },
      },
    ],
  };

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setMyLocation([location.coords.longitude, location.coords.latitude]);
  };

  React.useEffect(() => {
    setCoordinates([Number(location?.longitude) || 67.1154, Number(location?.latitude) || 24.9455]);
  }, [location]);

  React.useEffect(() => {
    setInterval(() => getLocation(), 1000);
  }, []);

  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 24.9455,
          longitude: 67.1154,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
      >
        <Geojson geojson={myPlace} strokeColor="red" fillColor="green" strokeWidth={2} title={selectedName} />
        <Marker
          coordinate={{ latitude: myLocation[1], longitude: myLocation[0] }}
          title={"title"}
          description={"Des"}
          image={Dot}
        />
      </MapView>
    </View>
  );
};

export default TrackLocation;

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
