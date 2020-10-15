import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TodoList from '../components/todolist/todolist';
import MapView from '../components/map/mapview';
import { connect } from 'react-redux';
import BottomTab from '../components/bottomtab/bottomtap';
import { setPosition } from '../state/app';
const ErrorAlert = ({ msg }) => {
	return (
		<div className="alert alert-danger" role="alert">
			{msg} &times;
		</div>
	);
};

const IndexPage = ({ dispatch }) => {
	const [mapTab, setMapTab] = useState(false);
	const [msg, setMsg] = useState('');

	const getLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				function (position) {
					dispatch(
						setPosition({
							lat: position.coords.latitude,
							lng: position.coords.longitude
						})
					);
					setMsg('');
				},
				function () {
					setMsg('Geolocation is not enabled. Please enable to use the map feature');
				}
			);
		} else {
			setMsg('Geolocation is not supported by this device');
		}
	};

	useEffect(getLocation);

	return (
		<Layout>
			<SEO title="Home" />
			{msg && <ErrorAlert msg={msg} />}
			<h1 className="text-4xl text-gray-800 underline font-medium">{`${mapTab ? 'Map' : 'To Do List ...'}`}</h1>

			{mapTab ? <MapView /> : <TodoList />}
			<BottomTab handleTabChange={setMapTab} mapTab={mapTab} />
		</Layout>
	);
};

export default connect(
	(state) => ({
		initialState: state
	}),
	null
)(IndexPage);
