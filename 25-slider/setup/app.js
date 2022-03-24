import people from './data.js';

const container = document.querySelector('.slide-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

container.innerHTML = people
	.map(({ img, name, job, text }, slideIndex) => {
		// more logic later

		let position = 'next';
		if (slideIndex === 0) {
			position = 'active';
		}
		if (slideIndex === people.length - 1) {
			position = 'last';
		}
		return `				<article class="slide ${position}">
					<img
						src="${img}"
						alt="${name}"
						class="img"
					/>
					<h4>${name}</h4>
					<p class="title">${job}</p>
					<p class="text">
      ${text}
					</p>
					<div class="quote-icon">
						<div class="fas fa-quote-right"></div>
					</div>
				</article>`;
	})
	.join('');

const startSlider = (type) => {
	console.log(type);
	const active = document.querySelector('.active');
	let next = active.nextElementSibling;
	const last = document.querySelector('.last');
	if (!next) {
		next = container.firstElementChild;
	}
	active.classList.remove(['active']);
	last.classList.remove(['last']);
	next.classList.remove(['next']);

	if (type === 'prev') {
		active.classList.add('next');
		last.classList.add('active');
		next = last.previousElementSibling;
		if (!next) {
			next = container.lastElementChild;
		}
		next.classList.remove(['next']);

		next.classList.add('last');
		return;
	}

	active.classList.add('last');
	last.classList.add('next');
	next.classList.add('active');

	// active.classList.remove(['active']);
	// last.classList.remove(['last']);
	// next.classList.remove(['next']);

	// next.classList.add('active');
	// last.classList.add('next');
	// active.classList.add('last');
};

nextBtn.addEventListener('click', () => {
	startSlider();
});

prevBtn.addEventListener('click', () => {
	startSlider('prev');
});
