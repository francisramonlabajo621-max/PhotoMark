// Fade-in animations for posts and images

(function() {
    'use strict';

    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle lazy loaded images
    function handleLazyImages() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        images.forEach((img) => {
            if (img.complete) {
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.6s ease';
                setTimeout(() => {
                    img.style.opacity = '1';
                }, 100);
            } else {
                img.addEventListener('load', function() {
                    this.style.opacity = '0';
                    this.style.transition = 'opacity 0.6s ease';
                    setTimeout(() => {
                        this.style.opacity = '1';
                    }, 100);
                });
            }
        });
    }

    // Intersection Observer for fade-in animations
    function setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe post cards
        const postCards = document.querySelectorAll('.post-card');
        postCards.forEach((card) => {
            observer.observe(card);
        });

        // Observe images
        const images = document.querySelectorAll('.post-image-large img, .post-image img');
        images.forEach((img) => {
            observer.observe(img);
        });

        // Observe comments
        const comments = document.querySelectorAll('.comment');
        comments.forEach((comment, index) => {
            comment.style.opacity = '0';
            comment.style.transform = 'translateY(20px)';
            comment.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
            observer.observe(comment);
        });
    }

    // Smooth scroll behavior
    function setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href !== '#' && href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }

    // Initialize on DOM load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            handleLazyImages();
            setupIntersectionObserver();
            setupSmoothScroll();
        });
    } else {
        handleLazyImages();
        setupIntersectionObserver();
        setupSmoothScroll();
    }
})();


