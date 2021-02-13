function ticking(){
    var time = new Date();
    document.querySelectorAll("div")[4].style.transform = `rotate(${time.getSeconds() * 6 + 90}deg)`
    document.querySelectorAll("div")[3].style.transform = `rotate(${(time.getMinutes() * 6 + 90) + (time.getSeconds() * 6) / 60}deg)`
    document.querySelectorAll("div")[2].style.transform = `rotate(${((time.getHours() > 12 ? time.getHours() - 12 : time.getHours()) * 30 + 90) + (time.getMinutes() * 6) / 12}deg)`
}
ticking()
setInterval(ticking, 1000);
