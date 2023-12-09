const container = document.querySelector('.container');
const input = document.querySelector('#size');
const inputVal = docuemnt.querySelector('.num-boxes');

const size = 500/30;

const boxes = Math.floor((500 ** 2)/(size*size));

function addBox(){
    container.insertAdjacentHTML(
        'beforeend',
        `<div class="box"></div>`      
    )
}

for(let i=0; i<boxes; i++){
    addBox();
}

const allBoxes = document.querySelectorAll('.box');

const boxesArr = [...allBoxes];

boxesArr.map((boxElem) => {
    boxElem.style['flex-basis'] = `${size}px`;
    boxElem.style.height = `${size}px`; 
    boxElem.addEventListener('mouseleave', () => {
        boxElem.style['background-color'] = 'pink';
    })
})

// Range-input change


