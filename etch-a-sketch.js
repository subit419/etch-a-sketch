const DEFAULT_GRID_SIZE = 16;
const container = document.querySelector('.container');

function setupGrid(size) {
    deleteCells();
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
    for (let i = 0; i < size * size; i++) {
      const gridCell = document.createElement('div');
      gridCell.classList.add('cell');
      gridCell.addEventListener('mouseover', colorCell);
      gridCell.addEventListener('mousedown', colorCell);
      container.appendChild(gridCell);
    }
  }

function deleteCells () {
    while (container.firstChild) {
        container.removeChild (container.firstChild)
    }
}

function colorCell(e) {
    if (e.buttons == 1 || e.buttons == 3) {
        if (rainbowMode) {
            currentColor = getRandomColor();
        }
        this.style.backgroundColor = currentColor;
    }
    
}

function changeColorMode(e) {
    buttons.forEach(button => button.classList.remove('active'));
    this.classList.add('active');
    if (this.classList.contains('eraser')) {
        currentColor = 'white';
        rainbowMode = false;
    } else if (this.classList.contains('color')) {
        currentColor = colorPicker.value;
        rainbowMode = false;
    } else if (this.classList.contains('rainbow')) {  
        rainbowMode = true;
    }

}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

var slider = document.getElementById('sizeSetting'),
    sliderDiv = document.getElementById('sliderValue');

const colorPicker = document.getElementById('drawColor');
var currentColor = "#000000"


const buttons = document.querySelectorAll('button');
const btnReset = document.getElementById('btnReset');
var rainbowMode = false;

buttons.forEach(button => button.addEventListener("click", changeColorMode));

btnReset.onclick = function() {
    setupGrid(DEFAULT_GRID_SIZE);
    colorPicker.value = "#000000";
    currentColor = "black";
    document.getElementById('btnColor').classList.add('active');
    btnReset.classList.remove('active');
    slider.value = DEFAULT_GRID_SIZE;
    sliderDiv.innerHTML = DEFAULT_GRID_SIZE + " x " + DEFAULT_GRID_SIZE;

}

colorPicker.onchange = function () {
    currentColor = this.value;

}

slider.onchange = function () {
    sliderDiv.innerHTML = this.value + " x " + this.value;
    setupGrid(this.value);
}

window.onload = () => {
    setupGrid(DEFAULT_GRID_SIZE);
}
