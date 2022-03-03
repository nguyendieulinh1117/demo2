import useTranslation from "next-translate/useTranslation";
import React, { useCallback, useRef, useState } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { useSelector } from "react-redux";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { AppState } from "../../../hook/rootReducer";

function MapStore() {
    const { t } = useTranslation();
    const { locales }: any = useSelector((state: AppState) => state.locales);
    const [position, setPosition] = useState<google.maps.LatLng | google.maps.LatLngLiteral>({ lat: 10.84365925128092, lng: 106.66461398345085 });
    const inputRef: any = useRef();
    const positionArr = [
        { lat: 10.84365925128092, lng: 106.66461398345085 },
        { lat: 10.800853639202822, lng: 106.65891215275971 },
        { lat: 10.793046768497694, lng: 106.69926249694151 },
    ];
    const defaultOptions: any = {
        scrollwheel: false,
        mapTypeControlOptions: {
            position: "TOP_RIGHT",
        },
    };
    const RegularMap = withScriptjs(
        withGoogleMap((props) => (
            <GoogleMap defaultZoom={18} defaultCenter={position}>
                <Marker position={position} />
            </GoogleMap>
        ))
    );
    const MobileMap = withScriptjs(
        withGoogleMap((props) => (
            <GoogleMap defaultZoom={12} defaultCenter={position} defaultOptions={defaultOptions}>
                {positionArr && positionArr.map((e, index) => <Marker position={e} key={index} icon={"/assets/img/icon-marker-pin-mobile.png"} />)}
            </GoogleMap>
        ))
    );
    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    const {
        ready,
        suggestions: { status, data },
        value,
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete();

    const handleInput = () => {
        setValue(inputRef.current.value);
        console.log(inputRef.current.value);
    };
    const handleSelect =
        ({ description }) =>
        () => {
            setValue(description, false);
            clearSuggestions();

            getGeocode({ address: description })
                .then((res) => getLatLng(res[0]))
                .then(({ lat, lng }) => {
                    console.log("Coordinates: ", { lat, lng });
                    setPosition({ lat, lng });
                })
                .catch((err) => console.log("Error: ", err));
        };
    const renderSuggestion = () => {
        const elements = data.map((suggestion) => {
            const {
                place_id,
                structured_formatting: { main_text, secondary_text },
            } = suggestion;
            return (
                <li key={place_id} onClick={handleSelect(suggestion)}>
                    <strong>{main_text}</strong>
                    <small>{secondary_text}</small>
                </li>
            );
        });
        return elements;
    };

    return (
        <div className="map-store">
            <div className="map-control">
                <div className="d-flex">
                    <input className="form-control google-search-input d-inline-block search-box-address" disabled={!ready} type="text" placeholder={t("store:enter_address")} ref={inputRef} />
                    <div className="input-group-append" onClick={handleInput}>
                        <span className="input-group-text btn-address-disable">
                            <i className="icon-long-search"></i>
                        </span>
                    </div>
                </div>
                {status === "OK" && (
                    <div className="list-search">
                        <ul>{renderSuggestion()}</ul>
                    </div>
                )}
            </div>
            <div className="map-canvas desktop" style={{ height: "100%" }}>
                {locales === "vi" ? (
                    <RegularMap
                        containerElement={<div style={{ height: "100%" }} />}
                        loadingElement={<div style={{ height: "100%" }} />}
                        mapElement={<div style={{ height: "100%" }} />}
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyD4S-7VnutQrvqzKjycYf4dmgxViUG9CGM`}
                    />
                ) : (
                    <RegularMap
                        containerElement={<div style={{ height: "100%" }} />}
                        loadingElement={<div style={{ height: "100%" }} />}
                        mapElement={<div style={{ height: "100%" }} />}
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyD4S-7VnutQrvqzKjycYf4dmgxViUG9CGM&language=en`}
                    />
                )}
            </div>
            <div className="map-canvas mobile" style={{ height: "100%" }}>
                {locales === "vi" ? (
                    <MobileMap
                        containerElement={<div style={{ height: "100%" }} />}
                        loadingElement={<div style={{ height: "100%" }} />}
                        mapElement={<div style={{ height: "100%" }} />}
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyD4S-7VnutQrvqzKjycYf4dmgxViUG9CGM`}
                    />
                ) : (
                    <MobileMap
                        containerElement={<div style={{ height: "100%" }} />}
                        loadingElement={<div style={{ height: "100%" }} />}
                        mapElement={<div style={{ height: "100%" }} />}
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyD4S-7VnutQrvqzKjycYf4dmgxViUG9CGM&language=en`}
                    />
                )}
            </div>
        </div>
    );
}

export default MapStore;
