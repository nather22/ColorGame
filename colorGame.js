let numSquares = 6;
let colors = colorGenerator(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColors();
let colorDisplayText = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");


colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function(){
    numSquares = 3;
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    colors = colorGenerator(numSquares);
    pickedColor = pickColors();
    colorDisplay.textContent = pickedColor;
    h1.style.background = "steelblue";
    for(let i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function(){
    numSquares = 6;
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    colors = colorGenerator(numSquares);
    pickedColor = pickColors();
    colorDisplay.textContent = pickedColor;
    h1.style.background = "steelblue";
    for(let i=0; i<squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
})

resetButton.addEventListener("click", function(){
    colors = colorGenerator(numSquares);
    pickedColor = pickColors();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors?"
    h1.style.background = "steelblue";
    for(let i=0; i< squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }

})

for(let i=0; i< squares.length; i++){
    //Add initial colors
    squares[i].style.backgroundColor = colors[i];
    //click listeners
    squares[i].addEventListener("click", function(){
        let clickedColor = squares[i].style.backgroundColor;
        if(clickedColor === pickedColor){
            changeColors(clickedColor)
            h1.style.background = clickedColor;
            messageDisplay.textContent = "Correct"
            resetButton.textContent = "Play Again?"
        } else {
            squares[i].style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color){
    for(let i=0; i< squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColors(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function colorGenerator(amt){
    let colors = [];
    for(let i = 0; i<amt; i++){
        colors.push(randoColor());
    }
    return colors;
}

function randoColor(){
    return "rgb(" + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ")";
}