    const slides = document.querySelectorAll('#slideshow img');
    let currentIndex = 0;
  
    setInterval(() => {
      // Remove "active" from current slide
      slides[currentIndex].classList.remove('active');
  
      // Go to next slide (or loop back to start)
      currentIndex = (currentIndex + 1) % slides.length;
  
      // Add "active" to new current slide
      slides[currentIndex].classList.add('active');
    }, 3000); // Change slide every 3 seconds
