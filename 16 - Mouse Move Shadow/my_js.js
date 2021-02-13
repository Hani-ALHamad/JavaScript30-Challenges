var h1 = document.getElementsByTagName("h1")[0]
document.addEventListener("mousemove", function(e){
    x = (e.clientX - document.body.clientWidth / 2) / 3.6
    y = (e.clientY - document.body.clientHeight / 2) / 2
    h1.style.textShadow = `
    ${x}px ${y}px 0 rgb(255, 0, 255, 0.75), 
    ${-y}px ${x}px 0 rgb(64, 0, 255, 0.75), 
    ${-x}px ${y}px 0 rgb(0, 255, 255, 0.75), 
    ${y}px ${-x}px 0 rgb(0, 255, 0, 0.75)`
})