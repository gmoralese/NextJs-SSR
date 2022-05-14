This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:
yarn dev

```

## Que es NextJs ?

Es un Framework de React, creado por Vercel, que nos permite crear SPA. Ademas nos entrega la posibilidad de cargar contenido en nuestra aplicacion utilizando SSR.

Por otro lado, nos da la posibilidad de mejorar el SEO de nuestra pagina/app-web ya que el contenido de esta, se estara cargando desde el lado del servidor

## Como funciona el SSR ?

Primero que todo, el usuario hace la peticion a nuestra pagina/app-web, la pagina al estar renderizada en el servidor, nos devuelve un html con todo el contenido de nuestra pagina, es decir, el navegador lo unico que hace es interpretar este HTML y con esto nos entrega de manera mas rapida la pagina web con sus estilos y funcionalidades (listas para ser usadas) de manera mas rapida.

## Y porque es mas rapido que el CSR ?

Porque cuando el usuario hace la peticion a la pagina web, el servidor tambien es el que ejecuta la respuesta pero este caso nos devuelve un HTML basico, que contiene el JS aun no interpretado, por lo que el navegador debe interpretar este HTML y JS para asi una vez que el JS este "Hidratado" en la pagina, ahi recien esta sera utilizable.

## Ventajas del SSR:

- Carga inicial es mas rapida.
- Le quitamos carga al cliente (util cuando los usuarios no tienen un pc suficientemente potentes).
- SEO.

```
