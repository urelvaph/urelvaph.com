const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    //toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

//close mobilie menu
menuCloseButton.addEventListener("click", () => menuOpenButton.click());


document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    let currentIndex = 0;

    function showNextSlide() {
      currentIndex = (currentIndex + 1) % slideCount; // Loop back to the first slide
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Automatically transition every 5 seconds
    setInterval(showNextSlide, 3300);
  });

  // service card transition
const cards = document.querySelectorAll('.service-card');

// Create an IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the 'in-view' class to the card
      entry.target.classList.add('in-view');
      // Stop observing the card after it's been animated
      observer.unobserve(entry.target);
    }
  });
}, { 
  threshold: 0.25,   // Trigger when 25% of the card is visible
  rootMargin: "0px 0px -50px 0px"  // Offset to trigger a bit before the card enters completely
});

// Observe each card
cards.forEach(card => {
  observer.observe(card);
});

// Manually trigger observer after page load to ensure all cards have a chance to trigger
window.addEventListener('load', () => {
  cards.forEach(card => observer.observe(card));
});