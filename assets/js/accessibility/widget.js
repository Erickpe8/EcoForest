/**
 * Accessibility Widget Module (Enhanced)
 */
import { trapFocus } from './focus-trap.js';

const STATE_KEY = 'ecoforest_a11y_preferences_v2';

const defaultState = {
    fontSize: 100,
    darkMode: false,
    highContrast: false,
    grayscale: false,
    dyslexiaFont: false,
    increasedSpacing: false,
    pauseAnimations: false,
    highlightLinks: false,
    largeCursor: false,
    readingGuide: false
};

let state = { ...defaultState };
let releaseFocusTrap = null;

export function initAccessibilityWidget() {
    loadState();
    applyState();
    setupEventListeners();
    setupReadingGuide();
}

function loadState() {
    try {
        const saved = localStorage.getItem(STATE_KEY);
        if (saved) {
            state = { ...defaultState, ...JSON.parse(saved) };
        } else {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                state.darkMode = true;
            }
            if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                state.pauseAnimations = true;
            }
        }
    } catch (e) {
        console.error('Error loading accessibility state:', e);
    }
}

function saveState() {
    try {
        localStorage.setItem(STATE_KEY, JSON.stringify(state));
    } catch (e) {
        console.error('Error saving accessibility state:', e);
    }
}

function applyState() {
    const root = document.documentElement;
    const body = document.body;

    // Font Size
    root.style.setProperty('--font-base-size', `${16 * (state.fontSize / 100)}px`);
    const fontSizeVal = document.getElementById('font-size-val');
    if (fontSizeVal) fontSizeVal.textContent = `${state.fontSize}%`;
    const fontSizeRange = document.getElementById('font-size-range');
    if (fontSizeRange) fontSizeRange.value = state.fontSize;

    // Toggles
    toggleClasses(root, 'dark', state.darkMode);
    toggleClasses(body, 'high-contrast', state.highContrast);
    toggleClasses(body, 'grayscale-mode', state.grayscale);
    toggleClasses(body, 'dyslexia-font', state.dyslexiaFont);
    toggleClasses(body, 'increased-spacing', state.increasedSpacing);
    toggleClasses(body, 'pause-animations', state.pauseAnimations);
    toggleClasses(body, 'highlight-links', state.highlightLinks);
    toggleClasses(body, 'large-cursor', state.largeCursor);

    // Reading Guide
    const guide = document.getElementById('reading-guide');
    if (guide) {
        if (state.readingGuide) {
            guide.classList.add('active');
        } else {
            guide.classList.remove('active');
        }
    }

    // Update UI Switches
    updateSwitch('toggle-dark-mode', state.darkMode);
    updateSwitch('toggle-high-contrast', state.highContrast);
    updateSwitch('toggle-grayscale', state.grayscale);
    updateSwitch('toggle-dyslexia', state.dyslexiaFont);
    updateSwitch('toggle-spacing', state.increasedSpacing);
    updateSwitch('toggle-animations', state.pauseAnimations);
    updateSwitch('toggle-highlight-links', state.highlightLinks);
    updateSwitch('toggle-large-cursor', state.largeCursor);
    updateSwitch('toggle-reading-guide', state.readingGuide);
}

function toggleClasses(element, className, condition) {
    if (condition) {
        element.classList.add(className);
    } else {
        element.classList.remove(className);
    }
}

function updateSwitch(id, condition) {
    const btn = document.getElementById(id);
    if (!btn) return;
    
    btn.setAttribute('aria-checked', condition.toString());
    const span = btn.querySelector('span');
    if (span) {
        if (condition) {
            span.classList.add('translate-x-6');
            span.classList.remove('translate-x-1');
            btn.classList.add('bg-primary');
            btn.classList.remove('bg-gray-300');
        } else {
            span.classList.remove('translate-x-6');
            span.classList.add('translate-x-1');
            btn.classList.remove('bg-primary');
            btn.classList.add('bg-gray-300');
        }
    }
}

