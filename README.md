# EcoForest 🌲

Plataforma web premium enfocada en la sostenibilidad ambiental y la protección de ecosistemas, diseñada como un proyecto de **Landing Page enfocada en usuarios avanzados, aplicando estándares internacionales de accesibilidad (WCAG 2.2 AA) y normativas europeas (EAA 2025)**.

## 📊 Análisis del Diseño, Accesibilidad y Usabilidad

Este proyecto no es solo una página informativa, sino una implementación técnica rigurosa de usabilidad y accesibilidad. A continuación se presenta el análisis de las decisiones tomadas:

### 1. Análisis del Diseño (Enfoque Premium e Institucional)
El diseño visual se construyó bajo una estética *Premium/Enterprise* (inspirada en referentes como Apple, Stripe o Vercel), buscando transmitir confianza, modernidad y seriedad institucional.
- **Glassmorphism y Profundidad:** Se aplicaron efectos translúcidos (`backdrop-filter`) y sombras escalonadas (`box-shadow`) para crear una jerarquía visual clara sin saturar la vista.
- **Paleta de Colores:** Se utilizó un esquema de colores basado en tonos esmeralda y pizarra (Slate), garantizando que la estética ecológica no comprometa el contraste.
- **Minimalismo Funcional:** Se eliminaron elementos distractores (como glows excesivos o animaciones agresivas) para mantener la atención del usuario en el mensaje principal y los Call to Action (CTA).

### 2. Análisis de Accesibilidad (Estándares Internacionales y Europeos)
La aplicación cumple estrictamente con las Pautas de Accesibilidad para el Contenido Web (**WCAG 2.2 Nivel AA**) y se anticipa al Acta Europea de Accesibilidad (**EAA 2025**).
- **Semántica HTML5:** Uso riguroso de landmarks (`<header>`, `<main>`, `<section>`, `<nav>`) para que los lectores de pantalla (NVDA, JAWS, VoiceOver) puedan estructurar el contenido correctamente.
- **Navegación por Teclado:** Implementación de *Focus Trapping* en modales (como el menú móvil y el widget de accesibilidad), asegurando que los usuarios que no usan ratón no pierdan el foco. Todos los elementos interactivos tienen un `outline` visible de alto contraste.
- **Atributos ARIA Dinámicos:** Uso de `aria-expanded`, `aria-live` (para anunciar errores de formulario o cambios en contadores) y `aria-pressed` para comunicar el estado de la interfaz en tiempo real.
- **Contraste:** Todos los textos superan el ratio mínimo de contraste de 4.5:1 (AA), y en muchos casos alcanzan el 7:1 (AAA).

### 3. Análisis de Usabilidad (Widget Avanzado)
Para atender a usuarios con necesidades específicas (baja visión, dislexia, TDAH, etc.), se desarrolló un **Widget de Accesibilidad** modular y persistente (guarda preferencias en `localStorage`):
- **Personalización Total:** Permite al usuario tomar el control de la interfaz (escalar texto, cambiar a modo oscuro, escala de grises, alto contraste).
- **Perfiles Inteligentes:** Agrupa configuraciones complejas en un solo clic (Ej. Perfil "Cognitivo" activa fuente para dislexia, pausa animaciones y muestra guía de lectura).
- **Respeto a las Preferencias del SO:** La aplicación detecta automáticamente si el usuario tiene configurado `prefers-reduced-motion` en su sistema operativo y desactiva las animaciones por defecto.

## 🎯 Público Objetivo y Población Enfocada

EcoForest ha sido diseñada bajo el principio de **Diseño Universal**, lo que significa que su público objetivo abarca un espectro muy amplio y diverso, garantizando que nadie quede excluido de la iniciativa ecológica:

1. **Usuarios con Discapacidades (Enfoque Prioritario):** 
   Gracias al cumplimiento estricto de las normativas **WCAG 2.2 AA** y **EAA 2025** (Acta Europea de Accesibilidad), la plataforma está orientada a ser 100% usable por personas con:
   - *Discapacidades visuales:* Baja visión, daltonismo o fotofobia (mediante alto contraste, escalado de texto y modo oscuro).
   - *Discapacidades cognitivas:* Dislexia o TDAH (mediante fuentes especializadas, reducción de animaciones y guías de lectura).
   - *Discapacidades motrices:* Usuarios que no pueden usar un ratón (mediante navegación completa por teclado y cursores adaptados).

2. **Ciudadanía General y Activistas Ambientales:** 
   Personas de cualquier edad interesadas en el medio ambiente, el cambio climático y la ecología que buscan informarse, donar o participar como voluntarios en proyectos de reforestación.

3. **Instituciones y Sector Corporativo:** 
   Empresas, ONGs y organizaciones gubernamentales que buscan alianzas estratégicas para compensar su huella de carbono y cumplir con sus objetivos de Responsabilidad Social Corporativa (RSC).

4. **Comunidad Educativa:** 
   Estudiantes, profesores e investigadores que requieran información clara, estructurada y accesible sobre el impacto ambiental y los beneficios vitales de los árboles.

## 🌟 Características Principales

### ♿ Funciones de Accesibilidad y Usabilidad (WCAG 2.2 AA & EAA 2025)

El proyecto incluye un **Widget de Accesibilidad Avanzado** (accesible mediante el botón flotante o el atajo `Alt + A`) y mejoras estructurales profundas. A continuación se detalla cada función, su propósito y la normativa que la respalda:

