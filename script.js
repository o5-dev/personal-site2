let score = 0;

const scoreDisplay = document.querySelector("#score");

const button = document.querySelector("#start-button");

button.addEventListener("click", function() {
    console.log("clicked!");
    score = 0;
    scoreDisplay.textContent = "Score: " + score;
    button.disabled = true;

    const block = document.createElement("div");

    block.classList.add("base");
    block.style.left = "100px";
    block.style.top = "100px";

    const playZone = document.querySelector(".play-zone");
    playZone.appendChild(block);

    let foodX = Math.floor(Math.random() * 20) * 20;
    let foodY = Math.floor(Math.random() * 20) * 20;

    const food = document.createElement("div");
    food.classList.add("food");
    food.style.left = foodX + "px";
    food.style.top = foodY + "px";
    playZone.appendChild(food);

    let x = 100;
    let y = 100;
    let dx = 20;
    let dy = 0;
    block.style.left = x + "px";
    block.style.top = y + "px";

    const gameLoop = setInterval(function() {
        x = x +dx;
        y = y +dy;
        block.style.left = x + "px";
        block.style.top = y + "px";

        if (x === foodX && y === foodY) {
            console.log("ate it!");
            score = score + 1;
            scoreDisplay.textContent = "Score: " + score;

            foodX = Math.floor(Math.random() * 20) * 20;
            foodY = Math.floor(Math.random() * 20) * 20;
            food.style.left = foodX + "px";
            food.style.top = foodY + "px";

        }

    if (x < 0 || x > 380 || y < 0 || y > 380) {    
        console.log("game over");
        clearInterval(gameLoop);
        alert("Game Over! Score: " + score);
        playZone.innerHTML = "";
        button.disabled = false;

    }

    }, 100);
    

document.addEventListener("keydown", function(event) {
    if (event.key.startsWith("Arrow")) {
        event.preventDefault(); 
        } 
    if (event.key === "ArrowUp") {
        dx = 0;
        dy = -20;

    } else if (event.key === "ArrowDown") {
        dx = 0;
        dy = 20;

    } else if (event.key === "ArrowLeft") {
        dx = -20;
        dy = 0;

    } else if (event.key === "ArrowRight") {
        dx = 20;
        dy = 0;
    }

   

});

});

