/**
 * Stats Component
 * Handles animated counters when they scroll into view.
 */

import { prefersReducedMotion } from '../utils/helpers.js';

export function initStats() {
    const counters = document.querySelectorAll('.counter');
    if (counters.length === 0) return;

    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000; // 2 seconds
        
        if (prefersReducedMotion() || document.body.classList.contains('pause-animations')) {
            counter.innerText = target.toLocaleString('es-ES');
            return;
        }

        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Ease out quad
            const easeProgress = progress * (2 - progress);
            
            counter.innerText = Math.floor(easeProgress * target).toLocaleString('es-ES');
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                counter.innerText = target.toLocaleString('es-ES');
            }
        };
        
        window.requestAnimationFrame(step);
    };

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
}
