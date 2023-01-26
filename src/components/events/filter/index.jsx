import React, { useState } from 'react';
import './index.scss';

const Filter = ({ setShowSettings, setGender, setLocation, setDate }) => {
	const [isMaleChecked, setIsMaleChecked] = useState(false);
	const [isFemaleChecked, setIsFemaleChecked] = useState(false);

	const [isHydChecked, setIsHydChecked] = useState(false);
	const [isChennaiChecked, setIsChennaiChecked] = useState(false);
	const [isBangaloreChecked, setIsBangaloreChecked] = useState(false);

	const formSubmitHandler = (e) => {
		e.preventDefault();

		setGender((prev) => {
			if (
				(isMaleChecked && isFemaleChecked) ||
				(!isMaleChecked && !isFemaleChecked)
			) {
				return 'all';
			} else if (isMaleChecked && !isFemaleChecked) return 'male';
			else return 'female';
		});

		setLocation((prev) => {
			return {
				...prev,
				all:
					(isHydChecked && isChennaiChecked && isBangaloreChecked) ||
					(!isHydChecked && !isChennaiChecked && !isBangaloreChecked)
						? true
						: false,
				hyderabad: isHydChecked,
				chennai: isChennaiChecked,
				bangalore: isBangaloreChecked,
			};
		});

		// const date = String(e.target[5].value);
		// const newDate = `${date[8]}${date[9]}-${date[5]}${date[6]}-${date[0]}${date[1]}${date[2]}${date[3]}`;

		// console.log(newDate);
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
								checked={isMaleChecked}
								onChange={() => setIsMaleChecked(!isMaleChecked)}
							/>
							<label htmlFor='male'>Male</label>
						</div>

						<div className='gender'>
							<input
								type='checkbox'
								name='female'
								id='female'
								value='female'
								checked={isFemaleChecked}
								onChange={() => setIsFemaleChecked(!isFemaleChecked)}
							/>
							<label htmlFor='female'>Female</label>
						</div>
					</div>
				</div>

				<div className='location-wrapper'>
					<p>Location</p>

					<div className='locations-list'>
						<div className='city hyderabad'>
							<input
								type='checkbox'
								name='hyderabad'
								id='hyderabad'
								value='hyderabad'
								checked={isHydChecked}
								onChange={() => setIsHydChecked(!isHydChecked)}
							/>
							<label htmlFor='hyderabad'>Hyderabad</label>
						</div>

						<div className='city chennai'>
							<input
								type='checkbox'
								name='chennai'
								id='chennai'
								value='chennai'
								checked={isChennaiChecked}
								onChange={() => setIsChennaiChecked(!isChennaiChecked)}
							/>
							<label htmlFor='chennai'>Chennai</label>
						</div>

						<div className='city bangalore'>
							<input
								type='checkbox'
								name='bangalore'
								id='bangalore'
								value='bangalore'
								checked={isBangaloreChecked}
								onChange={() => setIsBangaloreChecked(!isBangaloreChecked)}
							/>
							<label htmlFor='bangalore'>Bangalore</label>
						</div>
					</div>
				</div>

				<div className='date-wrapper'>
					<p>Date</p>
					<input type='date' name='date' id='date' />
				</div>

				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default Filter;
