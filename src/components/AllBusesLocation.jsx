import { Marker } from "react-native-maps";
import useBus from "../../hooks/useBus";
import BusMarker from "../../assets/bus_marker.png";

const AllBusesLocation = ({ handleMarkerClick }) => {
  const { busses } = useBus();

  return (
    <>
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
    </>
  );
};

export default AllBusesLocation;
