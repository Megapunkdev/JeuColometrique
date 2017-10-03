var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("#colorh1");
var resetButton = document.querySelector("#reset");
var difficultyButtons = document.querySelectorAll(".difficulty");

init();

// initialisation du jeu

function init(){
    setupdifficultyButtons();

    setupSquares();

    setupResetButton();

    reset();
}

// fonction utilisée pour préparer les boutons liés à la difficultés

function setupdifficultyButtons(){
    for(var i = 0; i < difficultyButtons.length; i++){
        difficultyButtons[i].addEventListener("click", function(){
            difficultyButtons[0].classList.remove("selected");
            difficultyButtons[1].classList.remove("selected");
            difficultyButtons[2].classList.remove("selected");
            this.classList.add("selected");

            this.textContent === "Facile" ? numSquares = 3 : this.textContent === "Normal" ? numSquares = 6 : numSquares = 9;

            reset();
        });
    }    
}

// fonction de création et préparation des carrés de couleur

function setupSquares(){
    for(var i=0; i < squares.length; i++){
        
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
        
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Bonne reponse ! ";
                resetButton.textContent = "Rejouer ?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Essaye encore !";
            }
        });
    }    
}

// fonction de remise à zero des carrés

function reset(){

    colors = generateRandomColors(numSquares);
    
    pickedColor = pickColor();
        
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "Nouvelles couleurs";
    
    messageDisplay.textContent = "";
    
    for(var i=0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }

    } 
    h1.style.backgroundColor = "steelblue";

}

function setupResetButton(){
    resetButton.addEventListener("click", function(){
        reset();
    });
}

// fonction de changement de la couleur des carrés

function changeColors(color){
    for(var i=0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

// fonction de selection de la couleur finale

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// fonction de génération de la liste des couleurs

function generateRandomColors(num){
    var arr = []

    for(var i=0; i < num; i++){
        arr.push(randomColorRGB());
    }

    return arr;

}

// fonction de couleur aléatoire format RGB

function randomColorRGB(){
    var color = {};
    color.r = Math.floor(Math.random() * 256);
    color.g = Math.floor(Math.random() * 256);
    color.b = Math.floor(Math.random() * 256);

    return "rgb(" + color.r + ", " + color.g + ", " + color.b + ")";
}