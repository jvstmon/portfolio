// --- Scroll to top button ---
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// --- Efekt fade-in przy przewijaniu ---
const fadeElements = document.querySelectorAll('.fade-in');

function handleScrollFade() {
  const triggerBottom = window.innerHeight * 0.85;

  fadeElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScrollFade);
window.addEventListener('load', handleScrollFade);

// --- Automatyczne zmienianie zdjęć w sekcji "O mnie" ---
function initSliders() {
  const sliders = document.querySelectorAll('.photo-slider');

  sliders.forEach(slider => {
    const images = slider.querySelectorAll('img');
    let index = 0;

    setInterval(() => {
      images[index].classList.remove('active');
      index = (index + 1) % images.length;
      images[index].classList.add('active');
    }, 4000); // zmiana co 4 sekundy
  });
}

window.addEventListener('load', initSliders);
