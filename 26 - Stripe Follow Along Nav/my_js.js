const nav = document.getElementsByTagName("nav")[0];
const arrow = document.getElementsByClassName("dropdownBackground")[0];
const ul = document.getElementsByClassName("cool")[0];
const bio = document.getElementsByClassName("dropdown1")[0]
const courses = document.getElementsByClassName("courses")[0]
const other = document.getElementsByClassName("dropdown3")[0]
var inner= "";

function move(e){
    if (e.target.parentNode.tagName == "LI" || e.target.parentNode.tagName == "UL" || e.target.parentNode.tagName == "DIV"){
        if (e.target.tagName == "A"){
            parent = e.target.parentNode
            child = e.target
        }
        else if(e.target.tagName == "LI"){
            parent = e.target
            child = e.target.childNodes[1]
        }
        if (child.innerHTML != inner && ["About Me", "Courses", "Other Links"].includes(child.innerHTML)){
            ul.childNodes[1].className = ""
            ul.childNodes[3].className = ""
            ul.childNodes[5].className = ""
            inner = child.innerHTML
        }

        parent.classList.add("trigger-enter");
        setTimeout(() => {
            parent.classList.add("trigger-enter-active");
        }, 200);

        switch (child.innerHTML) {
            case "About Me":
                arrow.style = `width: ${bio.offsetWidth}px; height:${bio.offsetHeight}px; transform: translate(${child.getBoundingClientRect().right - bio.offsetWidth / 2 - child.offsetWidth / 2}px,
                ${child.getBoundingClientRect().top + window.scrollY - child.offsetTop / 4}px)`
                break;
            case "Courses":
                arrow.style = `width: ${courses.offsetWidth}px; height:${courses.offsetHeight}px; transform: translate(${child.getBoundingClientRect().right - courses.offsetWidth / 2 - child.offsetWidth / 2}px,
                ${child.getBoundingClientRect().top + window.scrollY - child.offsetTop / 4}px)`
                break;
            case "Other Links":
                arrow.style = `width: ${other.offsetWidth}px; height:${other.offsetHeight}px; transform: translate(${child.getBoundingClientRect().right - other.offsetWidth / 2 - child.offsetWidth / 2}px,
                ${child.getBoundingClientRect().top + window.scrollY - child.offsetTop / 4}px)`
                break;
        }
        nav.firstChild.nextSibling.classList.add("open");
    }
    else{
        nav.firstChild.nextSibling.classList.remove("open");
        ul.childNodes[1].className = ""
        ul.childNodes[3].className = ""
        ul.childNodes[5].className = ""
    }
}
document.addEventListener("mouseover", move)