import React, { useState } from 'react';
import Filter from '../filter';
import './index.scss';

const List = ({
	events,
	details,
	setDetails,
	setGender,
	setLocation,
	setDate,
}) => {
	const [showSettings, setShowSettings] = useState(false);

	return (
		<div className='list-container'>
			<div className='list-wrapper'>
				<div className='list-header'>
					<h2>Events</h2>

					<div className='list-settings'>
						{!showSettings ? (
							<p
								className='material-icons'
								onClick={() => setShowSettings(true)}
							>
								tune
							</p>
						) : (
							<p
								className='material-icons'
								onClick={() => setShowSettings(false)}
							>
								close
							</p>
						)}

						{showSettings && (
							<div className='settings'>
								<Filter
									setShowSettings={setShowSettings}
									setGender={setGender}
									setLocation={setLocation}
									setDate={setDate}
								/>
							</div>
						)}
					</div>
				</div>

				<ul className='list'>
					{events.map((evt) => (
						<li
							key={evt.id}
							className={`list-item ${details.id === evt.id ? 'active' : ''}`}
							onClick={() => setDetails(evt)}
						>
							<div className='list-item-header'>
								<p>
									{evt.id}: {evt.location}
								</p>
								<p>
									{evt.date} {evt.time}
								</p>
							</div>
							<p>Person detected.</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default List;
