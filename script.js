// List of hero image URLs
const heroImages = [
    'HERO 1.jpg',
    'HERO 2.jpg',
    'HERO 3.jpg',
  ];
  
  // Pick a random image
  const randomImage = heroImages[Math.floor(Math.random() * heroImages.length)];
  
  // Apply the image to the element
  const heroElement = document.getElementById('hero-image');
  
  // If it's an <img> tag
  if (heroElement.tagName === 'IMG') {
    heroElement.src = randomImage;
  } else {
    // If it's a <div> with background
    heroElement.style.backgroundImage = `url('${randomImage}')`;
    heroElement.style.backgroundSize = 'cover';
    heroElement.style.backgroundPosition = 'center';
  }