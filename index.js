document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // Interactive Map
    const mapPoints = document.querySelectorAll('.map-point');
    const mapTooltip = document.querySelector('.map-tooltip');
    
    mapPoints.forEach(point => {
        point.addEventListener('mouseenter', function() {
            const city = this.getAttribute('data-city');
            mapTooltip.textContent = city;
            mapTooltip.style.left = `${this.offsetLeft + this.offsetWidth/2 - mapTooltip.offsetWidth/2}px`;
            mapTooltip.style.top = `${this.offsetTop - 40}px`;
            mapTooltip.style.opacity = '1';
        });
        
        point.addEventListener('mouseleave', function() {
            mapTooltip.style.opacity = '0';
        });
    });

    // Video Modal
    const videoModal = document.querySelector('.video-modal');
    const openModalBtn = document.querySelector('.cta-button');
    const closeModalBtn = document.querySelector('.close-modal');
    
    if (openModalBtn) {
        openModalBtn.addEventListener('click', function(e) {
            e.preventDefault();
            videoModal.classList.add('active');
        });
    }
    
    closeModalBtn.addEventListener('click', function() {
        videoModal.classList.remove('active');
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === videoModal) {
            videoModal.classList.remove('active');
        }
    });

    // Animation on Scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.trend-card, .city-card, .event-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.trend-card, .city-card, .event-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});