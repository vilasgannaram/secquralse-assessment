import React, { useEffect, useState } from 'react';

import Details from './details';
import List from './list';
import './index.scss';

const Events = ({ events, setGenderCount }) => {
	const [details, setDetails] = useState({});

	const [filteredEvents, setFilteredEvents] = useState([]);
	const [filters, setFilters] = useState({
		gender: '',
		locations: [],
		date: '',
	});

	useEffect(() => {
		if (filteredEvents.length > 0) {
			setDetails(filteredEvents[0]);
		}
	}, [filteredEvents]);

	useEffect(() => {
		const temp = [];
		const gCount = { male: 0, female: 0 };

		for (let i = events.length - 1; i >= 0; i--) {
			if (filters.gender === '' || filters.gender === events[i].gender) {
				if (
					filters.locations.length === 0 ||
					filters.locations.includes(events[i].location)
				) {
					if (filters.date === '' || filters.date === events[i].date) {
						temp.push(events[i]);

						if (events[i].gender === 'male') {
							gCount.male = gCount.male + 1;
						} else {
							gCount.female = gCount.female + 1;
						}
					}
				}
			}
		}
		setGenderCount(gCount);
		setFilteredEvents(temp);
	}, [events, filters, setGenderCount]);

	return (
		<div className='events-container'>
			<Details event={details} />
			<List
				events={filteredEvents}
				details={details}
				setDetails={setDetails}
				setFilters={setFilters}
			/>
		</div>
	);
};

export default Events;
