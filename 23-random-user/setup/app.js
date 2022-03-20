import get from './utils/getElement.js';

const URL = 'https://randomuser.me/api/';

const img = get('.user-img');
const title = get('.user-title');
const value = get('.user-value');
const btn = get('.btn');
const btns = [...document.querySelectorAll('.icon')];

const getUser = async () => {
	const response = await fetch(URL);
	const data = await response.json();
	// destructure
	const person = data.results[0];
	const { phone, email } = person;
	const { large: image } = person.picture;
	const { password } = person.login;
	const { first, last } = person.name;
	const {
		dob: { age },
	} = person;
	const {
		street: { number, name },
	} = person.location;

	return {
		image,
		phone,
		email,

		password,
		first,
		last,
		age,
		street: `${number}${name}`,
		name: `${first}${last}`,
	};
};

const showUser = async () => {
	const person = await getUser();

	// display user
};

window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);
