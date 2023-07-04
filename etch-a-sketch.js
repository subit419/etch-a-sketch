const divRows = 16;
const divColumns = 16;
const container = document.querySelector('.container');

for (let row = 1; row <= divRows; row++) {
    // Each Row has 16 columns of divs
    var divRow = document.createElement("Div");
    divRow.id = `row${row}`;
    divRow.className = "row"
    
    container.appendChild(divRow);
    let currentRow = document.querySelector(`#row${row}`);
    console.log(currentRow);

    for (let column = 1; column <= divColumns; column++) {
        var divColumn = document.createElement("Div");
        divColumn.id = `column${column}`;
        divColumn.className = "column"

        
        currentRow.appendChild(divColumn);
    }
}