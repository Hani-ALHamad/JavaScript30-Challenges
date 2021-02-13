const words =  document.getElementsByClassName("words")[0]
SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var finished = false;

function repeater(){
    var recognizer = new window.SpeechRecognition();
    recognizer.lang = 'en-US'
    recognizer.interimResults = true;

    recognizer.onstart = function () {
        var p = document.createElement("p")
        words.appendChild(p)
    };

    recognizer.onresult = function (event) {
        var text = event.results[0][0].transcript;
        words.lastChild.innerHTML = `${text}`;
    };

    recognizer.onspeechend = function () {
        recognizer.stop();
        repeater()
    }
    recognizer.start()
}

repeater()