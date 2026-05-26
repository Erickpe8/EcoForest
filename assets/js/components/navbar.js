/**
 * Navbar Component
 * Handles sticky state and mobile menu
 */

import { debounce } from '../utils/helpers.js';
import { trapFocus } from '../accessibility/focus-trap.js';

export function initNavbar() {
    const header = document.getElementById('main-header');
    const btnMobileMenu = document.getElementById('btn-mobile-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    const mainContent = document.getElementById('main-content');
    
    if (!header) return;

    // Sticky Header Logic
    const handleScroll = debounce(() => {
        if (window.scrollY > 10) {
            header.classList.add('bg-surface/95', 'backdrop-blur-md', 'border-b', 'shadow-sm');
            header.classList.remove('bg-surface/80', 'border-transparent', 'shadow-none');
        } else {
            header.classList.remove('bg-surface/95', 'backdrop-blur-md', 'border-b', 'shadow-sm');
            header.classList.add('bg-surface/80', 'border-transparent', 'shadow-none');
        }
    }, 10);

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Init

    // Mobile Menu Logic
    if (!btnMobileMenu || !mobileMenu) return;

    let isMenuOpen = false;
    let releaseFocusTrap = null;

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            // Open
            mobileMenu.classList.remove('translate-x-full');
            btnMobileMenu.setAttribute('aria-expanded', 'true');
            
            // Change icon to X
            btnMobileMenu.innerHTML = `
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            `;
            
            // Accessibility
            mainContent.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
            
            // Trap focus
            releaseFocusTrap = trapFocus(mobileMenu);
            
            // Focus first link after animation
            setTimeout(() => {
                if (mobileLinks.length > 0) mobileLinks[0].focus();
            }, 300);

        } else {
            // Close
            mobileMenu.classList.add('translate-x-full');
            btnMobileMenu.setAttribute('aria-expanded', 'false');
            
            // Change icon back to hamburger
            btnMobileMenu.innerHTML = `
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            `;
            
            // Accessibility
            mainContent.removeAttribute('aria-hidden');
            document.body.style.overflow = '';
            
            if (releaseFocusTrap) {
                releaseFocusTrap();
                releaseFocusTrap = null;
            }
            
            btnMobileMenu.focus();
        }
    };

    btnMobileMenu.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) toggleMenu();
        });
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isMenuOpen) {
            toggleMenu();
        }
    });
}
