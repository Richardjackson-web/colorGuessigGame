document.addEventListener("DOMContentLoaded", () => {
    const colorBox = document.getElementById("colorBox");
    const colorOptions = document.getElementById("colorOptions");
    const gameStatus = document.getElementById("gameStatus");
    const scoreDisplay = document.getElementById("score");
    const newGameButton = document.getElementById("newGameButton");
    
    let colors = ["pink", "blue", "lime", "maroon", "purple", "orange"];
    let targetColor = "";
    let score = 0;

    function startNewGame() {
        shuffleColors();
        targetColor = colors[Math.floor(Math.random() * colors.length)];
        colorBox.style.backgroundColor = targetColor;
        renderColorOptions();
    }

    function shuffleColors() {
        colors = colors.sort(() => Math.random() - 0.5);
    }


    function renderColorOptions() {
        colorOptions.innerHTML = "";
        colors.forEach(color => {
            const button = document.createElement("button");
            button.classList.add("color-button");
            button.style.backgroundColor = color;
            button.setAttribute("data-testid", "colorOption");
            button.addEventListener("click", () => checkGuess(color));
            colorOptions.appendChild(button);
        });
    }

    function checkGuess(selectedColor) {
        if (selectedColor === targetColor) {
            gameStatus.textContent = "Correct!";
            score+=20;
            scoreDisplay.textContent = score;
            gameStatus.style.color = "green";
            scoreDisplay.style.color = "green";
            fadeIn(gameStatus);
            fadeIn(scoreDisplay);
            startNewGame();
        } else {
            gameStatus.textContent = "Wrong! Try Again!";
            scoreDisplay.style.color = "red";
            gameStatus.style.color = "red";
            slide(gameStatus);
            slide(scoreDisplay);
        }
    }



    function fadeIn(e) {
        e.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
        e.style.opacity = "0";
        e.style.transform = "translateY(-10px)";

        setTimeout(() => {
            e.style.opacity = "1";
            e.style.transform = "translateY(0)";
        }, 500);
    }

    function slide(e) {
        e.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
        e.style.opacity = "0";
        e.style.transform = "translateX(-40px)";

        setTimeout(() => {
            e.style.transition = "transform 0.5s ease-in";
            e.style.opacity = "1";
            e.style.transform = "translateX(10px)";

            setTimeout(() => {
                e.style.transform = "translateX(0)";
            }, 300);
        }, 500);
    }

    newGameButton.addEventListener("click", ()=>{
        score = 0;
        scoreDisplay.textContent = score;
        scoreDisplay.textContent = score;
        scoreDisplay.style.color = "white";
        gameStatus.textContent = "";
        startNewGame();
        });

        startNewGame();
});
