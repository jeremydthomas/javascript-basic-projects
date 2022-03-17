let filteredProducts = [...products];

const productsContainer = document.querySelector('.products-container');

const displayProducts = () => {
	// if statement
	if (filteredProducts.length < 1) {
		productsContainer.innerHTML = `<h6>Sorry, no products matched your !</h6>`;
		return;
	}
	productsContainer.innerHTML = filteredProducts
		.map(({ id, title, price, image }) => {
			return `<article class="product" data-id="${id}">
					<img
						src="${image}"
						class="product-image img"
					/>

					<footer>
						<h5 class="product-name">${title}</h5>
						<span class="product-price">${price}</span>
					</footer>
				</article>`;
		})
		.join('');
};

displayProducts();

// Text Filter

const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

form.addEventListener('keyup', () => {
	const inputValue = searchInput.value;
	filteredProducts = products.filter((product) => {
		return product.title.toLowerCase().includes(inputValue);
	});
	displayProducts();
});

// display filter buttons

const companyBtn = document.querySelector('.companies');

const displayButtons = () => {
	let companies = [
		'all',
		...new Set(products.map((product) => product.company)),
	];
	companyBtn.innerHTML = companies
		.map((company) => {
			return `<button class="company-btn" data-id="${company}">${company}</button>`;
		})
		.join('');
};

displayButtons();

companyBtn.addEventListener('click', (e) => {
	const el = e.target;
	if (el.classList.contains('company-btn')) {
		if (el.dataset.id === 'all') {
			filteredProducts = [...products];
		} else {
			filteredProducts = products.filter((product) => {
				return product.company === el.dataset.id;
			});
		}
		searchInput.value = '';
		displayProducts();
	}
});
