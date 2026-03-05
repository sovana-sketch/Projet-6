const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

let i = 0;

const arrowLeft = document.querySelector('#arrow-left')
console.log(arrowLeft);
const arrowRight = document.querySelector('#arrow-right')
const bannerImg = document.querySelector('#banner-img img')
const bannerText = document.querySelector('#banner-img p')


arrowLeft.addEventListener('click', function (event) {
	console.log(event);
	i = (i - 1 + slides.length) % slides.length;
	bannerImg.src = "./assets/images/slideshow/" + slides[i].image
	bannerText.innerHTML = slides[i].tagLine
})


arrowRight.addEventListener('click', function (event) {
	console.log(event);
	i = (i + 1) % slides.length;
	bannerImg.src = "./assets/images/slideshow/" + slides[i].image
	bannerText.innerHTML = slides[i].tagLine

	
})
//dots
function showSlide() {
  bannerImg.src = "./assets/images/slideshow/" + slides[index].image;
  bannerText.innerHTML = slides[index].tagLine;
  updatedots();
}

const dot = document.querySelector('.dot');
function createDots() {
	slides.forEach((_, index) => {
		const dot = document.createElement('span');
		dot.classList.add('dot');
		dot.addEventListener('click', () => {
			index = index;
			showSlide();
		});
		document.querySelector('.dots-container').appendChild(dot);
	});
}
createDots();

function updatedots() {	
	const dots = document.querySelectorAll('.dot');
	dots.forEach((dot, index) => {
		if (index === i) {
			dot.classList.add('active');
		} else {
			dot.classList.remove('active');
		}
	});
}
updatedots();
