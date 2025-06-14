let currentSlide = 0;

const carouselImages = document.querySelector('.carousel-images');
const slideWidth = carouselImages.children[0].offsetWidth + 16; // image width + gap

setInterval(() => {
  currentSlide = (currentSlide + 1) % carouselImages.children.length;
  carouselImages.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}, 2000);
