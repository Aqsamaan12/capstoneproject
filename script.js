// JavaScript for dynamically featured speakers
const speakers = [
  {
    name: 'Anjali Sastry',
    title: 'Senior Lecturer at MIT ',
    description: 'Expert in global health delivery, applying management and systems thinking to improve public health.',
    image: 'images/alex-amouyel.jpg',
  },
  {
    name: 'Neal Khosla',
    title: 'CEO of Curai',
    description: 'Focused on using AI to improve healthcare access and outcomes at Curai.',
    image: 'images/nael.jpg'
  },
  {
    name: 'Dana Teppert',
    title: 'Chief Strategy Officer ',
    description: 'Leads global innovation efforts to bring sustainable and impactful solutions to developing countries.',
    image: 'images/dana.jpg',
  },
  {
    name: 'Alex Amouyel',
    title: 'Executive Director MIT',
    description: 'Driving innovation challenges to solve world problems through open innovation.',
    image: 'images/anjl.jpg',
  },
  {
    name: 'Matthew Kalil',
    title: 'Director of Innovation at UNDP',
    description: 'Focused on creating systems and platforms for sustainable development and collaboration.',
    image: 'images/maten.jpg',
  },
  {
    name: 'Raj Panjabi',
    title: 'CEO of Mile Health',
    description: 'Global health innovator, improving access to health services in remote areas.',
    image: 'images/raj.jpg',
  },
];

// Function to show notification
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.innerText = message;
  document.body.appendChild(notification);

  // Automatically remove notification after 3 seconds
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Function to load speakers dynamically
function loadSpeakers() {
  const speakersContainer = document.getElementById('speakers');
  speakers.forEach((speaker) => {
    const speakerDiv = document.createElement('div');
    speakerDiv.classList.add('speaker');
    speakerDiv.innerHTML = `
      <img src="${speaker.image}" alt="${speaker.name}">
      
      <h4>${speaker.name}</h4>
      <p><strong>${speaker.title}</strong></p>
      <p>${speaker.description}</p>
    `;
    speakersContainer.appendChild(speakerDiv);
  });
}

// Load speakers on page load
window.onload = loadSpeakers;

// Button by ID
const ctaButton = document.getElementById('ctaButton');

// Click event
ctaButton.addEventListener('click', () => {
  // Action: Show notification instead of alert
  showNotification('You clicked the empty button');
});

// Hamburger menu functionality
document.getElementById('hamburger').addEventListener('click', () => {
  const navLinks = document.getElementById('nav-links-container');
  navLinks.classList.toggle('active'); // Toggles the menu visibility
});
