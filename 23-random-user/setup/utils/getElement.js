const getElement = (selection) => {
	const element = document.querySelector(selection);
	if (element) return element;
	throw new Error('You messed up the element brah');
};

export default getElement;
