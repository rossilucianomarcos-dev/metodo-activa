# Landing Page - Método ACTIVA

## Descripción
Landing page responsiva para el Método ACTIVA - Activación Completa y Transformación Interna para la Vitalidad Atlética.

## Tecnologías Utilizadas
- **HTML5**: Estructura semántica
- **CSS3**: Estilos personalizados con gradientes y animaciones
- **JavaScript**: Interactividad y efectos dinámicos
- **Bootstrap 5.3**: Framework responsivo
- **AOS (Animate On Scroll)**: Animaciones al hacer scroll
- **Font Awesome**: Iconos
- **Google Fonts**: Tipografías personalizadas

## Paleta de Colores

### Core Energy Palette
- **Cian eléctrico**: `#00E7FF`
- **Turquesa neuro-lumínico**: `#00FFC5`
- **Verde bioeléctrico**: `#3BFF59`

### Synaptic Spectrum
- **Azul profundo tecnológico**: `#2A3BFF`
- **Violeta digital**: `#A844FF`
- **Magenta energético**: `#FF3BDA`

### Vital Boost Layer
- **Naranja plasma**: `#FF8A23`
- **Amarillo fotónico**: `#FFDD33`
- **Rojo luminoso**: `#FF3E3E`

### Neutrales
- **Negro profundo**: `#000000`
- **Gris carbón**: `#111111`
- **Blanco puro**: `#FFFFFF`

## Tipografías

- **Títulos**: Montserrat Alternates (SemiBold/Bold/ExtraBold)
- **Subtítulos**: Exo 2 (Medium/SemiBold)
- **Cuerpo de texto**: Inter (Regular/Medium/SemiBold)
- **Botones CTA**: Poppins (Bold)

## Estructura de Archivos

```
metodo-activa-landing/
│
├── index.html          # Página principal
├── styles.css          # Estilos personalizados
├── script.js           # JavaScript interactivo
├── README.md           # Este archivo
│
└── images/             # Carpeta de imágenes
    ├── logo.jpg                # Logo del Método ACTIVA
    ├── hero-athlete.jpg        # Imagen hero principal
    ├── nervous-system.jpg      # Sistema nervioso
    ├── vital-energy.jpg        # Energía vital
    ├── peak-performance.jpg    # Rendimiento óptimo
    └── diverse-athletes.jpg    # Atletas diversos
```

## Secciones de la Landing

1. **Hero**: Portada con logo, título principal y CTA
2. **Introducción**: Qué es el Método ACTIVA
3. **Pilares**: Los 3 pilares fundamentales
4. **Beneficios**: Resultados comprobables
5. **Público Objetivo**: Para quién es el método
6. **Proceso**: Cómo funciona el método
7. **Diferenciadores**: Por qué ACTIVA es diferente
8. **CTA**: Llamado a la acción principal
9. **Contacto**: Formulario de contacto
10. **Footer**: Información y redes sociales

## Características

✅ **Diseño Responsivo**: Adaptable a todos los dispositivos
✅ **Animaciones Suaves**: Efectos visuales al hacer scroll
✅ **Gradientes Energéticos**: Paleta de colores vibrante y moderna
✅ **Navegación Fluida**: Smooth scroll entre secciones
✅ **Formulario Funcional**: Validación de campos
✅ **Efectos Hover**: Interactividad en elementos
✅ **Optimizado para SEO**: Estructura semántica HTML5
✅ **Accesibilidad**: Contraste adecuado y navegación por teclado

## Cómo Usar

1. Abre el archivo `index.html` en tu navegador
2. Navega por las diferentes secciones
3. Personaliza el contenido según tus necesidades
4. Para producción, integra el formulario con tu backend

## Personalización

### Cambiar Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --cyan-electric: #00E7FF;
    --turquoise-neuro: #00FFC5;
    /* ... más colores */
}
```

### Modificar Contenido
Edita directamente el HTML en `index.html`

### Ajustar Animaciones
Modifica los parámetros de AOS en `script.js`:
```javascript
AOS.init({
    duration: 1000,
    easing: 'ease-out-cubic',
    once: true
});
```

## Integración del Formulario

El formulario actualmente muestra una notificación simulada. Para integrarlo con tu backend:

1. Modifica la función de submit en `script.js`
2. Agrega tu endpoint de API
3. Implementa el envío con fetch o axios

Ejemplo:
```javascript
fetch('https://tu-api.com/contacto', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, sport, message })
})
```

## Optimización para Producción

- Minifica CSS y JavaScript
- Optimiza imágenes (WebP, compresión)
- Implementa lazy loading
- Agrega caché de navegador
- Usa CDN para recursos externos

## Navegadores Compatibles

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)

## Licencia

© 2025 Método ACTIVA. Todos los derechos reservados.

## Contacto

Para más información sobre el Método ACTIVA, visita nuestra landing page.
