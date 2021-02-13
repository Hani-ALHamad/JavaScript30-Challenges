const div = document.getElementsByClassName("items")[0];

var bool;
var innerW;
var mouseX;
var scrollX;

function down(e){
    bool = true;
    innerW = window.innerWidth;
    mouseX = e.clientX
    scrollX = div.scrollLeft;
    div.classList.add("active")
}
function up(e){
    bool = false;
    div.classList.remove("active")
}

function move(e){
    if(bool == true){
        div.scrollLeft = -((e.clientX - mouseX) * 3) + scrollX
    }
}

div.addEventListener("mousedown", down)
div.addEventListener("mousemove", move)
div.addEventListener("mouseup", up)
div.addEventListener("mouseleave", up)