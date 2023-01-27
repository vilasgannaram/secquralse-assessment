import React, { useState } from 'react';
import './index.scss';

const Filter = ({ setShowSettings, setFilters }) => {
	const [selectedFilters, setSelectedFilters] = useState({
		gender: {
			male: false,
			female: false,
		},
		location: {
			hyderabad: false,
			chennai: false,
			bangalore: false,
			res: function () {
				const arr = [];
				if (this.hyderabad) arr.push('hyderabad');
				if (this.bangalore) arr.push('bangalore');
				if (this.chennai) arr.push('chennai');

				return arr;
			},
		},
	});

	const formSubmitHandler = (e) => {
		e.preventDefault();

		setFilters((prevFilters) => {
			return {
				...prevFilters,
				gender:
					selectedFilters.gender.male === selectedFilters.gender.female
						? ''
						: selectedFilters.gender.male
						? 'male'
						: 'female',
				locations: selectedFilters.location.res(),
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
								checked={selectedFilters.gender.male}
								onChange={() =>
									setSelectedFilters((prev) => ({
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
								checked={selectedFilters.gender.female}
								onChange={() =>
									setSelectedFilters((prev) => ({
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
								checked={selectedFilters.location.hyderabad}
								onChange={() => {
									setSelectedFilters((prev) => ({
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
								checked={selectedFilters.location.chennai}
								onChange={() => {
									setSelectedFilters((prev) => ({
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
								checked={selectedFilters.location.bangalore}
								onChange={() => {
									setSelectedFilters((prev) => ({
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
