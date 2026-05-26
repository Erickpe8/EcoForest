/**
 * Scroll Animations Module
 * Handles intersection observers for fade-in elements
 */

import { prefersReducedMotion } from '../utils/helpers.js';

export function initScrollAnimations() {
    if (prefersReducedMotion()) return;

    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        observer.observe(el);
    });
}