| Función | Descripción de Usabilidad | Regla / Criterio que la respalda |
| :--- | :--- | :--- |
| **Modo Oscuro** | Cambia la paleta a colores oscuros para reducir la fatiga visual, el deslumbramiento y ayudar a usuarios con fotofobia. | *WCAG 1.4.8 Visual Presentation (AAA)* / Accesibilidad Cognitiva |
| **Alto Contraste** | Aumenta drásticamente la diferencia de color entre el texto y el fondo (blanco puro sobre negro absoluto) para usuarios con baja visión. | *WCAG 1.4.6 Contrast (Enhanced) (AAA)* |
| **Escala de Grises** | Elimina los colores de la interfaz. Útil para usuarios con daltonismo severo o para reducir la sobrecarga sensorial. | *WCAG 1.4.1 Use of Color (A)* |
| **Tamaño de Texto** | Permite escalar la tipografía hasta un 200% sin pérdida de contenido ni funcionalidad, facilitando la lectura. | *WCAG 1.4.4 Resize Text (AA)* |
| **Fuente Dislexia** | Cambia la tipografía a *OpenDyslexic*, diseñada específicamente para prevenir la rotación y confusión de letras. | *WCAG 3.1.5 Reading Level (AAA)* / Accesibilidad Cognitiva |
| **Aumentar Espaciado** | Incrementa el interlineado y el espacio entre letras/palabras para evitar el amontonamiento visual y facilitar la lectura. | *WCAG 1.4.12 Text Spacing (AA)* |
| **Pausar Animaciones** | Detiene todo movimiento, transiciones y auto-scroll para evitar mareos, distracciones o convulsiones. | *WCAG 2.2.2 Pause, Stop, Hide (A)* / *2.3.3 Animation from Interactions (AAA)* |
| **Resaltar Enlaces** | Subraya y destaca visualmente con un fondo amarillo todos los elementos clickeables para no depender solo del color. | *WCAG 1.4.1 Use of Color (A)* / *WCAG 2.4.7 Focus Visible (AA)* |
| **Cursor Grande** | Aumenta significativamente el tamaño del puntero para facilitar el seguimiento visual y el control motriz del ratón. | Accesibilidad Motriz y Visual (*WCAG 1.4.8*) |
| **Guía de Lectura** | Muestra una línea horizontal que sigue al ratón (`Alt + R`) para ayudar a mantener el foco en bloques de texto largos (TDAH). | Accesibilidad Cognitiva |
| **Perfiles Inteligentes** | Agrupa configuraciones predefinidas (Baja Visión, Cognitivo) para una activación rápida de múltiples ayudas simultáneas. | *EAA 2025* (Requisitos de Personalización) |
| **Skip Links & Focus Trap** | Enlace oculto para saltar al contenido principal y retención de foco en modales/menús para usuarios que navegan por teclado. | *WCAG 2.4.1 Bypass Blocks (A)* / *WCAG 2.1.2 No Keyboard Trap (A)* |

### 💎 Diseño Premium y UX
- **Glassmorphism:** Efectos translúcidos sutiles y elegantes.
- **Responsive Design:** Experiencia fluida desde dispositivos móviles hasta pantallas ultra anchas.
- **Performance:** Animaciones optimizadas con `requestAnimationFrame` e `IntersectionObserver`.
- **SEO Semántico:** Estructura HTML5 perfecta, Open Graph, Twitter Cards y JSON-LD.

## 🛠️ Stack Tecnológico

- **HTML5 Semántico**
- **TailwindCSS** (vía CDN para ejecución inmediata sin build process)
- **Vanilla JavaScript** (Arquitectura modular ES6)
- **Sin Frameworks** (Cero dependencias pesadas como React o Vue)

## 📂 Arquitectura del Proyecto

```text
/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   ├── base.css          # Tokens, variables CSS y resets
    │   ├── components.css    # Estilos de UI (cards, botones, glassmorphism)
    │   ├── utilities.css     # Clases de utilidad y animaciones
    │   ├── accessibility.css # Overrides para alto contraste y dislexia
    │   └── styles.css        # Entry point de estilos
    └── js/
        ├── main.js           # Entry point de JavaScript
        ├── accessibility/    # Lógica del widget y focus trap
        ├── animations/       # Controladores de scroll y fade-ins
        ├── components/       # Lógica de navbar, acordeones, form y contadores
        └── utils/            # Funciones de ayuda (debounce, helpers)
```

## 🚀 Cómo ejecutar en local

Dado que el proyecto utiliza módulos de JavaScript (`<script type="module">`), es necesario ejecutarlo a través de un servidor local para evitar bloqueos de seguridad del navegador (CORS).

### Opción 1: Usando Node.js (npx)
Si tienes Node.js instalado, abre tu terminal y ejecuta:
```bash
npx http-server -p 3000
```
Luego visita `http://localhost:3000`

### Opción 2: Usando VS Code / Cursor
1. Instala la extensión **Live Server**.
2. Haz clic derecho sobre el archivo `index.html`.
3. Selecciona **"Open with Live Server"**.

## 🌐 Despliegue

El proyecto está configurado con **GitHub Actions** para desplegarse automáticamente en GitHub Pages cada vez que se hace un push a la rama `main`.

---
*Desarrollado con un enfoque en la sostenibilidad digital y la inclusión universal.*
