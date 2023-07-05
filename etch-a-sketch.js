const DEFAULT_GRID_SIZE = 16;
const container = document.querySelector('.container');

// for (let row = 1; row <= divRows; row++) {
//     // Each Row has 16 columns of divs
//     var divRow = document.createElement("Div");
//     divRow.id = `row${row}`;
//     divRow.className = "row"
    
//     container.appendChild(divRow);
//     let currentRow = document.querySelector(`#row${row}`);
//     console.log(currentRow);

//     for (let column = 1; column <= divColumns; column++) {
//         var divColumn = document.createElement("Div");
//         divColumn.id = `column${column}`;
//         divColumn.className = "cell"

        
//         currentRow.appendChild(divColumn);
//     }
// }
function setupGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
    for (let i = 0; i < size * size; i++) {
      const gridCell = document.createElement('div');
      gridCell.classList.add('cell');
      gridCell.addEventListener('mouseover', colorCell)
      container.appendChild(gridCell);
    }
  }


function colorCell(e) {
    this.style.backgroundColor = "black";
}


var slide = document.getElementById('sizeSetting'),
    sliderDiv = document.getElementById('sliderValue');

slide.onchange

window.onload = () => {
    setupGrid(DEFAULT_GRID_SIZE);
}
