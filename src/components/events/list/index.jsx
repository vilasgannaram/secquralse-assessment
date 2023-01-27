import React, { useState } from 'react';
import Filter from '../filter';
import './index.scss';

import { dateWrite } from '../../../utils';

const List = ({ events, details, setDetails, setFilters }) => {
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
									setFilters={setFilters}
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
									<span>{evt.id}: </span>
									{evt.location}
								</p>
								<p>{`${dateWrite(evt.date, 'number')} ${evt.time}`}</p>
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
