import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './bottomtap.css';

const BottomTab = ({ handleTabChange, mapTab }) => {
	return (
		<Navbar bg="white" fixed="bottom" className="flex p-0 mt-4">
			<button
				className={`p-2 flex-fill cursor-pointer ${mapTab ? 'tab-nav' : 'tab-nav-selected'}`}
				onClick={() => handleTabChange(false)}
			>
				<div className="flex justify-center">
					<div className="flex flex-col">
						<svg
							width="2em"
							height="2em"
							viewBox="0 0 16 16"
							className="bi bi-list-ul mx-auto"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								strokeWidth="6"
								d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
							/>
						</svg>
						<h3 className="text-base">To Do</h3>
					</div>
				</div>
			</button>
			<button
				className={`p-2 flex-fill cursor-pointer ${mapTab ? 'tab-nav-selected' : 'tab-nav'}`}
				onClick={() => handleTabChange(true)}
			>
				<div className="flex justify-center">
					<div className="flex flex-col">
						<svg
							width="2em"
							height="2em"
							viewBox="0 0 16 16"
							className="bi bi-map mx-auto"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98l4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"
							/>
						</svg>
						<h3 className="mx-1 text-base">Map</h3>
					</div>
				</div>
			</button>
		</Navbar>
	);
};

export default BottomTab;
