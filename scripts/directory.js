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

    // Add event listeners to toggle buttons
    const gridButton = document.querySelector('#grid-btn');
    const listButton = document.querySelector('#list-btn');

    gridButton.addEventListener('click', () => {
      gridContainer.classList.remove('list-view');
      document.querySelectorAll('.item').forEach(item => item.classList.remove('list-view'));
    });

    listButton.addEventListener('click', () => {
      gridContainer.classList.add('list-view');
      document.querySelectorAll('.item').forEach(item => item.classList.add('list-view'));
    });
  })
  .catch(error => console.error('Error loading JSON data:', error));