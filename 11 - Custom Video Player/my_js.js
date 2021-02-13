myVideo = document.getElementsByTagName("video")[0]
myProgress = document.getElementsByTagName("div")[1]
myProgressFilled = document.getElementsByTagName("div")[3]
myPlay = document.getElementsByTagName("button")[0]
myVolume = document.getElementsByTagName("input")[0]
myRate = document.getElementsByTagName("input")[1]
skipper1 = document.getElementsByTagName("button")[1]
skipper2 = document.getElementsByTagName("button")[2]

myVideo.setAttribute("onclick", "playPause()")
myPlay.setAttribute("onclick", "playPause()")
myVolume.setAttribute("onchange", "Volume()")
myRate.setAttribute("onchange", "Rate()")
skipper1.setAttribute("onclick", "Skip1()")
skipper2.setAttribute("onclick", "Skip2()")

setInterval(() => {
    l = myVideo.currentTime
    myProgressFilled.style.flexBasis = `${(l / (myVideo.duration / myVideo.videoWidth)) * (100 / myVideo.videoWidth)}%`
}, 100);

document.getElementsByTagName("div")[2].addEventListener("mousedown", function(e){
    down = true;
    document.addEventListener("mouseup", function (e) { down = false })
    if (down == true) {
        x = e.offsetX * (myVideo.duration / myVideo.videoWidth);
        myProgressFilled.style.flexBasis = `${e.offsetX * (100 / myVideo.videoWidth)}%`
        myVideo.currentTime = x
    }
    document.getElementsByTagName("div")[2].addEventListener("mousemove", function (e){
    
        if(down == true){
            x = e.offsetX * (myVideo.duration / myVideo.videoWidth);
            myProgressFilled.style.flexBasis = `${e.offsetX * (100 / myVideo.videoWidth)}%`
            myVideo.currentTime = x
        }
    })
})

function playPause() {
    if (myVideo.paused){
        myPlay.innerHTML = "❚❚"
        myVideo.play();
    }
    else{
        myPlay.innerHTML = "►"
        myVideo.pause();
    }
}

function Progress(){
    myVideo.currentTime = myProgress.value
}

function Volume(){
    myVideo.volume = myVolume.value
}

function Rate(){
    myVideo.playbackRate = myRate.value
}

function Skip2(){
    myVideo.currentTime += 25
}

function Skip1() {
    myVideo.currentTime -= 10
}
