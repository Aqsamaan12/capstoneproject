// JavaScript for dynamically  featured speakers
const speakers = [
  {
    name: 'Anjali Sastry',
    title: 'Senior Lecturer at MIT Sloan School of Management',
    description: 'Expert in global health delivery, applying management and systems thinking to improve public health.',
    image: 'https://via.placeholder.com/100',
  },
  {
    name: 'Neal Khosla',
    title: 'CEO of Curai',
    description: 'Focused on using AI to improve healthcare access and outcomes at Curai.',
    image: 'https://via.placeholder.com/100',
  },
  {
    name: 'Dana Teppert',
    title: 'Chief Strategy Officer at Global Innovation Fund',
    description: 'Leads global innovation efforts to bring sustainable and impactful solutions to developing countries.',
    image: 'https://via.placeholder.com/100',
  },
  {
    name: 'Alex Amouyel',
    title: 'Executive Director of Solve at MIT',
    description: 'Driving innovation challenges to solve world problems through open innovation.',
    image: 'https://via.placeholder.com/100',
  },
  {
    name: 'Matthew Kalil',
    title: 'Director of Innovation at UNDP',
    description: 'Focused on creating systems and platforms for sustainable development and collaboration.',
    image: 'https://via.placeholder.com/100',
  },
  {
    name: 'Raj Panjabi',
    title: 'CEO of Last Mile Health',
    description: 'Global health innovator, improving access to health services in remote areas.',
    image: 'https://via.placeholder.com/100',
  },
];
// Function of speakers dynamically
function loadSpeakers() {
  const speakersContainer = document.getElementById('speakers');
  speakers.forEach((speaker) => {
    const speakerDiv = document.createElement('div');
    speakerDiv.classList.add('speaker');
    speakerDiv.innerHTML = `
            <img src="${speaker.image}" alt="${speaker.name}">
            <h4>${speaker.name}</h4>
            <p><strong>${speaker.title}</strong></p>
            <p>${speaker.description}</p>      `; speakersContainer.appendChild(speakerDiv);
  });
}
// Load speakers on page load
window.onload = loadSpeakers;
// button by ID
const ctaButton = document.getElementById('ctaButton');
// click event
ctaButton.addEventListener('click', () => {
  // action
  alert('You clicked empty button');
});
document.getElementById('hamburger').addEventListener('click', () => {
  const navLinks = document.getElementById('nav-links-container');
  navLinks.classList.toggle('active'); // Toggles the menu visibility
});