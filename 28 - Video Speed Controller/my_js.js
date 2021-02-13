const speed = document.getElementsByClassName("speed")[0];
const bar = document.getElementsByClassName("speed-bar")[0];
const video = document.getElementsByTagName("video")[0]
const height = speed.offsetHeight

speed.addEventListener("mousemove", function(e){
    percentage = ((100 / height) * e.offsetY).toFixed(2)
    inner = (percentage / 25).toFixed(2)
    if (inner >= 0.39){
    video.playbackRate = inner
    bar.style.height = `${percentage}%`
    bar.innerHTML = `${inner}x`
    }
})
