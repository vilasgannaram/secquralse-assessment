import axios from 'axios';

const fetchEvents = async () => {
	const loadedEvents = [];

	const { data } = await axios.get(
		'https://secquralse-assignment-4f832-default-rtdb.firebaseio.com/events.json'
	);

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

	return loadedEvents;
};

export default fetchEvents;
