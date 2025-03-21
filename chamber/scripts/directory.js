document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const closeBtn = document.getElementById('close-btn');
  const nav = document.getElementById('nav');

  hamburger.addEventListener('click', () => {
    nav.classList.add('show');
  });

  closeBtn.addEventListener('click', () => {
    nav.classList.remove('show');
  });
});

// Call functions on page load
window.onload = () => {
  displayFooterInfo();
};
// Function to load JSON data
async function loadJSONData() {
  try {
    // Fetch JSON data using await
    const response = await fetch('data/members.json');
    const data = await response.json();

    // Update HTML elements with JSON data
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = '';

    data.forEach((member) => {
      const item = document.createElement('div');
      item.classList.add('item');

      const name = document.createElement('h2');
      name.textContent = member.name;

      const address = document.createElement('p');
      address.textContent = member.address;

      const phone = document.createElement('p');
      phone.textContent = member.phone;

      const website = document.createElement('a');
      website.href = member.website;
      website.textContent = member.website;

      const image = document.createElement('img');
      image.src = member.image;

      item.appendChild(name);
      item.appendChild(address);
      item.appendChild(phone);
      item.appendChild(website);
      item.appendChild(image);

      gridContainer.appendChild(item);
    });

    // Add event listeners to toggle buttons
    const gridButton = document.querySelector('#grid-btn');
    const listButton = document.querySelector('#list-btn');

    gridButton.addEventListener('click', () => {
      gridContainer.classList.remove('list-view');
      document.querySelectorAll('.item').forEach((item) => item.classList.remove('list-view'));
    });

    listButton.addEventListener('click', () => {
      gridContainer.classList.add('list-view');
      document.querySelectorAll('.item').forEach((item) => item.classList.add('list-view'));
    });
  } catch (error) {
    console.error('Error loading JSON data:', error);
  }
}

// Call the async function
loadJSONData();

// Get the current year and last modified date
const currentDate = new Date();
const year = currentDate.getFullYear();
const lastModified = document.lastModified;

// Update the footer with the current year and last modified date
document.getElementById("last-modified").textContent = "Last Update: " + lastModified;