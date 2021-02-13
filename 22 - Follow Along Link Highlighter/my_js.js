a = document.querySelector("a")
span = document.createElement("span")
span.classList.add("highlight")
document.body.appendChild(span)
highlight = document.getElementsByClassName("highlight")[0]


document.addEventListener("mouseover", function(e){
    if (e.target.tagName == "A"){
        highlight.style = `
        width: ${e.target.offsetWidth}px; 
        height: ${e.target.offsetHeight}px; 
        transform: translate(${e.target.getBoundingClientRect().left}px, 
        ${e.target.getBoundingClientRect().top + window.scrollY}px);`;
    }
})