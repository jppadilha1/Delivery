const s = (e) => document.querySelector(e);
const sa = (e) => document.querySelectorAll(e);

salgadoQT = 1;

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