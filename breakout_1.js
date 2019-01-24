// JAVASCRIPT-1: MOVE BALL ON CANVAS
// © 2018, wbamberg
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 12;
var x = ballRadius;
var y = ballRadius;
var dx = 2;
var dy = -2;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, 2 * Math.PI);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    
    x += dx;
    y += dy;
}

setInterval(draw, 10);