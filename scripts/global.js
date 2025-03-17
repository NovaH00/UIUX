// Show loading spinner
function showLoading() {
    document.body.classList.add('loading');
}

// Hide loading spinner
function hideLoading() {
    document.body.classList.remove('loading');
}

// Redirect with loading animation
function redirectWithDelay(url, delay_in_ms) {
    showLoading();
    setTimeout(() => {
        window.location.href = url;
    }, delay_in_ms);
}

// Toggle dark mode with fixed functionality
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Animate the background transition
    body.style.transition = "background 0.5s ease";

    // Save preference to localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);

    console.log('Dark mode toggled:', isDarkMode);

    // Update all theme-dependent elements
    updateThemeElements(isDarkMode);
}

// Function to update theme-dependent elements
function updateThemeElements(isDarkMode) {
    // Update document colors
    document.documentElement.style.colorScheme = isDarkMode ? 'dark' : 'light';

    // Apply transition to body background
    document.body.style.background = isDarkMode ?
        'linear-gradient(135deg, #121212, #2c2c2c)' :
        'linear-gradient(135deg, #6a11cb, #2575fc)';

    // Update any specific elements that need direct style changes
    const newsContainer = document.querySelector('.news-container');
    if (newsContainer) {
        newsContainer.style.backgroundColor = isDarkMode ? 'rgba(20, 20, 20, 0.8)' : 'rgba(255, 255, 255, 0.05)';
        newsContainer.style.borderColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'var(--input-border)';
    }

    // Update orbit particles if they exist (login page)
    const orbitParticles = document.querySelectorAll('.orbit-particle');
    if (orbitParticles.length > 0) {
        orbitParticles.forEach(particle => {
            particle.style.backgroundColor = isDarkMode ? '#ffffff' : '#000000';
        });
    }

    // Update dark mode toggle appearance
    const slider = document.querySelector('.slider');
    if (slider) {
        slider.style.transition = "all 0.4s ease";
    }
}

// Apply dark mode if saved in preferences
function applyDarkModePreference() {
    const darkModeSaved = localStorage.getItem('darkMode');
    console.log('Saved dark mode preference:', darkModeSaved);

    if (darkModeSaved === 'true') {
        document.body.classList.add('dark-mode');

        // Update toggle if exists
        const darkModeToggle = document.getElementById('darkModeToggle');
        if (darkModeToggle) {
            darkModeToggle.checked = true;
        }

        // Update theme-dependent elements
        updateThemeElements(true);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded, applying preferences');

    // Apply dark mode preference immediately
    applyDarkModePreference();

    // Ensure dark mode toggle works with direct event listener
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        // Remove existing listeners to avoid duplicates
        const newToggle = darkModeToggle.cloneNode(true);
        darkModeToggle.parentNode.replaceChild(newToggle, darkModeToggle);

        // Add fresh event listener
        newToggle.addEventListener('change', toggleDarkMode);
    }

    // Initialize animations
    initAnimations();

    // Hide loading spinner when page is fully loaded
    window.addEventListener('load', hideLoading);
});

// Add animation to elements with data-animate attribute
function initAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');

    animatedElements.forEach((element, index) => {
        const animation = element.getAttribute('data-animate');
        const delay = index * 100; // Stagger animations

        element.style.opacity = '0';
        element.style.animation = `${animation} 0.6s ease-out ${delay}ms forwards`;
    });
}
