window.onload = () => {
    'use strict';
    //Si el archivo no existe - Lo crea
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js');

    }
}