const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

const monthsRead = [
	'Jan',
	'Feb',
	'March',
	'April',
	'May',
	'June',
	'July',
	'Aug',
	'Sept',
	'Oct',
	'Nov',
	'Dec',
];

let date = '2023-01-05';

const pad = (num) => (num < 10 ? `0${num}` : num);

export const dateWrite = (date, type) => {
	let result = '';
	const newDate = new Date(date);
	const date1 = newDate.getDate();
	const month = newDate.getMonth();
	const year = newDate.getFullYear();

	if (type === 'short') {
		result += `${date1}-${monthsRead[month]}-${year}`;
	} else if (type === 'long') {
		result += `${date1} ${months[month]}, ${year}`;
	} else if (type === 'number') {
		result += `${pad(date1)}-${pad(month + 1)}-${year}`;
	}

	return result;
};

console.log(dateWrite(date, 'short'));
console.log(dateWrite(date, 'long'));
console.log(dateWrite(date, 'number'));
