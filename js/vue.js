/*


Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.



*/





const { createApp } = Vue;

createApp({
    data() {
    return {

        message: "Hello World!",
        immagine: "https://www.minimaetmoralia.it/wp/wp-content/uploads/2017/07/world-640x420.jpg"
    }
    }
}).mount("#app")

