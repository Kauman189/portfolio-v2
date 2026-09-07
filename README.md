# Camilo Arias · K189

Portfolio de diseño UX/UI, producto y diseño visual. Angular 18, páginas verticales, movimiento vinculado al scroll y contenido en español e inglés.

## Desarrollo

```sh
npm install
npm start
```

## Producción y pruebas

```sh
npm run build
npm test -- --watch=false --browsers=ChromeHeadless
```

La web de producción se genera en `dist/`. Las rutas internas necesitan redirigir a `index.html` en el alojamiento; la configuración de Sites ya incluye ese comportamiento.

## Editar contenido

- `src/app/data/projects.ts`: proyectos, herramientas, imágenes y enlaces originales; añadir fotos a `processImages`.
- `src/app/data/case-studies.ts`: narrativa bilingüe, decisiones y evaluación de cada caso.
- `src/app/i18n/locale.service.ts`: idioma y preferencia local.
- [REDESIGN.md](REDESIGN.md): estructura y contenido pendiente.
- [ASSETS.md](ASSETS.md): procedencia y créditos de las imágenes.

El formulario prepara un correo a `camiloarias.frg@gmail.com` en la aplicación del visitante. No hay un servicio de envío directo conectado.
