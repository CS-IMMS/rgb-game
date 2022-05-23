let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");
let clickedColor;
let game= {}


function setupModeButtons(){
	for(let i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "facile" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}
//funtion Configuration des carrés
function setupSquares(){
	for(let i = 0; i < squares.length; i++){
	
		squares[i].addEventListener("click", function(){
			if(this.style.backgroundColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(pickedColor);
				h1.style.background = pickedColor;
			} else {
				this.style.backgroundColor = "white";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	//choisissez une nouvelle couleur aléatoire dans le tableau
	pickedColor = pickColor();
	//changer l'affichage de couleur pour correspondre à la couleur choisie
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	//changer la couleur des caré
	for(let i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "black";
}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	//boucle à travers tous les carrés
	for(let i = 0; i < squares.length; i++){
		//changer chaque couleur pour correspondre à la couleur donnée
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
//function pour générer des couleurs aléatoires
function generateRandomColors(num){
	let arr = [];
	for(let i = 0; i < num; i++)
		arr.push(randomColor());
	return arr;
}

function randomColor(){
	let red = Math.floor(Math.random() * 256);
	let green = Math.floor(Math.random() * 256);
	let blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}


game.init = function(){
	setupModeButtons();
	setupSquares();
	reset();
	}
	
	game.init();
	