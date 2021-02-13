const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const game = document.getElementsByClassName("game")[0];
var current;
var time;
var counter;

function startGame(e){
    counter = 0;
    scoreBoard.innerHTML = "0";
    d = new Date();
    startTime = d.getTime();
    repeater();

    function repeater(e){
        clearTimeout(timeout);
        current = Math.floor(Math.random() * 6);
        holes[current].classList.add("up");
        time = (Math.floor(Math.random() * 5) + 4) * 100;

        var timeout = setTimeout((e) => {
            holes[current].classList.remove("up");
            d2 = new Date();
            if(d2.getTime() - startTime < 10000){
            repeater();
            }
        }, time);
    }
}

game.addEventListener("click", function (e) {
    if (e.target == holes[current].firstChild.nextSibling) {
        counter+=1;
        scoreBoard.innerHTML = counter;
    }
});