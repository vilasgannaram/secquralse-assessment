import React, { useEffect, useState } from 'react';

import Details from './details';
import List from './list';
import './index.scss';

const Events = ({ events, setGender, setLocation, setDate, isLoading }) => {
	const [details, setDetails] = useState({});

	useEffect(() => {
		if (events.length > 0) {
			setDetails(events[0]);
		}
	}, [events]);

	if (isLoading) {
		return (
			<div className='loading'>
				<p>loading...</p>
			</div>
		);
	}

	return (
		<div className='events-container'>
			<Details event={details} />
			<List
				events={events}
				details={details}
				setDetails={setDetails}
				setGender={setGender}
				setLocation={setLocation}
				setDate={setDate}
			/>
		</div>
	);
};

export default Events;
