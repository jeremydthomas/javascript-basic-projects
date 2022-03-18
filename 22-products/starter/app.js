const url = 'https://course-api.com/javascript-store-products';

const productsDOM = document.querySelector('.products-center');
const productsContainer = document.querySelector('.products-container');

// returns fetches gets and handles loading of data

const fetchProducts = async () => {
	productsDOM.innerHTML = `<div class="loading"></div>`;
	try {
		const response = await fetch(url);
		const data = await response.json();

		// TODO if (!response.ok) {
		//TODO 	throw new Error('there was an error fetching products');
		// TODO}
console.log(data);
		return data;
	} catch (error) {
		productsDOM.innerHTML = `<p class="error">there was an error</p>`;
	}
};

// displays/renders data

const displayProducts = (list) => {
 console.log(list);
	const productList = list
		.map((product) => {
			// id, name, price, img
			const { id } = product;
			const { name: title, price } = product.fields;
			const { url: img } = product.fields.image[0];
			const formatPrice = price / 100;
			return `<a href="product.html?id=${id}" class="single-product">
						<img src="${img}" alt="${title}" class="single-product-img img" />
						<footer>
							<h5 class="name">${title}</h5>
							<span class="price">$${formatPrice}</span>
       </footer>
					</a>`;
		})
		.join('');
	productsDOM.innerHTML = `<div class="products-container">${productList}</div>
`;
};

// fetch and get and pass data to rendered data

const start = async () => {
	const data = await fetchProducts();
	displayProducts(data);
};


start();
