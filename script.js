const container = document.getElementById("container");

let cell = document.getElementsByClassName("grid-item");

function makeRows(rows, cols) {
	container.style.setProperty('--grid-rows', rows);
	container.style.setProperty('--grid-cols', cols);
	for (c = 0; c < (rows * cols); c++) {
		let cell = document.createElement("div");
		// cell.innerText = (c + 1);
		container.appendChild(cell).className = "grid-item";
	};
	for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener("mouseover", function() {
        this.style.backgroundColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
    	});
	};
};

makeRows(16, 16);



function myFunction() {
	while (container.firstChild) {
		container.removeChild(container.firstChild);
		};
	let gridSize = prompt("Scegli il numero di quadrati per lato", "0");
	if (gridSize > 100) {
		alert ("TROPPO GRANDE");
		makeRows(16, 16);
	} else if (isNaN(gridSize)) {
		alert ("NON É UN NUMERO");
		makeRows(16, 16);
	} else {
	makeRows(gridSize, gridSize);
	};
};

