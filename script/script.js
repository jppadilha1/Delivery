const s = (e) => document.querySelector(e);
const sa = (e) => document.querySelectorAll(e);

salgadosJSON.map((item, index) => {
    let salgadoItem = s('.models').cloneNode(true);
    
    salgadoItem.querySelector('.models-item--img img').src = item.img;
    salgadoItem.querySelector('.models-item--description span').innerHTML = item.name;
    salgadoItem.querySelector('.models-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    salgadoItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();
        s('.salgado--area').style.display = 'flex';

        setTimeout(() => {
            s('.salgado--area').style.opacity = 1;
        },200);
    });

    s('.section--area').append(salgadoItem)
})