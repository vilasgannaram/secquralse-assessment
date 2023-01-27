import React, { useState } from 'react';
import './index.scss';

const Filter = ({ setShowSettings, setFilters }) => {
	const [isChecked, setIsChecked] = useState({
		gender: {
			male: false,
			female: false,
		},
		location: {
			hyderabad: false,
			chennai: false,
			bangalore: false,
		},
	});

	const formSubmitHandler = (e) => {
		e.preventDefault();

		setFilters((prevFilters) => {
			return {
				...prevFilters,
				gender:
					(isChecked.gender.male && isChecked.gender.female) ||
					(!isChecked.gender.male && !isChecked.gender.female)
						? 'all'
						: isChecked.gender.male && !isChecked.gender.female
						? 'male'
						: 'female',
				location: {
					all:
						(isChecked.location.hyderabad &&
							isChecked.location.chennai &&
							isChecked.location.bangalore) ||
						(!isChecked.location.hyderabad &&
							!isChecked.location.chennai &&
							!isChecked.location.bangalore)
							? true
							: false,
					hyderabad: isChecked.location.hyderabad,
					chennai: isChecked.location.chennai,
					bangalore: isChecked.location.bangalore,
				},
			};
		});

		setShowSettings(false);
	};

	return (
		<div className='filters-container'>
			<div className='filters-header'>
				<h2>Filters</h2>
			</div>

			<form onSubmit={formSubmitHandler}>
				<div className='gender-wrapper'>
					<p>Gender</p>

					<div className='gender-list'>
						<div className='gender'>
							<input
								type='checkbox'
								name='male'
								id='male'
								value='male'
								checked={isChecked.gender.male}
								onChange={() =>
									setIsChecked((prev) => ({
										...prev,
										gender: { ...prev.gender, male: !prev.gender.male },
									}))
								}
							/>
							<label htmlFor='male'>Male</label>
						</div>

						<div className='gender'>
							<input
								type='checkbox'
								name='female'
								id='female'
								value='female'
								checked={isChecked.gender.female}
								onChange={() =>
									setIsChecked((prev) => ({
										...prev,
										gender: { ...prev.gender, female: !prev.gender.female },
									}))
								}
							/>
							<label htmlFor='female'>Female</label>
						</div>
					</div>
				</div>

				<div className='location-wrapper'>
					<p>Location</p>

					<div className='locations-list'>
						<div className='city'>
							<input
								type='checkbox'
								name='hyderabad'
								id='hyderabad'
								value='hyderabad'
								checked={isChecked.location.hyderabad}
								onChange={() => {
									setIsChecked((prev) => ({
										...prev,
										location: {
											...prev.location,
											hyderabad: !prev.location.hyderabad,
										},
									}));
								}}
							/>
							<label htmlFor='hyderabad'>Hyderabad</label>
						</div>

						<div className='city'>
							<input
								type='checkbox'
								name='chennai'
								id='chennai'
								value='chennai'
								checked={isChecked.location.chennai}
								onChange={() => {
									setIsChecked((prev) => ({
										...prev,
										location: {
											...prev.location,
											chennai: !prev.location.chennai,
										},
									}));
								}}
							/>
							<label htmlFor='chennai'>Chennai</label>
						</div>

						<div className='city'>
							<input
								type='checkbox'
								name='bangalore'
								id='bangalore'
								value='bangalore'
								checked={isChecked.location.bangalore}
								onChange={() => {
									setIsChecked((prev) => ({
										...prev,
										location: {
											...prev.location,
											bangalore: !prev.location.bangalore,
										},
									}));
								}}
							/>
							<label htmlFor='bangalore'>Bangalore</label>
						</div>
					</div>
				</div>

				<div className='date-wrapper'>
					<p>Date</p>
					<input
						type='date'
						name='date'
						id='date'
						min='2023-01-05'
						max='2023-01-09'
					/>
				</div>

				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default Filter;
