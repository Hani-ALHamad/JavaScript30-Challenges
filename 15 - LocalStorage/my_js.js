const addItems = document.querySelector('.add-items');
const ul = document.getElementsByTagName("ul")[0];
let first;
const first_li = document.getElementsByTagName("li")[0]
if (!window.localStorage.getItem("items1")){
    window.localStorage.setItem("items1", "[")
}

document.addEventListener("submit", A)
document.addEventListener("change", function(e){

    if(e.target.type == "checkbox"){
        parsed = JSON.parse(window.localStorage.getItem("items1").slice(0, -1) + "]")
        parsed[e.target.id].bool = e.target.checked
        changed = JSON.stringify(parsed).slice(0,-1)+","
        window.localStorage.setItem("items1", changed)
    }
})

function A(e){
    x = addItems[0].value
    let my = JSON.stringify({text: x , bool:false})
    local = window.localStorage.getItem("items1") + my + ","
    window.localStorage.setItem("items1", local)

    new function (e) {
        if(!first){
            first_li.style.display = "none";
            first = true;
        }
        parsed = JSON.parse(window.localStorage.getItem("items1").slice(0, -1) + "]")
        var li = document.createElement("li")
        li.innerHTML = `<input id ="${parsed.length-1}" type="checkbox"><label for="${parsed.length-1}"> ${addItems[0].value}</label></li>`
        ul.appendChild(li)
        addItems[0].value = ""
    }
    e.preventDefault()
}

if (window.localStorage.getItem("items1") != "["){
    first_li.style.display = "none";
    first = true;
    parsed = JSON.parse(window.localStorage.getItem("items1").slice(0, -1) + "]")
    for (let index = 0; index < parsed.length; index++) {
        var li = document.createElement("li")
        if(parsed[index].bool == true){
            li.innerHTML = `<input id ="${index}" type="checkbox" checked=""><label for="${index}"> ${parsed[index].text}</label></li>`
        }
        else{
            li.innerHTML =`<input id ="${index}" type="checkbox"><label for="${index}"> ${parsed[index].text}</label></li>`
        }
        ul.appendChild(li)
    }
}