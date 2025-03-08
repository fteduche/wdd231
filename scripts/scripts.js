document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });
});

// Call functions on page load
window.onload = () => {
    displayFooterInfo();
  };


// Add event listener to the hamburger menu button
document.getElementById("hamburger-menu").addEventListener("click", () => {
    // Toggle the navigation menu
    const nav = document.querySelector("nav ul");
    nav.classList.toggle("show");
});

// Add event listener to the window to toggle the navigation menu on resize
window.addEventListener("resize", () => {
    const nav = document.querySelector("nav ul")});


// Get the current year and last modified date
const currentDate = new Date();
const year = currentDate.getFullYear();
const lastModified = document.lastModified;

// Update the footer with the current year and last modified date
document.getElementById("last-modified").textContent = "Last Update "+lastModified;