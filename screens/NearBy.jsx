import { StyleSheet, View, Dimensions } from "react-native";
import MapView from "react-native-maps";
import React from "react";
import Directions from "../src/components/Directions";
import AllBusesLocation from "../src/components/AllBusesLocation";

const NearBy = () => {
  const [destination, setDestination] = React.useState();

  const handleMarkerClick = ({ latitude, longitude }) => {
    if (latitude && longitude)
      setDestination({
        latitude: Number(latitude),
        longitude: Number(longitude),
      });
  };

  return (
    <View>
      <MapView
        showsCompass={true}
        showsUserLocation={true}
        showsTraffic={true}
        showsMyLocationButton={true}
        showsScale={true}
        loadingEnabled={true}
        style={styles.map}
        initialRegion={{
          latitude: 24.9455,
          longitude: 67.1154,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
      >
        {/* <Geojson geojson={myPlace} strokeColor="red" fillColor="green" strokeWidth={2} title={selectedName} /> */}
        <Directions destination={destination} />
        {/* <MapViewDirections
          origin={myLocation}
          destination={destination}
          apikey={MAPS_API}
          strokeWidth={4}
          strokeColor="#0096FF"
        /> */}
        <AllBusesLocation handleMarkerClick={handleMarkerClick} />
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
