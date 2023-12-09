const container = document.querySelector('.container');
const input = document.querySelector('#size');
const inputVal = document.querySelector('.num-boxes');
let numSide = input.value;

function createBoard(){
    const size = 500/numSide;

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
        boxElem.style['background-color'] = 'black';
        boxElem.addEventListener('mouseenter', () => {
            boxElem.style['background-color'] = 'pink';
        })
    })
}

inputVal.textContent = numSide;

createBoard();

// Range-input change

input.addEventListener('input', (event) => {
    numSide = event.target.value
    input.value = numSide;
    inputVal.textContent = numSide;
    createBoard();
})
