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

    });

    s('.section--area').append(salgadoItem)
});

function closeWindowArea() { 
        setTimeout(() => {
            s('.salgado--area').style.opacity = 0;
        },200);
        s('.salgado--area').style.display = 'none';
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
    cart.push({
        salgadoKey,
        salgadoQT
    });
    console.log(cart)
    let salgadoItems = s('.cart-models-item').cloneNode(true);
    salgadoItems.querySelector('.cart-models-item img').src = salgadoKey.img;
    salgadoItems.querySelector('.cart-item-name').innerHTML = salgadoKey.name;
    salgadoItems.querySelector('.cart-models-item span').innerHTML = salgadoQT+' uni.';

    s('.cart-items').append(salgadoItems);
    console.log(salgadoKey)
    console.log(salgadoQT)

    s('aside').style.display = 'flex';
    closeWindowArea();
});