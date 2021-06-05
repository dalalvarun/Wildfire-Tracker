import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";
import { useState } from "react";
const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const marker = eventData.map((data) => {
    if (data.categories[0].id === 8) {
      return (
        <LocationMarker
          lat={data.geometries[0].coordinates[1]}
          lng={data.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: data.id, title: data.title })}
        />
      );
    }
    return null;
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={process.env.API_KEY}
        defaultZoom={zoom}
        defaultCenter={center}
        className="inner-map"
        setOptions={{ draggableCursor: "crosshair" }}
        defaultCursor="pointer"
        defaultDraggable={false}
      >
        {marker}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 20.5937,
    lng: 78.9629,
  },
  zoom: 3,
  draggableCursor: "pointer",
};

export default Map;
