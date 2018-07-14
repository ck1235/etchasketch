/**
 * @author: Charita K
 */

let resetBtn = document.querySelector('.reset');
let gridSizeBtn = document.querySelector('.gridSize');
let container = document.querySelector('#grid');
let anyColorBtn = document.querySelector('.anyColor');
let gridSize = 8;
let defaultColor = '#a09dff';

function buttons(){
	anyColorBtn.addEventListener('click', function(){
		let color = prompt("Choose a color in one of the following formats: 1) red 2) #ff0000 3) rgb(255,0,0)");
		changeToColor(color);
	})

	resetBtn.addEventListener('click', function(){
		resetGrid();
	})

	gridSizeBtn.addEventListener('click', function(){
		changeGridSize();
	})
}

function changeToColor(color){
	color = color.toLowerCase().replace(/\s+/g, '');
	defaultColor = color;
	let squaresToChangeColor = document.querySelectorAll('#grid > div')

	for(let i=0; i<squaresToChangeColor.length; i++){
			squaresToChangeColor[i].addEventListener('mouseover', function(){
				this.style.backgroundColor = defaultColor;
				this.style.border = defaultColor;
			})
		}
}

function changeGridSize(){
	gridSize = prompt("How many squares would you like per side?")
	resetGrid()
}

function resetGrid(){

	let square = container.firstChild;

	while(square){
		container.removeChild(square);
		square = container.firstChild;
	}

	createGrid(gridSize, defaultColor);
}

function createGrid(size, color){
	let elem = 600/size;
	let square;

	for(let x=0; x < size * size; x++){
		square = document.createElement('div');
		
		square.style.width = elem + 'px';
		square.style.height = elem + 'px';
		square.style.backgroundColor = color;
		square.style.border = color;
		square.style.opacity = 0.0;

		square.addEventListener('mouseover', changeOpacity);

		container.appendChild(square);
	}

	gridSize = size;
}

function changeOpacity(){
	if(this.style.opacity < 1.0){
		this.style.opacity = parseFloat(this.style.opacity) + 0.1;
	}
}

buttons();
createGrid(gridSize, defaultColor);