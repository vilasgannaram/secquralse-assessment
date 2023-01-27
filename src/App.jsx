import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Navbar, SideNav, Events } from './components';

const App = () => {
	const [events, setEvents] = useState([]);
	const [filteredEvents, setFilteredEvents] = useState([]);
	const [filters, setFilters] = useState({
		gender: 'all',
		location: {
			all: true,
			hyderabad: true,
			chennai: true,
			bangalore: true,
		},
	});
	const [genderCount, setGenderCount] = useState({
		male: 0,
		female: 0,
	});
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
		setGenderCount({ male: 0, female: 0 });
		for (let i = events.length - 1; i >= 0; i--) {
			if (filters.gender === 'all' || filters.gender === events[i].gender) {
				if (filters.location.all || filters.location[events[i].location])
					if (events[i].gender === 'male') {
						setGenderCount((prev) => {
							return { ...prev, male: prev.male + 1 };
						});
					} else {
						setGenderCount((prev) => {
							return { ...prev, female: prev.female + 1 };
						});
					}
				temp.push(events[i]);
			}
		}
		setFilteredEvents(temp);
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
	}, [events, filters]);

	return (
		<>
			<Navbar genderCount={genderCount} />
			<SideNav />
			<Events
				isLoading={isLoading}
				events={filteredEvents}
				setFilters={setFilters}
			/>
		</>
	);
};

export default App;
