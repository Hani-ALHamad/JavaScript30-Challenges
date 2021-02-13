const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
ul = document.getElementById("bands");
obj = {};
var variable ;
bands.forEach(element => {
    if (["The", "A", "An"].includes(element.split(" ")[0])) {
        variable = element.split(" ")
        variable.shift()
        variable = variable.join(" ")
        obj[`${variable}`] = element    
    }
    else{
        obj[`${element}`] = element
    }
});
obj = Object.keys(obj).sort().reduce((reduced ,key) => (reduced[key] = obj[key], reduced),{})

for(i in obj){
    var li = document.createElement("li")
    li.innerHTML = obj[i];
    ul.appendChild(li)
}