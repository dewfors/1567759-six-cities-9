import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import {City, Points} from '../../types/offers';
import {IMG_URL, MapLocationType, Pins} from '../../utils/const';

const defaultCustomIcon = new Icon({
  iconUrl: `${IMG_URL}${Pins.Normal}`,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: `${IMG_URL}${Pins.Active}`,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

type MapProps = {
  city: City;
  points: Points;
  selectedPoint: number | undefined;
  mapLocationType: string;
};

function Map(props: MapProps): JSX.Element {
  const {city, points, selectedPoint, mapLocationType} = props;

  const mapClassName = mapLocationType === MapLocationType.HOME ? 'cities__map map' : 'property__map map';
  const mapHeight = mapLocationType === MapLocationType.HOME ? '100%' : '580px';

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.id === selectedPoint
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return <section className={mapClassName} style={{height: mapHeight}} ref={mapRef} />;
}

export default Map;