function setupEventListeners() {
    const btnToggle = document.getElementById('btn-accessibility-toggle');
    const btnClose = document.getElementById('btn-close-a11y');
    const panel = document.getElementById('accessibility-panel');
    const mainContent = document.getElementById('main-content');

    const togglePanel = () => {
        if (!panel) return;
        const isHidden = panel.classList.contains('hidden');
        if (isHidden) {
            panel.classList.remove('hidden');
            requestAnimationFrame(() => {
                panel.classList.remove('translate-x-full');
            });
            btnToggle.setAttribute('aria-expanded', 'true');
            mainContent.setAttribute('aria-hidden', 'true'); // Hide main content from screen readers
            
            // Trap focus
            releaseFocusTrap = trapFocus(panel);
            setTimeout(() => {
                btnClose.focus();
            }, 100);
        } else {
            panel.classList.add('translate-x-full');
            btnToggle.setAttribute('aria-expanded', 'false');
            mainContent.removeAttribute('aria-hidden');
            
            if (releaseFocusTrap) {
                releaseFocusTrap();
                releaseFocusTrap = null;
            }
            
            btnToggle.focus();
            setTimeout(() => {
                panel.classList.add('hidden');
            }, 500);
        }
    };

    if (btnToggle && panel && btnClose) {
        btnToggle.addEventListener('click', togglePanel);
        btnClose.addEventListener('click', togglePanel);

        // Global Keyboard Shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !panel.classList.contains('hidden')) {
                togglePanel();
            }
            // Alt + A to open/close panel
            if (e.altKey && e.key.toLowerCase() === 'a') {
                e.preventDefault();
                togglePanel();
            }
        });
    }

    // Font Size
    const fontSizeRange = document.getElementById('font-size-range');
    if (fontSizeRange) {
        fontSizeRange.addEventListener('input', (e) => {
            state.fontSize = parseInt(e.target.value, 10);
            applyState();
            saveState();
        });
    }

    // Switches
    const switches = [
        { id: 'toggle-dark-mode', key: 'darkMode' },
        { id: 'toggle-high-contrast', key: 'highContrast' },
        { id: 'toggle-grayscale', key: 'grayscale' },
        { id: 'toggle-dyslexia', key: 'dyslexiaFont' },
        { id: 'toggle-spacing', key: 'increasedSpacing' },
        { id: 'toggle-animations', key: 'pauseAnimations' },
        { id: 'toggle-highlight-links', key: 'highlightLinks' },
        { id: 'toggle-large-cursor', key: 'largeCursor' },
        { id: 'toggle-reading-guide', key: 'readingGuide' }
    ];

    switches.forEach(({ id, key }) => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener('click', () => {
                state[key] = !state[key];
                applyState();
                saveState();
            });
        }
    });

    // Reset
    const btnReset = document.getElementById('btn-reset-a11y');
    if (btnReset) {
        btnReset.addEventListener('click', () => {
            state = { ...defaultState };
            activeProfile = null;
            
            // Remove visual active state from profile buttons
            document.querySelectorAll('.a11y-profile-btn').forEach(btn => {
                btn.classList.remove('ring-2', 'ring-primary', 'border-primary');
                btn.setAttribute('aria-pressed', 'false');
            });
            
            applyState();
            saveState();
        });
    }

    // Profiles
    const profileBtns = document.querySelectorAll('.a11y-profile-btn');
    profileBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const profile = btn.getAttribute('data-profile');
            applyProfile(profile);
        });
    });
}

let activeProfile = null;

function applyProfile(profile) {
    // If clicking the currently active profile, turn it off (reset to default)
    if (activeProfile === profile) {
        state = { ...defaultState };
        activeProfile = null;
        
        // Remove visual active state from buttons
        document.querySelectorAll('.a11y-profile-btn').forEach(btn => {
            btn.classList.remove('ring-2', 'ring-primary', 'border-primary');
            btn.setAttribute('aria-pressed', 'false');
        });
    } else {
        // Turn on the new profile
        state = { ...defaultState };
        activeProfile = profile;
        
        switch (profile) {
            case 'vision':
                state.fontSize = 130;
                state.highContrast = true;
                state.largeCursor = true;
                state.highlightLinks = true;
                break;
            case 'cognitive':
                state.dyslexiaFont = true;
                state.increasedSpacing = true;
                state.pauseAnimations = true;
                state.readingGuide = true;
                break;
        }
        
        // Update visual active state for buttons
        document.querySelectorAll('.a11y-profile-btn').forEach(btn => {
            if (btn.getAttribute('data-profile') === profile) {
                btn.classList.add('ring-2', 'ring-primary', 'border-primary');
                btn.setAttribute('aria-pressed', 'true');
            } else {
                btn.classList.remove('ring-2', 'ring-primary', 'border-primary');
                btn.setAttribute('aria-pressed', 'false');
            }
        });
    }
    
    applyState();
    saveState();
}

function setupReadingGuide() {
    const guide = document.getElementById('reading-guide');
    if (!guide) return;

    document.addEventListener('keydown', (e) => {
        // Alt + R to toggle reading guide
        if (e.altKey && e.key.toLowerCase() === 'r') {
            e.preventDefault();
            state.readingGuide = !state.readingGuide;
            applyState();
            saveState();
        }
    });

    document.addEventListener('mousemove', (e) => {
        if (state.readingGuide) {
            guide.style.top = `${e.clientY}px`;
        }
    });
}
