/*
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
[e qui è già fatto perchè ve lo passo nello zip :innocent:]

Milestone 2 - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.

Milestone 3 - Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.

Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

BONUS possibili

Formattare le date in formato italiano (gg/mm/aaaa)

Gestire l’assenza dell’immagine profilo con un elemento di fallback che contiene le iniziali dell’utente (es. Luca Formicola > LF).

Al click su un pulsante “Mi Piace” di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

*/

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const like = [];

const counterOfLikes = [];

const postLiked = [];


posts.forEach(element => {

    document.getElementById("container").innerHTML += `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${element.author.image}" alt="${element.author.name}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${element.author.name}</div>
                    <div class="post-meta__time">${element.created}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${element.content}</div>
        <div class="post__image">
            <img src="${element.media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" id="submit${element.id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${element.id}" class="js-likes-counter">${element.likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>
    `

    like.push(`submit${element.id}`)

    counterOfLikes.push(`like-counter-${element.id}`)
    
});

console.log(like);

like.forEach((element, i) => {

    document.getElementById(element).addEventListener("click", 
    function(event) {

        event.preventDefault();
        
        let pointerOfClick = document.querySelector(`#${element} span`);

        let pointerOfClickClass = pointerOfClick.classList.value;

        if (!pointerOfClickClass.includes("like-button--liked")) {

            pointerOfClick.classList.add("like-button--liked");

            postLiked.push(counterOfLikes[i])

            let counter = document.getElementById(counterOfLikes[i]);

            let counterValue = parseInt(counter.innerHTML); 

            counterValue++

            counter.innerHTML = counterValue;

            console.log(postLiked);
            
        } else {

            pointerOfClick.classList.remove("like-button--liked");

            const index = postLiked.indexOf(counterOfLikes[i]);

            const x = postLiked.splice(index, 1);

            let counter = document.getElementById(counterOfLikes[i]);

            let counterValue = parseInt(counter.innerHTML); 

            counterValue--

            counter.innerHTML = counterValue;

            console.log(postLiked);
            
        }

        
        
    });
});


