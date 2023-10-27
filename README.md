<h1 align="center">Arduino Project</h1>

<div align="center">
   por  <a href="https://github.com/AitorMelero" target="_blank">Aitor Melero</a> y <a href="https://github.com/mg-Ben" target="_blank">Benjamín Martín</a>.
</div>
</br>
<div align="center">

[![Astro](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=white)](https://astro.build/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)](https://es.react.dev/)
[![Arduino](https://img.shields.io/badge/Arduino-00878F?logo=arduino&logoColor=white)](https://www.arduino.cc/)

---

</div>

<!-- INDICE -->

## Índice

-   [Objetivo](#objetivo)
-   [Tecnologías](#tecnologías)
-   [Instalación y ejecución](#instalación-y-ejecución)
-   [Esribir artículos](#escribir-artículos)
-   [Contacto](#contacto)

<!-- OBJETIVO -->

## Objetivo

El objetivo de este proyecto es el desarrollo de una web donde se publicarán cada cierto tiempo artículos en los que se explicarán diferentes proyectos realizados con Arduino.

Con respecto a la web, la motivación principal es ganar experiencia con diferentes tecnologías como [Astro](https://astro.build/), [React](https://es.react.dev/) o [Tailwind](https://tailwindcss.com/). En cuanto a los proyectos de [Arduino](https://www.arduino.cc/), el objetivo es aprender y ganar experiencia con la realización de trabajos enfocados en hardware.

La web ha sido desarrollada por [@AitorMelero](https://github.com/AitorMelero) y los proyectos y artículos de Arduino están hechos por [@mg-Ben](https://github.com/mg-Ben).

## Tecnologías

[![Astro](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=white)](https://astro.build/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Arduino](https://img.shields.io/badge/Arduino-00878F?logo=arduino&logoColor=white)](https://www.arduino.cc/)
[![HTML](https://img.shields.io/badge/HTML-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=white)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)](https://es.react.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![MDX](https://img.shields.io/badge/MDX-1B1F24?logo=mdx&logoColor=white)](https://https://mdxjs.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)

<!-- INSTALACION Y EJECUCION -->

## Instalación y ejecución

### Instalar dependencias:

```bash
npm install
```

### Ejecutar la web en modo desarrollador:

```bash
npm run dev
```

### Ejecutar la web en modo desarrollador en una red local:

```bash
npm run dev -- --host
```

### Creación de ejecutable

```bash
npm run build
```

### Levantar web con Docker

```bash
docker compose up
```

### Eliminar contenedor Docker

```bash
docker compose down
```

### Eliminar contenedor e imágenes Docker

```bash
docker compose down --rmi all
```

## Escribir artículos

El desarrollo de la web está preparado para que se puedan añadir artículos de Arduino de una forma sencilla y rápida. Se deben seguir los siguiente pasos:

### 1. Crear y movernos a una nueva rama:

-   Sin la extensión de git-flow

```bash
git checkout develop
git checkout -b feature_branch
```

-   Con la extensión de git-flow

```bash
git flow feature start feature_branch
```

### 2. Crear artículo

Para incluir un artículo en la web, debemos crear un fichero _.mdx_ dentro del directorio _./src/pages/posts/nombre-articulo.mdx_.

```bash
src
  ├───pages
  │   ├───about
  │   └───posts
  │   │   ├───articulo-1.mdx
  │   │   ├───articulo-2.mdx
  │   │   ├───articulo-3.mdx
```

### 3. Rellenar artículo

-   Cabecera

```javascript
---
mdxOptions: { format: "md" }
layout: "../../layouts/MarkdownProjectLayout.astro"
title: "Título del artículo"
pubDate: aaaa-mm-dd
description: "Descripción del artículo."
author: "Nombre del autor"
sections:
    [
        { url: "nombre-fichero#id-apartado-1", title: "Titulo apartado 1" },
        { url: "nombre-fichero#id-apartado-2", title: "Titulo apartado 2" },
        { url: "nombre-fichero#id-apartado-3", title: "Titulo apartado 3" },
        { url: "nombre-fichero#id-apartado-4", title: "Titulo apartado 4" },
        ...
    ]
---
```

-   Resumen e índice

```html
<div id="id-apartado-1">

# {frontmatter.title}

Aquí aparecerá un resumen del proyecto con el índice correspondiente.

-   [Componentes requeridos](#componentes-requeridos)
-   [Introducción de componentes](#introduccion-de-componentes)
    -   [Componente 1](#componente-1)
    -   [Componente 2](#componente-2)
    -   [Componente 3](#componente-3)
-   [Conexión](#conexion)
    -   [Esquema](#esquema)
    -   [Diagrama de cableados](#diagrama-de-cableado)
-   [Código](#codigo)
-   [Imagen de ejemplo](#imagen-de-ejemplo)

---

</div>
```

-   Lista de componentes requeridos

```html
<div id="componentes-requeridos">

## Componentes requeridos

-   (1) Componente 1
-   (3) Componente 2
-   (1) Componente 3

---

</div>
```

-   Introducción de componentes

```html
<div id="introduccion-de-componentes">

## Introducción de componentes

</div>

<div id="componente-1">

### Componente 1

</div>

<div id="componente-2">

### Componente 2

</div>

<div id="componente-3">

### Componente 3

---

</div>
```

-   Incluir imágenes

```html
<!-- Las imagenes deben estar guardadas en ./public/posts/ -->
![Descripcion de la foto](/posts/nombre_imagen.png)
```

-   Incluir código

```javascript
// Incluir el siguiente componente despues de la cabecera del fichero
import CodeContainer from "../../components/CodeContainer.astro";
export const components = { code: CodeContainer };
```

````html
<div id="codigo">

## Código

```
void setup() {
  // put your setup code here, to run once:
  pinMode(13, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(13, HIGH);  // write 1 (5V) in 13 pin
  delay(1000);             // wait 1 second
  digitalWrite(13, LOW);   // write 0 (0V) in 13 pin
  delay(1000);             // wait 1 second
}
```

---

</div>
````

### 4. Mergear artículo:

-   Sin la extensión de git-flow

```bash
git checkout develop
git merge feature_branch
```

-   Con la extensión de git-flow

```bash
git flow feature finish feature_branch
```

## Contacto

-   GitHub [@AitorMelero](https://github.com/AitorMelero)
-   GitHub [@mg-Ben](https://github.com/mg-Ben)
