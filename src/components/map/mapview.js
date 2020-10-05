import React from 'react';
import { Container } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';
import MapMarker from './marker';
import { useSelector } from 'react-redux';
import { v1 as uuid } from 'uuid';
import './mapview.css';

const MapView = () => {
	const { lat, lng } = useSelector((state) => state.app.position);
	const todoslog = useSelector((state) => state.todoslog);

	const defaultSettings = {
		center: {
			lat: lat || 0,
			lng: lng || 0
		},
		zoom: 15
	};

	const handleApiLoaded = (map, maps) => {
		// console.log(map);
		// console.log(maps);
	};

	return (
		<Container className="mt-4 shadow p-2 overflow-auto m-view">
			<GoogleMapReact
				bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
				center={defaultSettings.center}
				defaultZoom={defaultSettings.zoom}
				yesIWantToUseGoogleMapApiInternals
				onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
			>
				{todoslog.map((log, i) => {
					if (lat && lng) {
						return (
							<MapMarker
								lat={log.position.lat + i / 2}
								lng={log.position.lng + i / 2}
								action={log.action}
								name={log.name}
								from={log.from ? log.from : false}
								key={uuid()}
							/>
						);
					} else {
						return (
							<MapMarker
								lat={0}
								lng={0}
								action={log.action}
								name={log.name}
								from={log.from ? log.from : false}
								key={uuid()}
							/>
						);
					}
				})}
			</GoogleMapReact>
		</Container>
	);
};

export default MapView;
