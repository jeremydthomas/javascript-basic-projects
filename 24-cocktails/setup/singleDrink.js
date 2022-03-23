import fetchDrinks from './src/fetchDrinks.js';
import displayDrink from './src/displaySingleDrink.js';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const presentDrink = async () => {
	const id = localStorage.getItem('drink');
	const drink = await fetchDrinks(`${URL}${id}`);
	displayDrink(drink);
};

window.addEventListener('DOMContentLoaded', presentDrink);
