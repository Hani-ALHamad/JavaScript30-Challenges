li = document.querySelectorAll("li")
var total= 0;
li.forEach(element => {
    splitted = element.dataset.time.split(":")
    splitted[0] *= 60
    splitted[1] = Number(splitted[1])
    //you can use total+=splitted[0]+splitted[1] instead
    total += splitted.reduce((r, t) => (r+=t))
});

hrs = total / 3600
mins = hrs - Math.floor(hrs)
sec = mins - Math.floor(mins)
console.log(Array.from(li))
console.log(Math.floor(hrs), Math.floor(mins*60), Math.floor(sec*60));