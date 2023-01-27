import React, { useState, useEffect } from 'react';
import fetchEvents from './api';

import { Navbar, SideNav, Events } from './components';

const App = () => {
	const [events, setEvents] = useState([]);
	const [genderCount, setGenderCount] = useState({
		male: 0,
		female: 0,
	});

	useEffect(() => {
		const getEvents = async () => {
			const result = await fetchEvents();
			setEvents(result);
		};

		getEvents();
	}, []);

	return (
		<>
			<Navbar genderCount={genderCount} />
			<SideNav />
			<Events events={events} setGenderCount={setGenderCount} />
		</>
	);
};

export default App;
