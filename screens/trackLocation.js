import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { Geojson, Circle, Marker, GeojsonProps } from "react-native-maps";
import React from "react";
import useBus from "../hooks/useBus";
import Dot from "../assets/person_icon.png";
import BusMarker from "../assets/bus_marker.png";
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
        showsCompass={true}
        showsUserLocation={true}
        showsTraffic={true}
        showsMyLocationButton={true}
        showsScale={true}
        style={styles.map}
        initialRegion={{
          latitude: 24.9455,
          longitude: 67.1154,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
      >
        {/* <Geojson geojson={myPlace} strokeColor="red" fillColor="green" strokeWidth={2} title={selectedName} /> */}
        <Marker
          coordinate={{ latitude: coordinates[1], longitude: coordinates[0] }}
          title={selectedName}
          description={`Location of ${selectedName}`}
          image={BusMarker}
        />
        {/* <Marker
          coordinate={{ latitude: myLocation[1], longitude: myLocation[0] }}
          title={"Me"}
          description={"Your Location"}
          image={Dot}
        /> */}
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
