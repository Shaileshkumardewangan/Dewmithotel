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



// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach((member, index) => {
        setTimeout(() => {
            member.style.opacity = 1;
        }, index * 500); // Staggered animation
    });
});
