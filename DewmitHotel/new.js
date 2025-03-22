// Function to open the side navigation
let sideNav = document.querySelector('.sideNav');
function openNav() {
    document.getElementById("sideNav").classList.add('side-nav-open');
}

// Function to close the side navigation
function closeNav() {
    document.getElementById("sideNav").classList.remove('side-nav-open');
    // document.getElementById("sideNav").classList.add('side-nav-close');

}

// Attach event listener to the menu button
document.querySelector(".menu").addEventListener("click", openNav);





// Get the gallery container and buttons
const galleryContainer = document.querySelector('.gallery-container');
const leftButton = document.querySelector('.side1');
const rightButton = document.querySelector('.side2');

// Set the scroll amount
const scrollAmount = 300; // adjust this value to change the scroll amount

// Add event listeners to the buttons
leftButton.addEventListener('click', () => {
  galleryContainer.scrollBy({
    top: 0,
    left: -scrollAmount,
    behavior: 'smooth'
  });
});

rightButton.addEventListener('click', () => {
  galleryContainer.scrollBy({
    top: 0,
    left: scrollAmount,
    behavior: 'smooth'
  });
});