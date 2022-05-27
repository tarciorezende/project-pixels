const colors = document.getElementsByClassName('color');
const catchColor= document.getElementById('color-palette');
const size = document.getElementById('board-size');
const clean= document.getElementById('clear-board');
const generate= document.getElementById('generate-board');
const board=document.getElementById('pixel-board');
const change=document.getElementById("reroll-colors");

function randomColor() { 
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 
    return `rgb(${r}, ${g}, ${b})`;
    
 }

 function colorPallet() { 
    for (let index = 1; index < 4; index += 1) {
    colors[index].style.backgroundColor = randomColor(); 
    } 
} 

function changeSelected(event){
    const eraseOldSelected = document.querySelector('.selected');
    eraseOldSelected.classList.remove('selected');
    event.target.classList.add("selected");
    changeColor(event);
}
function changeColor(event){
    const cor= event;
    const novaCor=document.querySelector('.selected').style.backgroundColor;
    cor.target.style.backgroundColor=novaCor;
}
function createPixel() {
    let pixel = document.createElement('div');
    pixel.className= 'pixel'
    pixel.addEventListener('click',changeColor)
    return pixel;
  }

function fillLine(line) {
    for (let index= 0; index <line; index += 1) {
        const linha = document.createElement('div');
        linha.className = 'line';
        board.appendChild(linha);
         for (let index2= 0; index2 <line; index2 += 1) {
            let pixel = createPixel();
            pixel-board.appendChild(pixel);
        }  
    }
  }
   function cleanBoard(){
    let pixel=document.getElementsByClassName('pixel')    
    for (let index= 0; index <pixel.length; index += 1) {
            pixel[index].style.backgroundColor='white';
    }
  } 
    function eraseBoard(){
        const list=document.getElementById('pixel-board');
        while (list.hasChildNodes()){
            list.removeChild(list.firstChild)
        }
        fillLine(validBoardSize());
    }

function validBoardSize() {
    if (size.value === '') {
      alert('Board inválido!');
    }
    if (size.value< 5) {
      size.value= 5;
      alert ('Tela muito pequena, valor alterado para o minimo (5)')
    }
    if (size.value > 50) {
      size.value = 50;
      alert ('Tela muito grande, valor alterado para o máximo (50)')

    }
  
    return size.value;
  }
    fillLine(5);
change.addEventListener('click',colorPallet);
catchColor.addEventListener('click',changeSelected);
clean.addEventListener('click',cleanBoard)
generate.addEventListener('click',eraseBoard)

colorPallet();