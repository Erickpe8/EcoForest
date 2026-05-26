/**
 * Form Component
 * Handles accessible form validation and submission.
 */

export function initForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const statusDiv = document.getElementById('form-status');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        const fields = ['nombre', 'email', 'mensaje'];
        let firstInvalidField = null;

        fields.forEach(fieldId => {
            const input = document.getElementById(fieldId);
            const errorMsg = document.getElementById(`${fieldId}-error`);
            
            if (!input.value.trim()) {
                isValid = false;
                input.setAttribute('aria-invalid', 'true');
                errorMsg.classList.remove('hidden');
                if (!firstInvalidField) firstInvalidField = input;
            } else if (fieldId === 'email' && !isValidEmail(input.value)) {
                isValid = false;
                input.setAttribute('aria-invalid', 'true');
                errorMsg.classList.remove('hidden');
                errorMsg.textContent = 'Por favor, ingresa un formato de correo válido (ej. nombre@dominio.com).';
                if (!firstInvalidField) firstInvalidField = input;
            } else {
                input.setAttribute('aria-invalid', 'false');
                errorMsg.classList.add('hidden');
            }
        });

        if (!isValid) {
            statusDiv.textContent = 'El formulario contiene errores. Por favor, revisa los campos marcados.';
            if (firstInvalidField) {
                firstInvalidField.focus();
            }
        } else {
            // Simulate successful submission
            statusDiv.textContent = 'Formulario enviado con éxito. Nos pondremos en contacto pronto.';
            form.reset();
            
            // Show success toast or message visually
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = '¡Enviado!';
            btn.classList.add('bg-success');
            btn.classList.remove('bg-primary');
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.classList.remove('bg-success');
                btn.classList.add('bg-primary');
                statusDiv.textContent = '';
            }, 5000);
        }
    });

    // Clear errors on input
    form.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('input', () => {
            if (input.getAttribute('aria-invalid') === 'true') {
                input.setAttribute('aria-invalid', 'false');
                const errorMsg = document.getElementById(`${input.id}-error`);
                if (errorMsg) errorMsg.classList.add('hidden');
            }
        });
    });
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
