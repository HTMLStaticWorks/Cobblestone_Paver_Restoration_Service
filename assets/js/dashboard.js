// Basic Dashboard Logic
document.addEventListener('DOMContentLoaded', () => {
    // Analytics simulation
    const ordersCount = document.getElementById('ordersCount');
    if (ordersCount) {
        let count = 1240;
        setInterval(() => {
            count += Math.floor(Math.random() * 5);
            ordersCount.innerText = count.toLocaleString();
        }, 3000);
    }

    // Handle section switching (simple version)
    const navLinks = document.querySelectorAll('.sidebar .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
