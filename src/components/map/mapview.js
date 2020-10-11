import './mapview.css';
import GoogleMapReact from 'google-map-react';
import MapMarker from './marker';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { v1 as uuid } from 'uuid';

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
		<Container className="mt-4 shadow p-2 overflow-auto">
			<i className='text-yellow-700 ml-3 mb-1 block'>Press on the marker to see more...</i>
			<Container className="m-view">
				<GoogleMapReact
					bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
					center={defaultSettings.center}
					defaultZoom={defaultSettings.zoom}
					yesIWantToUseGoogleMapApiInternals
				>
					{todoslog.map((log) => {
						return (
							<MapMarker
								action={log.action}
								from={log.from || false}
								key={uuid()}
								lat={log.position.lat}
								lng={log.position.lng}
								name={log.name}
							/>
						);
					})}
				</GoogleMapReact>
			</Container>
		</Container>
	);
};

export default MapView;
