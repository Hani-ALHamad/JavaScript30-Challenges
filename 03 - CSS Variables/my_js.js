document.documentElement.addEventListener("mousedown", function(e){
    document.documentElement.addEventListener("mousemove", function (e) {
    switch(e.target.id){
        case "spacing":
        document.documentElement.style.setProperty("--spacing", document.getElementById("spacing").value + "px")
        case "blur":
            document.documentElement.style.setProperty("--blur", document.getElementById("blur").value + "px")
        } 

    })
}, true)

document.documentElement.addEventListener("click", function (e) {
    document.documentElement.style.setProperty("--base", document.getElementById("base").value)
})