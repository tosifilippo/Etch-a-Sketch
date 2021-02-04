const container = document.getElementById("container");
const colorButtons = document.querySelectorAll('.color-btns');

let cell = document.getElementsByClassName("grid-item");
let color = "black";

colorButtons.forEach(colorButton => colorButton.addEventListener('click', changeColor));

makeRows(16, 16);

function makeRows(rows, cols) {
	container.style.setProperty('--grid-rows', rows);
	container.style.setProperty('--grid-cols', cols);
	for (c = 0; c < (rows * cols); c++) {
		let cell = document.createElement("div");
		// cell.innerText = (c + 1);
		container.appendChild(cell).className = "grid-item";
	};
	mouseHover();
};

function mouseHover() {
	for (let i = 0; i < cell.length; i++) {
		cell[i].addEventListener("mouseover", function() {
			switch (color) {
				case 'rainbow':
					this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
					break;  
				case 'gray':
					if (this.style.backgroundColor.match(/rgba/)) {
						let currentOpacity = Number(this.style.backgroundColor.slice(-4, -1));
						if (currentOpacity <= 0.9) {
							this.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
							this.classList.add('gray');
						}
						} else if (this.classList == 'gray' && this.style.backgroundColor == 'rgb(0, 0, 0)') {
							return;
						} else {
							this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';  
						}
					break;
				case 'black':
					this.style.backgroundColor = '#000000';
					break;
			}; 	
    	});
	};
};

function changeColor(event) {
    switch (event.target.dataset.color) { 
        case 'rainbow':
            color = 'rainbow';
            break;  
        case 'gray':
            color = 'gray';
            break;
        default:
            color = 'black';
            break;
    }; 
};

function refresh() {
	while (container.firstChild) {
		container.removeChild(container.firstChild);
		};
	let gridSize = prompt("Quante celle su ogni lato? Scegli un numero!", "0");
	if (gridSize > 100) {
		alert ("TROPPO GRANDE!!!");
		makeRows(16, 16);
	} else if (isNaN(gridSize)) {
		alert ("NON É UN NUMERO!!!");
		makeRows(16, 16);
	} else {
	makeRows(gridSize, gridSize);
	};
};
