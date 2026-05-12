// Theme Toggle
const themeToggles = document.querySelectorAll('.theme-toggle');
const body = document.documentElement;

themeToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateAllThemeIcons(newTheme);
    });
});

// Check saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-bs-theme', savedTheme);
    updateAllThemeIcons(savedTheme);
}

function updateAllThemeIcons(theme) {
    themeToggles.forEach(toggle => {
        const icon = toggle.querySelector('i');
        if (icon) {
            icon.className = theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill';
        }
    });
}

// Back to Top Button
const backToTop = document.getElementById('backToTop');
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        if (backToTop) backToTop.style.display = "flex";
    } else {
        if (backToTop) backToTop.style.display = "none";
    }
};

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// RTL Toggle
const rtlToggles = document.querySelectorAll('.rtl-toggle');
const html = document.documentElement;

rtlToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const isRtl = html.getAttribute('dir') === 'rtl';
        html.setAttribute('dir', isRtl ? 'ltr' : 'rtl');
        localStorage.setItem('rtlMode', !isRtl);
    });
});

// Load RTL Mode
if (localStorage.getItem('rtlMode') === 'true') {
    html.setAttribute('dir', 'rtl');
}

// Newsletter Form
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    });
}
