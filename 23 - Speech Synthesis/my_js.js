let voices = [];
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
const rate = document.getElementsByTagName("input")[0]
const pitch = document.getElementsByTagName("input")[1]
const select = document.getElementById("voices");
const text = document.getElementsByTagName("textarea")[0]
const msg = new SpeechSynthesisUtterance(text.value)

window.speechSynthesis.onvoiceschanged = function () {
    var voicesList = window.speechSynthesis.getVoices();
    select.removeChild(select.childNodes[1]);
    for (let index = 0; index < voicesList.length; index++) {
        if (voicesList[index].lang == "en-US" || voicesList[index].lang == "en-GB") {
            var option = document.createElement("option")
            option.innerHTML = `${voicesList[index].name} (${voicesList[index].lang})`
            document.getElementById("voices").appendChild(option)
            voices.push(voicesList[index])
        }
    }
};

select.addEventListener("change", function(){
    msg.text = text.value
    msg.voice = voices[select.selectedIndex]
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(msg)
})

speakButton.addEventListener("click", function(){
    msg.text = text.value
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(msg)
})

stopButton.addEventListener("click", function () {
    msg.text = text.value
    window.speechSynthesis.cancel()
})

rate.addEventListener("change", function(){
    msg.text = text.value
    msg.rate = rate.value
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(msg)
})

pitch.addEventListener("change", function () {
    msg.text = text.value
    msg.pitch = pitch.value
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(msg)
})

text2= text.value
document.addEventListener("focusout", function(e){
    if(text.value != text2){
        msg.text = text.value
        console.log(text2)
        window.speechSynthesis.cancel()
        window.speechSynthesis.speak(msg)
        text2 = text.value
    }
})