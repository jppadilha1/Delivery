const s = (e) => document.querySelector(e);
const sa = (e) => document.querySelectorAll(e);

let salgadoQT = 1;
let salgadoKey;
let cart = [];

salgadosJSON.map((item, index) => {
    let salgadoItem = s('.models').cloneNode(true);
    
    salgadoItem.querySelector('.models-item--img img').src = item.img;
    salgadoItem.querySelector('.models-item--description span').innerHTML = item.name;
    salgadoItem.querySelector('.models-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    salgadoItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();
        s('.salgado--area-info span').innerHTML = item.name;
        s('.salgado--area-img img').src = item.img;
        s('.salgado--area-price').innerHTML = `R$ ${item.price.toFixed(2)}`;
        salgadoQT = 1;
        s('.button-qt div').innerHTML = salgadoQT;

        salgadoKey = item;

        s('.salgado--area').style.opacity = 0;
        s('.salgado--area').style.display = 'flex';
        setTimeout(() => {
            s('.salgado--area').style.opacity = 1;
        },200);

        document.addEventListener('scroll', () => {
            if(window.scrollY >= 493.6000061035156) {
                s('.menu-openner').style.display = 'flex'
            } else {
                s('.menu-openner').style.display = 'none'
            }
        })
    });

    s('.section--area').append(salgadoItem)
});

function closeWindowArea() { 
        setTimeout(() => {
            s('.salgado--area').style.opacity = 0;
        },200);
        s('.salgado--area').style.display = 'none';
}

function closeCart(e) {
    e.preventDefault();
    setTimeout(() => {
        s('.aside').style.opacity = 0;
    },200);
    s('aside').style.display = 'flex';

}

s('#menos').addEventListener('click', (e) => {
    e.preventDefault();
    if(salgadoQT > 1){
        salgadoQT--;
        s('.button-qt div').innerHTML = salgadoQT;
    }
});

s('#mais').addEventListener('click', (e) => {
    e.preventDefault();
    salgadoQT++;
    s('.button-qt div').innerHTML = salgadoQT;
})

s('.add--salgado-item').addEventListener('click', () => {
    let identifier = salgadoKey.id;
    let key = cart.findIndex((item) => item.identifier == identifier);

    if(key > -1) {
        cart[key].salgadoQT = cart[key].salgadoQT + salgadoQT;
    } else {
        cart.push({
            salgadoKey,
            salgadoQT,
            identifier
        });
    };
   
    s('aside').style.display = 'flex';
    closeWindowArea();
    updateCartArea();
});

function updateCartArea() {
    s('.cart-items').innerHTML = '';
    let subtotal = 0;
    let desconto = 0;
    let total = 0;
    let iconQT = 0;

    for(let i in cart){
        let salgadoItems = s('.cart-models-item').cloneNode(true);
        salgadoItems.querySelector('.cart-models-item img').src = cart[i].salgadoKey.img;
        salgadoItems.querySelector('.cart-item-name').innerHTML = cart[i].salgadoKey.name;
        salgadoItems.querySelector('.cart-models-item span').innerHTML = cart[i].salgadoQT+' uni.';

        iconQT += cart[i].salgadoQT;
        s('.menu-openner span').innerHTML = iconQT;

        subtotal += cart[i].salgadoKey.price * cart[i].salgadoQT;

        s('.cart-items').append(salgadoItems);
    }

    s('.subtotal-items div').innerHTML = `R$ ${subtotal.toFixed(2)}`;
    desconto = 0.1 * subtotal;
    total = subtotal - desconto;
    s('.promotion-items span').innerHTML = `R$ ${desconto.toFixed(2)}`;
    s('.total-items div').innerHTML = `R$ ${total.toFixed(2)}`;

}

s('.menu-openner').addEventListener('click', () => {
    window.scroll(0,0);
});