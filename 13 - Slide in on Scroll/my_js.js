// i didnt use his javascript code in the html file and made an entirely new one
window.onload = (event) =>{
    img = document.getElementsByTagName("img")
    offset = [];
    height = [];
    for (let index = 0; index < img.length; index++) {
        offset.push(img[index].offsetTop)
        height.push(img[index].height)
    }
    document.addEventListener("scroll", function () {
        for (let i = 0; i < img.length; i++) {
            if ((img[i].offsetTop + (img[i].height / 2) - window.scrollY) > 0 && (img[i].offsetTop + (img[i].height / 2) - window.scrollY) < window.innerHeight){
                img[i].classList.add("active")
            }
            else{img[i].classList.remove("active")}
        }
    })
};