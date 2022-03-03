import { useLoadScript } from "@react-google-maps/api";
import React, { useRef, useCallback } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyD4S-7VnutQrvqzKjycYf4dmgxViUG9CGM",
    libraries: ["places"],
  });
  const defaultLatLng = { lat: 10.84365925128092, lng: 106.66461398345085 };
  const defaultOptions: any = {
    scrollwheel: false,
    mapTypeControlOptions: {
      position: "TOP_RIGHT",
    },
  };
  const RegularMap = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap defaultZoom={18} defaultCenter={defaultLatLng}>
        {/* <Marker
          position={defaultLatLng}
          icon={"assets/img/icon-marker-pin.png"}
          animation={1}
        /> */}
      </GoogleMap>
    ))
  );
  const MobileMap = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={18}
        defaultCenter={defaultLatLng}
        defaultOptions={defaultOptions}
      >
        {/* <Marker
          position={defaultLatLng}
          icon={"assets/img/icon-marker-pin-mobile.png"}
          animation={1}
        /> */}
      </GoogleMap>
    ))
  );
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  //search
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleInput = (e) => {
    setValue(e.target.value);
    // console.log(status);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      setValue(description, false);
      clearSuggestions();
      getGeocode({ address: description })
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
          console.log(lat, lng);
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;
      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });
  return (
    <div className="map-canvas" style={{ height: "100%" }}>
      <RegularMap
        containerElement={<div style={{ height: "100%" }} />}
        loadingElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD4S-7VnutQrvqzKjycYf4dmgxViUG9CGM"
      />
    </div>
  );
}
export default Map;
