const header = document.getElementsByTagName("header")[0]
const logo = document.getElementsByTagName("li")[0]
const nav = document.getElementsByTagName("nav")[0]
const div = document.getElementsByTagName("div")[0]

document.addEventListener("scroll", function(e){
    if (header.offsetHeight <= window.scrollY ){
        logo.style = "max-width : 500px"
        nav.id = "fixed"
        div.classList.add("scale")
        document.body.classList.add("padding")

    }
    else{
        logo.style = "max-width : 0px"
        nav.id = ""
        div.classList.remove("scale")
        document.body.classList.remove("padding")
    }
})