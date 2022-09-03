import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { Geojson, Circle, Marker, GeojsonProps } from "react-native-maps";
import React from "react";
import useBus from "../hooks/useBus";
import Dot from "../assets/person_icon.png";
import BusMarker from "../assets/bus_marker.png";
import * as Location from "expo-location";
import MapViewDirections from "react-native-maps-directions";
import { MAPS_API } from "./../util/constants";

const NearBy = ({ navigator }) => {
  const { busses } = useBus();
  const [destination, setDestination] = React.useState();
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
  }, [setMyLocation]);

  // React.useEffect(() => {
  //   setCoordinates([Number(location?.longitude) || 67.1154, Number(location?.latitude) || 24.9455]);
  // }, [location]);

  const handleMarkerClick = ({ latitude, longitude }) => {
    setDestination({
      latitude,
      longitude,
    });
  };

  React.useEffect(() => {
    setInterval(() => getLocation(), 1000);
  }, [getLocation]);

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
        <MapViewDirections
          origin={myLocation}
          destination={destination}
          apikey={MAPS_API}
          strokeWidth={4}
          strokeColor="#0096FF"
        />

        {busses.map(({ location: { latitude, longitude }, name }, i) => {
          return (
            <Marker
              key={i}
              onPress={() => handleMarkerClick({ latitude, longitude })}
              coordinate={{ latitude: Number(latitude), longitude: Number(longitude) }}
              title={name}
              description={`Location of ${name}`}
              image={BusMarker}
            />
          );
        })}
      </MapView>
    </View>
  );
};

export default NearBy;

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
