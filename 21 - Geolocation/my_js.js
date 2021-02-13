// couldnt test the speed and heading parts.

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(currentPosition);
    }
}
function currentPosition(position) {
    console.log(position.coords);
    document.getElementsByClassName("speed-value")[0].innerHTML = position.coords.speed
    document.getElementsByClassName("arrow")[0].style.transform = `rotate(${position.coords.heading}deg)`
}
getLocation()
