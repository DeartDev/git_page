# Git & GitHub - Landing Page Interactiva

Una guía completa e interactiva sobre Git y GitHub, diseñada para desarrolladores de todos los niveles.

## Acerca del Proyecto

Esta landing page fue desarrollada **usando Termux** en un dispositivo Android, con el objetivo de proporcionar una recurso educativo accesible y moderno sobre control de versiones.

## Stack Tecnológico

- **HTML5** - Estructura semántica del sitio
- **CSS3** - Estilos con variables CSS, diseño responsive y animaciones
- **JavaScript (Vanilla)** - Funcionalidad interactiva sin librerías adicionales
- **Sin frameworks** - Implementación 100% nativa

## Características

- Diseño minimalista y profesional con tema oscuro
- Paleta de colores inspirada en terminal/hacker (verde neón, cyan, púrpura)
- Navegación fija con menú hamburguesa en móvil
- Botón "To Top" (esquina inferior derecha)
- Botón "Refresh" para limpiar cache (esquina inferior izquierda)
- Secciones interactivas con tabs (Git Flow / GitHub Flow)
- Acordeón de preguntas frecuentes
- Animaciones de entrada al hacer scroll
- Completamente responsivo

## Secciones Incluidas

1. **Hero** - Introducción y terminal interactiva
2. **¿Qué es Git?** - Conceptos fundamentales
3. **¿Qué es GitHub?** - Plataforma y funciones
4. **Metodología** - Git Flow y GitHub Flow
5. **Comandos Básicos** - Comandos esenciales para desarrolladores
6. **Tips y Recomendaciones** - Buenas prácticas
7. **Comandos Avanzados** - Rebase, tags, hooks, reflog, etc.
8. **Colaboración Open Source** - Fork, PRs, contribute
9. **Autenticación** - SSH, Token Classic, GitHub CLI
10. **.gitignore** - Ejemplos y configuración
11. **Configuración de Cuentas** - Setup paso a paso
12. **Errores Comunes** - Troubleshooting
13. **Glosario** - Términos esenciales
14. **FAQ** - Preguntas frecuentes
15. **Integraciones** - Herramientas y servicios

## Cómo Ejecutar

### Opción 1: Abrir directamente
Simplemente abre el archivo `index.html` en tu navegador.

### Opción 2: Servidor local (Termux)
```bash
cd /data/data/com.termux/files/home/projects/git_page
php -S localhost:8000
```
Luego visita `http://localhost:8000` en tu navegador.

### Opción 3: Python
```bash
cd /data/data/com.termux/files/home/projects/git_page
python -m http.server 8000
```

## Estructura del Proyecto

```
git_page/
├── index.html      # Archivo principal
├── css/
│   └── style.css   # Estilos del sitio
├── js/
│   └── main.js     # Funcionalidad interactiva
└── README.md       # Este archivo
```

## Información del Entorno

- **Plataforma**: Android (Termux)
- **Terminal**: zsh
- **Fecha de creación**: Abril 2026
- **Fonts**: JetBrains Mono, Inter (Google Fonts)

## Licencia

Este proyecto es de uso educativo y está disponible gratuitamente.