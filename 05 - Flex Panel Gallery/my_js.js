document.documentElement.addEventListener("click" ,function(e) {
    if(e.target.parentElement.classList[2] == undefined){
    e.target.classList.add("open")
    setTimeout(function () { e.target.classList.add("open-active")}, 700);
    }
    else{
        e.target.parentElement.classList.remove("open")
        setTimeout(function () { e.target.parentElement.classList.remove("open-active") }, 700);
    }
})
