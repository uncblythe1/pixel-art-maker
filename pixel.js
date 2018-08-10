document.addEventListener('DOMContentLoaded', () =>{
console.log('booyah');

//create title
document.body.innerHTML = `
<h1> Pixel Art Maker</h1>
 `
//create main box to hold pixel art maker
const mainBox = document.createElement('div');
document.body.appendChild(mainBox);
mainBox.className = 'mainBox';

//create canvas w/in main box
const canvas = document.createElement('div');
mainBox.appendChild(canvas);
canvas.className = 'canvas';
console.log(canvas);

//create a palette w/in main box
const palette = document.createElement('div');
mainBox.appendChild(palette);
palette.className = 'palette';

//create two rows of colors for palette
const rowOne = document.createElement('div');
palette.appendChild(rowOne);
rowOne.className = 'row';

// create function for getting colors to assign to the first row of the palette.
function getColor() {
    rowOneColors = ['Black', 'Azure', 'Beige', 'Bisque', 'BurlyWood', 'DarkOrange', 'FireBrick', 'LightSalmon', 'LightSkyBlue', 'MediumOrchid', 'Plum', 'SeaGreen', 'SlateGrey', 'Yellow', 'Violet']
    for (let i = 0; i < rowOneColors.length; i ++) {
        let color = document.createElement('div');
        rowOne.appendChild(color);
        color.className = 'pen';
        color.style.backgroundColor =  rowOneColors[i];
    //add click event to get paintbrush color from pallette
        color.addEventListener('click', (ev) => {
            paintBrushColor = color.style.backgroundColor;
        })
    }

}

//makes the paintBrushColor a global variable
let paintBrushColor = null;
//create pixels w/in canvas
function pixelCanvas (){
    for (let i = 0; i < 5000; i ++) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        canvas.appendChild(pixel);

        //add paintbrush color to pixel when clicked
        pixel.addEventListener('click', (ev)=> {
            pixel.style.backgroundColor = paintBrushColor;
        });
    }

}

pixelCanvas();
getColor();

})
