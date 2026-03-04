const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

let i = 0;

const arrowLeft = document.querySelector('#arrow-left')
console.log(arrowLeft);
const arrowRight = document.querySelector('#arrow-right')
const bannerImg = document.querySelector('#banner-img img')
const bannerText = document.querySelector('#banner-img p')


arrowLeft.addEventListener('click', function(event){
	console.log(event);
	i = (i-1 + slides.length) % slides.length;
	bannerImg.src = "./assets/images/slideshow/" + slides[i].image
	bannerText.innerHTML = slides[i].tagLine
})


arrowRight.addEventListener('click', function(event){
	console.log(event);
	i = (i+1) % slides.length;
	bannerImg.src = "./assets/images/slideshow/" + slides[i].image
	bannerText.innerHTML = slides[i].tagLine
})
const p = document.querySelector('#banner-img p');
p.style.display = "flex";
p.style.justifyContent = "center";
p.style.alignItems = "center";
p.style.textAlign = "center";
//dots

function createdots() {
  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dots");

    dot.addEventListener("click", () => {
      index = i;
      showSlide();
    });

    dotsContainer.appendChild(dot);
  });
}

// 🔹 Mise à jour visuelle des dots
function updatedots() {
  const allDots = document.querySelectorAll(".dot");

  allDots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}
createdots();
showSlide();