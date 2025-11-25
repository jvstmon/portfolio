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
document.addEventListener("DOMContentLoaded", () => { 
  const sliders = document.querySelectorAll(".photo-slider"); 
  
  sliders.forEach(slider => { const slides = slider.querySelectorAll(".slide"); 
    let index = 0; 
    
    // pokaż pierwszy slajd 
    slides.forEach(s => s.classList.remove("active")); 
    slides[0].classList.add("active"); 
    
    // przełączanie slajdów 
    setInterval(() => { 
      slides[index].classList.remove("active"); 
      
      // Jeśli slajd jest filmem — zatrzymaj 
      if (slides[index].tagName === "VIDEO") { 
        slides[index].pause(); 
        slides[index].currentTime = 0; 
      } 
      
      index = (index + 1) % slides.length; 
      
      slides[index].classList.add("active"); 
      
      // Jeśli nowy slajd to film — odtwórz 
      if (slides[index].tagName === "VIDEO") { 
        slides[index].play().catch(() => {}); 
      } 
    
    }, 4000); // czas przełączeń 
    }); 
  });