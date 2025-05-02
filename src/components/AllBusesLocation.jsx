import { Marker } from "react-native-maps";
import useBus from "../../hooks/useBus";
import BusMarker from "../../assets/bus_marker.png";

const AllBusesLocation = ({ handleMarkerClick }) => {
  const { busses } = useBus();

  return (
    <>
      {busses.map((bus, i) => {
        let latitude = bus.location?.latitude;
        let longitude = bus.location?.longitude;
        return latitude && longitude ? (
          <Marker
            key={i}
            onPress={() => handleMarkerClick({ latitude, longitude })}
            coordinate={{ latitude: Number(latitude), longitude: Number(longitude) }}
            title={bus.name}
            description={`Location of ${bus.name}`}
            image={BusMarker}
          />
        ) : undefined;
      })}
    </>
  );
};

export default AllBusesLocation;
