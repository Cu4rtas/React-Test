import React from 'react';
import { Container } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';
import MapMarker from './marker';
import { useSelector } from 'react-redux';
import { v1 as uuid } from 'uuid';
import './mapview.css';

const MapView = () => {
	const position = useSelector((state) => state.app.position);
	const todoslog = useSelector((state) => state.todoslog);
	const defaultSettings = {
		center: {
			lat: position ? position.lat || 0 : 0,
			lng: position ? position.lng || 0 : 0
		},
		zoom: 15
	};
	return (
		<Container className="mt-4 shadow p-2 overflow-auto m-view">
			<GoogleMapReact
				bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
				center={defaultSettings.center}
				defaultZoom={defaultSettings.zoom}
				yesIWantToUseGoogleMapApiInternals
			>
				{todoslog.map((log) => {
					return (
						<MapMarker
							lat={log.position.lat}
							lng={log.position.lng}
							action={log.action}
							name={log.name}
							from={log.from || false}
							key={uuid()}
						/>
					);
				})}
			</GoogleMapReact>
		</Container>
	);
};

export default MapView;
