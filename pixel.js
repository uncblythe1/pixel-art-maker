document.addEventListener('DOMContentLoaded', () =>{
console.log('booyah');

//array of colors for rowOne
rowOneColors = ['Black', 'Azure', 'Beige', 'Bisque', 'BurlyWood', 'DarkOrange', 'FireBrick', 'LightSalmon', 'LightSkyBlue', 'MediumOrchid', 'Plum', 'SeaGreen', 'SlateGrey', 'Yellow', 'Violet', 'Brown', 'Snow', 'Pink', 'Turquoise', 'Blue', 'LimeGreen' ]

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

//create row of colors for palette
const rowOne = document.createElement('div');
palette.appendChild(rowOne);
rowOne.className = 'row';

//makes the paintBrushColor a global variable
let paintBrushColor = null;
//tracks mouse pointer is down; default is false
let down = false;
//create pixels w/in canvas
function pixelCanvas (){
    for (let i = 0; i < 3500; i ++) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        canvas.appendChild(pixel);
    }

    fillButton.addEventListener('click', (ev) => {
        const pixels = document.getElementsByClassName('pixel');
        for (let pixel of pixels) {
            pixel.style.backgroundColor = paintBrushColor;
        }
        
    })
    // Listens for mouse press and release on canvas. true = pressed, sets false = released;
    canvas.addEventListener('mousedown', (ev)=> {
        down = true;
    })
    canvas.addEventListener('mouseup', (ev) => {
            down = false;
    })
        //makes sure colors won't be filled when mouse leaves canvas
    // canvas.addEventListener('mouseleave', (ev) => {
    //         down = false;
    // })

    canvas.addEventListener('mouseover', (ev) => {
        if(down && ev.target.className === 'pixel') {
                ev.target.style.backgroundColor = paintBrushColor;
        }
    })
}

// create function for getting colors to assign to the first row of the palette.
function getColor(rowOneColors) {
    for (let i = 0; i < rowOneColors.length; i ++) {
        let color = document.createElement('div');
        rowOne.appendChild(color);
        color.className = 'pen';
        color.style.backgroundColor =  rowOneColors[i];

    //add click event to get paintbrush color from pallette
        color.addEventListener('click', (ev) => {
                paintBrushColor = color.style.backgroundColor;
                currentColor.style.backgroundColor = color.style.backgroundColor;
        })

    }

}

//create custom color picker
const colorPicker = document.createElement ('input');
colorPicker.className = 'colorPicker';
colorPicker.setAttribute('type', 'color');
rowOne.appendChild(colorPicker);
    
//set paintbrush color to colorpicker selection
    colorPicker.addEventListener('change', (ev) => {
        if (ev.target.className === 'colorPicker'){
            paintBrushColor = ev.target.value;
            currentColor.style.backgroundColor = ev.target.value;
        }
    })

//create custom picker title
const colorPickerTitle = document.createElement('div');
colorPickerTitle.className = 'cpt';
rowOne.appendChild(colorPickerTitle);
colorPickerTitle.innerText = 'Custom Color'

//create current color selection
const currentColor = document.createElement('div');
currentColor.className = 'currentColor';
rowOne.appendChild(currentColor);

//create current color title
const currentColorTitle = document.createElement('div');
currentColorTitle.className = 'cct';
rowOne.appendChild(currentColorTitle);
currentColorTitle.innerText = 'Current Color';

//create a way to save and load a drawing;
//create save button



//create fill button
const fillButton = document.createElement('button');
mainBox.appendChild(fillButton);
fillButton.textContent = 'FILL';
fillButton.class = 'tools';
fillButton.type = 'button';



pixelCanvas();
getColor(rowOneColors);

})
