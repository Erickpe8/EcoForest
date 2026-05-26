/**
 * Main Entry Point
 */

import { initAccessibilityWidget } from './accessibility/widget.js';
import { initAccordion } from './components/accordion.js';
import { initForm } from './components/form.js';
import { initStats } from './components/stats.js';
import { initNavbar } from './components/navbar.js';
import { initScrollAnimations } from './animations/scroll.js';
import { prefersReducedMotion } from './utils/helpers.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize components
    initAccessibilityWidget();
    initNavbar();
    initAccordion();
    initForm();
    initStats();
    initScrollAnimations();

    // Handle smooth scrolling for anchor links (fallback/enhancement)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                const behavior = document.body.classList.contains('pause-animations') || 
                               prefersReducedMotion() 
                               ? 'auto' : 'smooth';

                targetElement.scrollIntoView({
                    behavior: behavior
                });

                // Move focus to target for accessibility
                targetElement.setAttribute('tabindex', '-1');
                targetElement.focus();
                
                // Update URL without jumping
                history.pushState(null, null, targetId);
            }
        });
    });
});
