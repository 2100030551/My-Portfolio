// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Select all skill slides
    const skillsSlides = document.querySelectorAll('.skills-slide');
    let currentSlideIndex = 0;

    // Function to show a specific slide
    function showSlide(index) {
        // Hide all slides
        skillsSlides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    // Show the first slide initially
    showSlide(currentSlideIndex);

    // Handle the "Next" button click
    document.querySelector('.skills-next').addEventListener('click', () => {
        currentSlideIndex = (currentSlideIndex + 1) % skillsSlides.length; // Loop to the first slide after the last one
        showSlide(currentSlideIndex);
    });

    // Handle the "Prev" button click
    document.querySelector('.skills-prev').addEventListener('click', () => {
        currentSlideIndex = (currentSlideIndex - 1 + skillsSlides.length) % skillsSlides.length; // Loop to the last slide if at the first one
        showSlide(currentSlideIndex);
    });

});
// Get modal and button elements
const servicesModal = document.getElementById("servicesModal");
const servicesButton = document.getElementById("servicesButton");
const closeModal = document.getElementById("closeModal");

// Open modal when the Services button is clicked
servicesButton.onclick = function() {
  servicesModal.style.display = "block";
}

// Close the modal when the "X" button is clicked
closeModal.onclick = function() {
  servicesModal.style.display = "none";
}

// Close the modal if the user clicks outside the modal content
window.onclick = function(event) {
  if (event.target == servicesModal) {
    servicesModal.style.display = "none";
  }
}
