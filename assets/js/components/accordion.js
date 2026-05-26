/**
 * Accordion Component (FAQ)
 * Handles accessible accordion interactions.
 */

export function initAccordion() {
    const buttons = document.querySelectorAll('.faq-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            const contentId = button.getAttribute('aria-controls');
            const content = document.getElementById(contentId);
            const icon = button.querySelector('svg');
            
            // Toggle current
            if (isExpanded) {
                button.setAttribute('aria-expanded', 'false');
                content.classList.add('hidden');
                if (icon) icon.classList.remove('rotate-180');
            } else {
                button.setAttribute('aria-expanded', 'true');
                content.classList.remove('hidden');
                if (icon) icon.classList.add('rotate-180');
            }
        });

        // Keyboard navigation (Arrow keys)
        button.addEventListener('keydown', (e) => {
            const index = Array.from(buttons).indexOf(button);
            
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                const nextIndex = (index + 1) % buttons.length;
                buttons[nextIndex].focus();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                const prevIndex = (index - 1 + buttons.length) % buttons.length;
                buttons[prevIndex].focus();
            } else if (e.key === 'Home') {
                e.preventDefault();
                buttons[0].focus();
            } else if (e.key === 'End') {
                e.preventDefault();
                buttons[buttons.length - 1].focus();
            }
        });
    });
}
