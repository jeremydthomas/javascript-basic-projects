const url =
	'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog';

const productDOM = document.querySelector('.product');

const fetchProducts = async () => {
	productDOM.innerHTML = `<div class="loading"></div>`;
	try {
		const response = await fetch(url);
		const data = await response.json();

		// TODO if (!response.ok) {
		//TODO 	throw new Error('there was an error fetching products');
		// TODO}
		// console.log(data);
		return data;
	} catch (error) {
		productDOM.innerHTML = `<p class="error">there was an error</p>`;
	}
};

const displayProducts = (list) => {
	console.log(list);
	const productList = list.map((product) => {
		console.log(list);
		// id, name, price, img;
		// const { id } = product;
		// const { name: title, price } = product.fields;
		// const { url: img } = product.fields.image[0];
		// const formatPrice = price / 100;
		// const { company } = product.fields.company;
		// console.log(company);
		// return `<div class="product-wrapper">
		// 	<img src="${img}" alt="${title}" class="img" />
		// 	<div class="product-info">
		// 		<h3>${title}</h3>
		// 		<h5>company</h5>
		// 		<span>price</span>
		// 		<div class="colors">
		// 			<span class="product-color"></span>
		// 			<span class="product-color" style="background: red"></span>
		// 		</div>
		// 		<p>
		// 			Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam
		// 			fuga dolorum natus rem nihil nulla impedit, molestias nam illo
		// 			tempora illum. Rerum laborum, nulla nesciunt corporis ea cum
		// 			doloribus!
		// 		</p>`;
	});
	// 		.join('');
	// 	productDOM.innerHTML = `<div class="products-container">${productList}</div>
	// `;
};

const start = async () => {
	const data = await fetchProducts();
	displayProducts(data);
};

// displayProducts();
// fetchProducts();
start();
