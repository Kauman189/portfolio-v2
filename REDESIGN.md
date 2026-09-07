# Portfolio K189

Dirección editorial, navegación vertical y animación ligada al scroll. Se conservan #FAFAF8, #FF6B35, Inter y Space Grotesk.

## Páginas

- Inicio de escritorio: órbita automática de seis proyectos con un solo icono central, sin mensajes ni nombres duplicados. Proceso ligado al scroll.
- Inicio móvil: presentación breve, índice de cuatro proyectos sin imágenes, experiencia reciente y proceso vertical. La órbita no se monta en móvil.
- Proyectos: seis proyectos verticales con formatos de apertura, carteles, panorama de interfaz y dashboard; solo dos incluyen una vista de detalle adicional.
- Casos individuales: problema, rol, público, recorrido, decisiones, alcance, evaluación propuesta, aprendizaje y documentación visual.
- Sobre mí: retrato en color, collage de referencias fotográficas con créditos, composiciones de color animadas, capacidades y reproductor musical propio.
- Experimento oculto: acceso únicamente desde la flor del footer, sin enlace en la navegación. Historia de amor de dos ranas cartoon modeladas en Three.js, con sombreado por bandas y un estanque compacto, en doce escenas unidas por scroll. Saltos, flor, lluvia, refugio, baile y abrazo final, siempre de día. Sin controles de reproducción.
- Contacto: formulario que prepara un correo para camiloarias.frg@gmail.com. El visitante lo envía desde su aplicación; no hay servicio de envío conectado.
- Legal: contenido existente en ambos idiomas.

## Idiomas

Español inicial; ES/EN cambia el contenido sin cambiar de página ni vaciar el formulario. La preferencia se guarda localmente. Los textos de los casos están en `src/app/data/case-studies.ts`; la información original y las imágenes están en `src/app/data/projects.ts`.

## Contenido pendiente

Los porcentajes se muestran como pendientes: no existe una medición aportada de conversión, reducción de errores o éxito de tarea. Cada caso explica qué medir y cómo. Los números de alcance describen el diseño, no resultados de negocio.

Añadir imágenes de proceso en `processImages`, con `{src, alt}`. Las galerías sustituyen automáticamente los placeholders. Faltan wireframes, pantallas de flujo, fotos de las piezas impresas y resultados cuantitativos verificados.

Imagine utiliza geometrías propias y una ilustración SVG propia de respaldo; no necesita descargar modelos o texturas.

## Móvil y movimiento

Lectura vertical y layouts específicos para móvil. Animación automática en la órbita, transiciones entre rutas, escenas de scroll y entradas progresivas. Sin botones para pausar o reanudar animaciones; se respeta `prefers-reduced-motion`. Las escenas fijadas pasan a contenido estático si la pantalla es demasiado baja o si se prefiere movimiento reducido.

El respaldo anterior al rediseño está en `/tmp/k189-redesign-backup/before-redesign.tar.gz` mientras siga disponible la carpeta temporal. La salida de producción se genera en `dist`.

La animación de Imagine se carga únicamente al entrar en su ruta. Libera geometrías, materiales, observadores y el renderizador al salir; se detiene fuera de pantalla y con la pestaña oculta. El movimiento reducido muestra poses fijas por capítulo. Si WebGL no está disponible, conserva la historia con una ilustración.

Las estrellas anteriores se han sustituido por flores y ranitas SVG propias en toda la web, con balanceo y parpadeo suaves.

Los CV actualizados ES/EN se descargan según el idioma seleccionado. La experiencia y LinkedIn se han contrastado con ambos documentos. En móvil, composición de lectura con índices de proyectos sin imágenes; las imágenes se muestran dentro de cada caso, tipografía compacta, entradas de 800 ms y desplazamientos breves; sin carrusel ni elementos decorativos superpuestos. Iconos funcionales SVG; cero emojis. La historia usa prosa original y una cita atribuida de Antonio Machado.
