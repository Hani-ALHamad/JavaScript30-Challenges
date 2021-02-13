//UPDATED THE CODE: nesting event listeners inside each other caused the rate for
// number and color variables to keep accelerating up with each click, solved by not nesting them.
color = 0;
number = 100;
increase_color = true
increase_weight = false
var c = document.getElementById("draw")
var context = c.getContext("2d")
c.width = window.innerWidth
c.height = window.innerHeight
context.lineCap = "round";
context.lineJoin = "round"
if (!context.strokeStyle) {
    context.strokeStyle = "red"
    context.lineWidth = "100"
}
document.addEventListener("mousedown", function (e) {
    x = e.offsetX
    y = e.offsetY
    mouseDOWN = true;
})
document.addEventListener("mouseup", up);
document.addEventListener("mousemove", move);

function move(e) {
    if (mouseDOWN == true) {
        if (color == 345) { increase_color = false }
        if (color == 0) { increase_color = true }
        if (number == 0) { increase_weight = true }
        if (number == 100) { increase_weight = false }
        increase_color == false ? color -= 1 : color += 1;
        context.strokeStyle = `hsl(${color}, 100%, 50%)`;
        increase_weight == false ? number -= 1 : number += 1
        context.lineWidth = `${number}`
        context.beginPath()
        context.moveTo(e.offsetX, e.offsetY)
        context.lineTo(x, y)
        context.stroke()
        x = e.offsetX
        y = e.offsetY
    }
}

function up(e) {
    mouseDOWN = false;
}