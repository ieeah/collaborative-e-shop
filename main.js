const products = [
    {   
        id: 1,
        title: 'Mac Mini',
        subtitle: 'Nuovi muscoli. Nuovi traguardi.',
        url: `mac_mini.jpg`,
        price: 1999.99,
        category: 'laptop',
        description: 'Il nostro computer desktop più versatile si lancia in una nuova dimensione. Mac mini ora ha il rivoluzionario chip Apple M1, CPU fino a 3 volte più rapida, grafica fino a 6 volte più scattante e il Neural Engine più evoluto, che assicura performance fino a 15 volte migliori per il machine learning. Preparati a lavorare, giocare e creare con una velocità e una potenza che prima d’ora non avresti mai immaginato.',
        io: ['ethernet, wifi, thunderbolt, USB-A, Jack cuffie', 'HDMI 2.0'],
    },
    {   
        id: 2,
        title: 'MacBook Air',
        subtitle: 'C’è una nuova potenza nell’Air.',
        url: `macbook_air.jpg`,
        price: 1299.00,
        category: 'laptop',
        description: 'Ti presentiamo il nuovo MacBook Air: il nostro portatile più sottile e leggero, completamente trasformato dal chip Apple M1. CPU fino a 3,5 volte più veloce. GPU fino a 5 volte più scattante. Il Neural Engine più evoluto di sempre, che assicura performance di machine learning fino a 9 volte migliori. Un’autonomia che su un MacBook Air non si era mai vista. E una tecnologia silenziosa, perché senza ventola. Ha una potenza senza precedenti, ed è pronto a seguirti ovunque.',
        io: ['wifi, thunderbolt, USB-A, Jack cuffie', 'SSD', 'retina']
    },
    {   
        id: 3,
        title: 'MacBook Pro',
        subtitle: 'Potenza allo stato Pro.',
        url: 'macbook_pro.jpg',
        price: 1699.99,
        category: 'portable',
        description: 'Il MacBook Pro più potente di sempre è qui. Ha i velocissimi chip M1 Pro o M1 Max, i primi progettati da Apple per il mondo professionale, ed è capace di performance rivoluzionarie con un’incredibile durata della batteria. E poi ci sono un display Liquid Retina XDR spettacolare, il sistema audio e la videocamera migliori mai visti su un Mac, e tutte le porte che ti servono. MacBook Pro è un portatile di una nuova specie. Ed è un mostro di potenza.',
        io: ['ethernet, wifi, thunderbolt, USB-C, SSD']
    },
    {   
        id: 22,
        title: 'iMac 24"',
        subtitle: 'Eccolo: di’ ciao al nuovo iMac.',
        url: 'imac.png',
        price: 1499.00,
        category: 'all-in-one',
        description: 'Ispirato al meglio di Apple, rivoluzionato dal chip M1. Si fa notare ovunque e si adatta perfettamente al tuo mondo.',
        io: ['wifi, thunderbolt, USB-C, HDMI 2.0, SSD']
    },
    {   
        id: 245,
        title: 'Mac Pro',
        subtitle: 'Il potere di cambiare tutto.',
        url: 'mac_pro.jpg',
        price: 3699.99,
        category: 'desktop',
        description: 'Nasce un Mac estremo, da ogni punto di vista. Con prestazioni, espansione e opzioni di configurazione al top, è il sistema dedicato agli utenti professionali che vogliono superare i limiti del possibile.',
        io: ['ethernet, wifi, thunderbolt, USB-A, Jack cuffie', 'HDMI 2.0']
    },
    {   
        id: 250,
        title: 'iPhone 13 Pro',
        subtitle: 'Super. Ultra. Pro.',
        url: 'iphone.jpg',
        price: 1199.00,
        category: 'smartphone',
        description: 'Un nuovo, sorprendente salto di qualità per le fotocamere. Un display così reattivo che anche i gesti di sempre ti stupiranno. Il chip per smartphone più veloce al mondo. Robustezza eccezionale. E autonomia senza precedenti.',
        io: ['wifi, USB-C, waterproof']
    },
    {   
        id: 313,
        title: 'iPad',
        subtitle: 'Tuttofare. Tuttofacile',
        url: 'ipad.png',
        price: 1999.99,
        category: 'tablet',
        description: 'Potente. Semplice da usare. Versatile. E progettato per fare tutto quello che ti piace. Con il nuovo iPad lavori, giochi, crei, impari e rimani sempre in contatto con chi vuoi. Ed è incredibile anche nel prezzo.',
        io: ['ethernet, wifi, USB-C, Jack cuffie', 'waterproof']
    },
    {   
        id:457,
        title: 'iPhone 12',
        subtitle: 'Veloce che è una meraviglia.',
        url: 'iphone12.jpg',
        price: 1999.99,
        category: 'smartphone',
        description: 'Un chip superpotente. La velocità del 5G. Un sistema evoluto a doppia fotocamera. La resistenza del Ceramic Shield, più robusto di qualsiasi vetro per smartphone. E uno sfolgorante display OLED. iPhone 12 ha proprio tutto. Anche due formati perfetti.',
        io: ['wifi, USB-C, Jack cuffie', 'waterproof']
    }
];

