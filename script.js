document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const closeMenu = document.querySelector('.close-menu');
    const offCanvasMenu = document.querySelector('.off-canvas-menu');
    const navLinks = document.querySelectorAll('.off-canvas-menu ul li a');

    // Open off-canvas menu
    hamburgerMenu.addEventListener('click', () => {
        offCanvasMenu.classList.add('open');
    });

    // Close off-canvas menu
    closeMenu.addEventListener('click', () => {
        offCanvasMenu.classList.remove('open');
    });

    // Close off-canvas menu when a navigation link is clicked (for smooth scrolling)
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Check if it's an internal anchor link (starts with #)
            if (link.getAttribute('href').startsWith('#')) {
                offCanvasMenu.classList.remove('open');
                // Optional: Smooth scroll if not handled by CSS/browser default
                // event.preventDefault(); // Uncomment if you want custom smooth scrolling
                // const targetId = link.getAttribute('href').substring(1);
                // document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
            }
            // External links will open as normal
        });
    });

    // Optional: Close menu when clicking outside (on overlay)
    // You'd need to add an overlay element in HTML for this to work well
    // For simplicity, we'll omit this for now, but it's a common UX improvement.
});
