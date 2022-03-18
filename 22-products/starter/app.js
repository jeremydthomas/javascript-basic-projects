const url = 'https://course-api.com/javascript-store-products';

const productsDOM = document.querySelector('.products-center');

// returns fetches gets and handles loading of data

const fetchProducts = async () => {
	productsDOM.innerHTML = `<div class="loading"></div>`;
	try {
		const response = await fetch(url);
		const data = await response.json();

		// if (!response.ok) {
		// 	throw new Error('there was an error fetching products');
		// }

		return data;
	} catch (error) {
		productsDOM.innerHTML = `<p class="error">there was an error</p>`;
	}
};

// displays/renders data 

const displayProducts = (list) => {
	console.log(list);
};

// fetch and get and pass data to rendered data

const start = async () => {
const data = await fetchProducts();
displayProducts(data);
};

fetchProducts();
start();