const container = document.querySelector('.product-conteiner');
const wishList = [];
const cartList = [];
const favCounter = document.querySelector('.fav-counter');
const cartCounter = document.querySelector('.cart-counter');
const buyBtn = document.getElementById('acquista');


products.forEach(e => {
    const div = document.createElement('div');
    const cardHead = document.createElement('div');
    const itemsDetails = document.createElement('div');
    const ctaDiv = document.createElement('div');
    const favBtn = document.createElement('button');
    const cartBtn = document.createElement('button');
    const title = document.createElement('h2');
    const subTitle = document.createElement('h3');
    const image = document.createElement('img');
    div.classList.add('item-card');
    div.append(cardHead);
    cardHead.classList.add('card-head');
    title.append(`${e.title}`);
    subTitle.append(`${e.subtitle}`);
    image.src = `./img/${e.url}`;
    cardHead.append(title, subTitle, image);
    itemsDetails.classList.add('d-none', 'item-details');
    itemsDetails.innerHTML += 
    `
    <p class="item-description">
        ${e.description}
    </p>
    <h4 class="item-price">${e.price}</h4>
    <div class="sub-details">
        <div class="item-category">${e.category}</div>
        <div class="item-io">${e.io}</div>
    </div>
    `;
    div.append(itemsDetails);
    itemsDetails.append(ctaDiv);
    ctaDiv.classList.add('cta');
    favBtn.classList.add('cta-btn');
    cartBtn.classList.add('cta-btn');
    ctaDiv.append(favBtn, cartBtn);
    favBtn.innerHTML = `<i class="fas fa-heart "></i>`;
    cartBtn.innerHTML = `<i class="fas fa-cart-plus"></i>`;
    container.append(div);

    handleEventsClick(cardHead, itemsDetails);

    wishListCheck(wishList, e, favBtn, favCounter);
    cartListCheck(cartList, e, cartBtn, cartCounter);
});

buyBtn.addEventListener('click', function(){
    if (cartList.length == 0) {
        alert('attenzione, il carrelo è vuoto');
    } else if (cartList.length > 0) {
        if (confirm('Se procedi, proseguirai al pagamento, ed il tuo carrello verrà svuotato!'))  {
        cartList.splice(0);
        cartCounter.classList.add('d-none');
        };
    };

    cartCounter.innerText = cartList.length;

});

// funzioni
function handleEventsClick(cardHead, itemsDetails) {
    cardHead.addEventListener('click', function() {
        itemsDetails.classList.toggle('d-none');
    });
}

// quando si clicca sul bottone del cuore, si esegue un controllo nell'array wishlist, se il titolo non è presente nell'array, lo si pusha, altrimenti lo si elimina
// il contatore nell'header stampa il numero di prodotti favoriti
function wishListCheck(wishList, e, favBtn, favCounter) {
    const title = e.title;
    favBtn.addEventListener('click', function() {
        if (!wishList.includes(title)) {
            wishList.push(title);
        } else {
            const toDelete = wishList.indexOf(title);
            wishList.splice(toDelete, 1);
        }

        if (wishList.length != 0) {
            favCounter.classList.remove('d-none');
        } else if (wishList.length === 0) {
            favCounter.classList.add('active-animation-rev');
            setTimeout(() => {
            favCounter.classList.remove('active-animation-rev');
            }, 500);

            setTimeout(() => {
            favCounter.classList.add('d-none');
            }, 800);
            
        }

        favCounter.innerText = wishList.length;
        favCounter.classList.add('active-animation');
        setTimeout(() => {
        favCounter.classList.remove('active-animation');
        }, 500);
    });
}

// quando si clicca sul bottone del carrello, si pusha l'elemento nell'array
// il contatore nell'header stampa il numero di prodotti nel cartello
function cartListCheck(cartList, e, cartBtn, cartCounter) {
    const title = e.title;
    cartBtn.addEventListener('click', function() {
        cartList.push(title); 
        if (cartList.length != 0) {
            cartCounter.classList.remove('d-none');
        }
    
        cartCounter.innerText = cartList.length;
        cartCounter.classList.add('active-animation');
    setTimeout(() => {
      cartCounter.classList.remove('active-animation');
    }, 500);
    });
}