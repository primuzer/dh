// This function will add a smooth scrolling effect to the navigation links
function smoothScroll() {
  // Get all the links on the page
  const links = document.querySelectorAll('a');

  // Loop through each link
  links.forEach(link => {
    // Add an event listener to each link
    link.addEventListener('click', e => {
      // Prevent the default action
      e.preventDefault();

      // Get the href attribute of the link
      const href = link.getAttribute('href');

      // Get the element with the corresponding id
      const element = document.querySelector(href);

      // Calculate the position of the element
      const position = element.offsetTop;

      // Scroll to the element
      window.scrollTo({
        top: position,
        behavior: 'smooth'
      });
    });
  });
}

// Call the smoothScroll function
smoothScroll();