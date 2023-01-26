import React from 'react';
import './index.scss';

const Details = ({ event }) => {
	return (
		<div className='event-container'>
			<div className='text-wrapper'>
				<div className='event-header'>
					<h1>{event.id}</h1>
					<h3>Person Detected</h3>
				</div>

				<div className='event-details'>
					<p>Name: {event.name}</p>
					<p>Location: {event.location}</p>
					<p>Date: {event.date}</p>
					<p>Time: {event.time}</p>
				</div>

				<div className='event-description'>
					<h2>Description</h2>
					<p>
						{event.name} detected at {event.location} on {event.date}
					</p>
				</div>
			</div>

			<div className='image-wrapper'>
				<h2>{event.gender}</h2>
				<img
					src={`data:image/jpeg;base64, ${event.base64}`}
					alt={`${event.name} `}
				/>
			</div>
		</div>
	);
};

export default Details;
