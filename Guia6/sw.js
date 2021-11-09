var cacheName = 'holamundo-pwa';
//Archivos a cachear
var filesToCache = [
    '/',
    '/index.html',
    '/css/style.css',
    '/js/main.js'
];
/* Inicie el service worker y almacene en caché todo el contenido de
la aplicación */
//Escuchando
self.addEventListener('install', function (e) {
    e.waitUntil(
        //Creacion del cache - Abre el cache y lo empieza a guardar
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});
/* Sirve contenido almacenado en caché sin conexión */
self.addEventListener('fetch', function (e) {
    e.respondWith(
        //Si la petición esta en el cache, devuelve la respuesta - Todo del service worker
        // Despues de buscar vuelve a cachear
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});