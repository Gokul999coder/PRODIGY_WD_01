document.addEventListener('DOMContentLoaded', function() 
{
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar nav ul li a');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            link.style.color = '#ff9900';
        });
        link.addEventListener('mouseout', function() {
            link.style.color = '';
        });
    });
});
