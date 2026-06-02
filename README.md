# EcoForest 🌲

Plataforma web premium enfocada en la sostenibilidad ambiental y la protección de ecosistemas, diseñada con los más altos estándares de accesibilidad europea y experiencia de usuario.

![EcoForest Preview](https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80)

## 🌟 Características Principales

### Accesibilidad Enterprise (WCAG 2.2 AA & EAA 2025)
- **Widget Flotante Avanzado:** Perfiles rápidos para baja visión y cognitivos.
- **Ajustes Visuales:** Modo oscuro, alto contraste, escala de grises.
- **Tipografía Inclusiva:** Soporte para fuente de dislexia (OpenDyslexic) y espaciado aumentado.
- **Navegación Asistida:** Guía de lectura (Alt+R), cursor grande, resaltado de enlaces.
- **Navegación por Teclado:** Focus trapping en modales, skip links, y outline visible.
- **Respeto al Usuario:** Soporte nativo para `prefers-reduced-motion` y `prefers-color-scheme`.

### Diseño Premium y UX
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
