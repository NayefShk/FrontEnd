// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Function to add the 'visible' class to sections in the viewport
function handleScroll() {
    const sections = document.querySelectorAll('.scroll-section');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('visible');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Trigger animations on page load for sections already in view
document.addEventListener('DOMContentLoaded', handleScroll);