// Get the current year and last modified date
const currentDate = new Date();
const year = currentDate.getFullYear();
const lastModified = document.lastModified;

// Update the footer with the current year and last modified date
document.getElementById("last-modified").textContent = "Last Update "+lastModified;