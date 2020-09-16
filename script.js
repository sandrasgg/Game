document.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft") { moveLeft(); }
    if (event.key === "ArrowRight") { moveRight(); }
});

var character = document.getElementById("character");
function moveLeft() {
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left -= 100;
    if (left >= 0) {
        character.style.left = left + "px";
    }
};

function moveRight() {
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left += 100;
    if (left < 300) {
        character.style.left = left + "px";
    }
};

var block = document.getElementById("block");
var counter = 0;
document.getElementById('score').innerText = "Score: " + counter;
block.addEventListener('animationiteration', () => {
    var random = Math.floor(Math.random() * 3);
    var color = '#' + parseInt(Math.random() * 0xffffff).toString(16)
    left = random * 100;
    block.style.left = left + "px";
    block.style.backgroundColor = color;
    counter++;
    document.getElementById('score').innerText = "Score: " + counter;
});

setInterval(function () {
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
    if (characterLeft == blockLeft && blockTop < 500 && blockTop > 200) {
        alert("Game over! Final score: " + counter);
        block.style.animation = 'none';
    }
}, 1);

document.getElementById("left").addEventListener("touchstart", moveLeft);
document.getElementById("right").addEventListener("touchstart", moveRight);
