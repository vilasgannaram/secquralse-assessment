import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Navbar, SideNav, Events } from './components';

const App = () => {
	const [events, setEvents] = useState([]);
	const [filteredEvents, setFilteredEvents] = useState([]);
	const [gender, setGender] = useState('all');
	const [location, setLocation] = useState({
		all: true,
		hyderabad: true,
		chennai: true,
		bangalore: true,
	});
	const [date, setDate] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	const getEvents = async () => {
		const { data } = await axios.get(
			'https://secquralse-assessment-default-rtdb.firebaseio.com/events.json'
		);
		const loadedEvents = [];
		for (const key in data) {
			loadedEvents.push({
				id: key,
				name: data[key].name,
				gender: data[key].gender,
				location: data[key].location,
				date: data[key].date,
				time: data[key].time,
				base64: data[key].base64,
			});
		}
		setEvents(loadedEvents);
	};

	useEffect(() => {
		getEvents();
	}, []);

	useEffect(() => {
		const temp = [];
		for (let i = events.length - 1; i >= 0; i--) {
			if (gender === 'all' || gender === events[i].gender) {
				if (location.all || location[events[i].location]) temp.push(events[i]);
			}
		}
		setFilteredEvents(temp);
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
	}, [events, gender, location]);

	return (
		<>
			<Navbar />
			<SideNav />
			<Events
				isLoading={isLoading}
				events={filteredEvents}
				setGender={setGender}
				setLocation={setLocation}
				setDate={setDate}
			/>
		</>
	);
};

export default App;
