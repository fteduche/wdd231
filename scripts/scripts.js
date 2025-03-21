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
  
  // Function for filter
  const allBtn = document.getElementById('all-btn');
  const cseBtn = document.getElementById('cse-btn');
  const wddBtn = document.getElementById('wdd-btn');
  const items = document.querySelectorAll('.grid-container div');
  
  allBtn.addEventListener('click', () => {
    items.forEach(item => item.style.display = 'block');
  });
  
  cseBtn.addEventListener('click', () => {
    items.forEach(item => {
      if (item.classList.contains('cse')) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
  
  wddBtn.addEventListener('click', () => {
    items.forEach(item => {
      if (item.classList.contains('wdd')) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
  
  // Get the current year and last modified date
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const lastModified = document.lastModified;
  
  // Update the footer with the current year and last modified date
  document.getElementById("last-modified").textContent = "Last Update: " + lastModified;
  
  // Load JSON data
fetch('data/directory.json')
.then(response => response.json())
.then(data => {
  // Update HTML elements with JSON data
  const gridContainer = document.querySelector('.grid-container');
  gridContainer.innerHTML = '';

  data.forEach(member => {
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
})
.catch(error => console.error('Error loading JSON data:', error));
