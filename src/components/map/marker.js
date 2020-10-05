import React from 'react';
import './marker.css';
const MapMarker = ({ action, name, from }) => {
	return (
		<div style={{ transform: 'translate(-50%, -50%)' }} className="marker cursor-pointer">
			<div
				className="text-base font-medium py-0 px-2 w-40 text-center mb-0 marker-info"
				style={{
					color: 'white',
					background: action === 'done' ? '#38a169' : '#f6ad55',
					borderRadius: '15px',
					transform: 'translate(-38%, 0)'
				}}
			>
				{from ? (
					<p className="pt-1">
						<span className="font-bold text-gray-800">from:</span>
						<i> {from} </i>
						<span className="font-bold text-gray-800">to</span>
						<i> {name}</i>
					</p>
				) : (
					<p className="pt-1">
						<span className="text-gray-800">Name:</span>
						<i>{` ${name}`}</i>
					</p>
				)}

				<p className="pb-1 mb-0">
					<span className="text-gray-800">Action:</span>
					{action === 'modified' ? (
						<i className="text-yellow-400 font-bold">{` ${action}`}</i>
					) : (
						<i className={action === 'created' ? 'text-green-600 font-bold' : 'font-bold'}>
							{` ${action}`}
						</i>
					)}
				</p>
			</div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				className="h-10 w-10 text-orange-500 mt-0 marker-icon"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
				/>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
				/>
			</svg>
		</div>
	);
};

export default MapMarker;
