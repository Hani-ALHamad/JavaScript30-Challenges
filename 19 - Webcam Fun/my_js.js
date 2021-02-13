const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
var streaming;
var canv_img = document.getElementsByClassName("player")[0]

// to run the video stream, will ask for permission first

window.navigator.mediaDevices.getUserMedia({video: true})
    .then(stream => {
        video.srcObject = stream;
        video.onloadedmetadata = (e) => {
            video.play();
            canvas.setAttribute("width", "640")
            canvas.setAttribute("height", "480")
        };
    })
    .catch( () => {
        alert('you need to give the permission for the cam')
    })

// the draw function repeats every 33.3 ms, means canvas will draw a 30 fps (frames per second) video
// couldnt figure out what he did exactly to change the colors.

video.addEventListener("playing", function draw() {     
    ctx.filter = " opacity(20%)drop-shadow(-200px 0px 50px blue)"
    ctx.drawImage(canv_img, -125, 0);
    ctx.filter = " opacity(20%) drop-shadow(0px 0px 100px red)"
    ctx.drawImage(canv_img, 125, 0);
    ctx.filter = "opacity(10%)"
    ctx.drawImage(canv_img, 0, 0);

    setTimeout(draw, 33.3)
})

function takePhoto(){
    new function(){
        var audio = new Audio('snap.mp3');
        audio.play();
        take_img = canvas.toDataURL(ctx.drawImage(canv_img, 0, 0))
        var a = document.createElement("a")
        a.innerHTML = `<img src="${take_img}" alt="Handsome Man">`
        a.setAttribute("href", take_img)
        a.setAttribute("download", "handsome")
        strip.appendChild(a)
    }
}