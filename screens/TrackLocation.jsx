import { StyleSheet, View, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import React from "react";
import useBus from "../hooks/useBus";
import BusMarker from "../assets/bus_marker.png";

const TrackLocation = ({ navigator }) => {
  const { location, selectedName } = useBus();

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
        {/* <MapViewDirections
          origin={myLocation}
          destination={{ latitude: coordinates[1], longitude: coordinates[0] }}
          apikey={MAPS_API}
          strokeWidth={4}
          strokeColor="#0096FF"
        /> */}
        <Marker
          coordinate={{
            latitude: Number(location?.latitude) || 24.9455,
            longitude: Number(location?.longitude) || 67.1154,
          }}
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
