import get from './getElement.js';

const displayDrinks = ({ drinks }) => {
	const section = get('.section-center');
	const title = get('.title');
	if (!drinks) {
		// hide loading
		title.textContent = 'Sorry, no drinks are available';
		section.innerHTML = null;
		return;
	} else {
		const newDrinks = drinks
			.map((drink) => {

				const {
					strDrink: name,
					strDrinkThumb: image,
					idDrink: id,
					strCategory: category,
				} = drink;
		

				return `<a href="drink.html">
					<article class="cocktail" data-id="${id}">
						<img src="${image}" alt="${name}" />
						<h3>${name}</h3>
					</article>
				</a>`;
			})
			.join('');
		// hide loading
		title.textContent = '';
		section.innerHTML = newDrinks;
		return section;
	}
};

export default displayDrinks;
