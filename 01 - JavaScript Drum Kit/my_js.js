document.onkeydown = pressed
function pressed(x){
    x = String(window.event.keyCode);
    setTimeout(function() { 
        document.querySelector(`[data-key = ${CSS.escape(x)}]`).classList.remove("playing");
    }, 100);
    document.querySelector(`[data-key = ${CSS.escape(x)}]`).classList.add("playing");
    new Audio((document.querySelector(`audio[data-key = ${CSS.escape(x)}]`)).src).play() ;
}
