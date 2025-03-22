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



// Login Parts

// transplant-script.js

document.getElementById('transplantLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('transplantUsername').value;
    const password = document.getElementById('transplantPassword').value;
    const errorMessage = document.getElementById('transplantErrorMessage');
    
    errorMessage.textContent = '';
    
    if (username === '' || password === '') {
        errorMessage.textContent = 'Both fields are required.';
    } else {
        console.log('Transplant Username:', username);
        console.log('Transplant Password:', password);
        errorMessage.textContent = 'Login successful!';
        errorMessage.style.color = 'green';
    }
});





