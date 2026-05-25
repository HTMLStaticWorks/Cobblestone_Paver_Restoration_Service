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

function updateRtlStylesheet(isRtl) {
    const bsLinks = document.querySelectorAll('link[href*="bootstrap"]');
    bsLinks.forEach(link => {
        if (link.href.includes('bootstrap.min.css') || link.href.includes('bootstrap.rtl.min.css')) {
            link.href = isRtl 
                ? "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.rtl.min.css" 
                : "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css";
        }
    });
}

rtlToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const isRtl = html.getAttribute('dir') === 'rtl';
        const newRtl = !isRtl;
        html.setAttribute('dir', newRtl ? 'rtl' : 'ltr');
        localStorage.setItem('rtlMode', newRtl);
        updateRtlStylesheet(newRtl);
    });
});

// Load RTL Mode
if (localStorage.getItem('rtlMode') === 'true') {
    html.setAttribute('dir', 'rtl');
    updateRtlStylesheet(true);
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
