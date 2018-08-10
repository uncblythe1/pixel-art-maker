document.addEventListener('DOMContentLoaded', () =>{
console.log('booyah');
//create main box
document.body.innerHTML = `
<h1> Pixel Art Maker</h1>
 `
    

const mainBox = document.createElement('div');
document.body.appendChild(mainBox);
mainBox.className = 'mainBox';

//create canvas w/in main box
const canvas = document.createElement('div');
mainBox.appendChild(canvas);
canvas.className = 'canvas';
console.log(canvas);

//create a pallette w/in main box
const pallette = document.createElement('div');
mainBox.appendChild(pallette);
pallette.className = 'pallette';

//create two rows of colors for pallette
const rowOne = document.createElement('div');
pallette.appendChild(rowOne);
rowOne.className = 'row';



rowOneColors = ['Snow', 'Azure', 'Beige', 'Bisque', 'BurlyWood', 'DarkOrange', 'FireBrick', 'LightSalmon', 'LightSkyBlue', 'MediumOrchid', 'Plum', 'SeaGreen', 'SlateGrey', 'Yellow']
    for (let i = 0; i < rowOneColors.length; i ++) {
        const color = document.createElement('div');
        rowOne.appendChild(color);
        color.className = 'pen';
        color.style.backgroundColor =  rowOneColors[i];
    }

    color.addEventListener('click', (ev) => {
        console.log('hey');
    })


const rowTwo = document.createElement('div')
pallette.appendChild(rowTwo);
rowTwo.className = 'row';
   

//create divs for each color in the pallette

//create pixels w/in canvas
function pixelCanvas (){
    for (let i = 0; i < 5000; i ++) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        canvas.appendChild(pixel);

        pixel.addEventListener('click', (ev)=> {

        })
    }
    //add event listener for coloring individual boxes
}

pixelCanvas();





}
)