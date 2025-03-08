document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      menu.classList.toggle('active');
      const nav = document.querySelector("nav ul");
      nav.classList.toggle("show");
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
  // Update the footer with the current year
  document.getElementById("last-modified").textContent = "  " + year;