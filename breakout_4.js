// JAVASCRIPT-4: PADDLE COLLISIONS
// © 2018, wbamberg
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 12;
var x = ballRadius;
var y = ballRadius;
var dx = 2;
var dy = -2;
var paddleHeight = 100;
var paddleWidth = 12;
var paddleY = (canvas.height-paddleHeight)/2;
var downPressed = false;
var upPressed = false;

function keyDownHandler(e) {
    if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = false;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = false;
    }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, 2 * Math.PI);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(0, paddleY, paddleWidth, paddleHeight);
    ctx.fillStyle = "#333";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    
    if(x + dx > canvas.width-ballRadius) {
        dx = -dx;
    }
    else if (x + dx < ballRadius) {
        if (y > paddleY && y < paddleY + paddleHeight) {
            dx = -dx;
        }
        else {
            alert("GAME OVER");
            document.location.reload();
            clearInterval(interval);
        }
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    if(downPressed && paddleY < canvas.height-paddleHeight) {
        paddleY += 4;
    }
    else if(upPressed && paddleY > 4) {
        paddleY -= 4;
    }
    
    x += dx;
    y += dy;
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
var interval = setInterval(draw, 10);