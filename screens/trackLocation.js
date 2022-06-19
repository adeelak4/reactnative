import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { Geojson, Circle, Marker } from "react-native-maps";
import React from "react";
import useBus from "../hooks/useBus";

const trackLocation = ({ navigator }) => {
  const { location, selectedName } = useBus();
  const [coordinates, setCoordinates] = React.useState([67.1154, 24.9455]);

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

  React.useEffect(() => {
    setCoordinates([Number(location?.longitude) || 67.1154, Number(location?.latitude) || 24.9455]);
  }, [location]);

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
      </MapView>
    </View>
  );
};

export default trackLocation;

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
