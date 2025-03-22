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





// script.js

// Example JavaScript to dynamically add some effects or handle interactions if needed
document.querySelectorAll('.discount-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});
