document.addEventListener("input", my)

async function get(z){
    
    let x = await fetch(z);
    let y = await x.json()
    return y
}

async function my(){
    l = await get(endpoint)
    inner = document.getElementsByClassName("search")[0].value
    listo = []
    pop = []
    for (var index = 0; index < l.length; index++) {
        reg = new RegExp(inner, 'gi')
        if (l[index].city.match(reg) || l[index].state.match(reg)){
            pop.push(Number(l[index].population).toLocaleString())
            listo.push(`${l[index].city.replace(reg, `<span class="hl">${inner}</span>`)}, ${l[index].state.replace(reg, `<span class="hl">${inner}</span>`)}`) 
        }  
    }
    creatLi()
}

function creatLi(){
    ul = document.getElementsByClassName("suggestions")[0]
    ul.innerHTML = ""
    for (let index = 0; index < listo.length; index++) {
        var li = document.createElement('li')
        inner = document.getElementsByClassName("search")[0].value
        li.innerHTML = "<span>" + listo[index] + "\t\t" +'</span><span class="population">'+pop[index]+"</span>"
        ul.appendChild(li)
    }
}