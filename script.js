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
};

makeRows(16, 16);

for (var i = 0; i < cell.length; i++) {
    cell[i].addEventListener("mouseover", function() {
        this.style.backgroundColor = "green";
    });
};

function myFunction() {
	for (var i = 0; i < cell.length; i++) {
	cell[i].style.backgroundColor = "white";
	};
};