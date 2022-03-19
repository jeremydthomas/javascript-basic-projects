const url = 'https://course-api.com/javascript-store-single-product';

const productDOM = document.querySelector('.product');

const fetchProduct = async () => {
	try {
		productDOM.innerHTML = `<h4 class="product-loading">Loading....</h4>`;

		const params = new URLSearchParams(window.location.search);
		const id = params.get('id');

		const response = await fetch(`${url}?id=${id}`);
		const data = await response.json();
		return data;
	} catch (error) {
		productDOM.innerHTML = `<p class="error">there was an error</p>`;
	}
};

const displayProduct = (product) => {
	// company, colors, description, name:title, price, image;
	const {
		company,
		colors,
		description,
		name: title,
		price,
		image,
	} = product.fields;
	const { url: img } = image[0];

	document.title = title.toUpperCase();
	// colors
	const colorList = colors
		.map((color) => {
			return `<span class="product-color" style="background: ${color}"></span>`;
		})
		.join('');

	productDOM.innerHTML = `<div class="product-wrapper">
		<img src="${img}" alt="${title}" class="img" />
		<div class="product-info">
			<h3>${title}</h3>
			<h5>${company}</h5>
			<span>${price / 100}</span>
			<div class="colors">
			${colorList}
			</div>
			<p>${description}</p>`;
};

const start = async () => {
	const data = await fetchProduct();
	displayProduct(data);
};

start();
