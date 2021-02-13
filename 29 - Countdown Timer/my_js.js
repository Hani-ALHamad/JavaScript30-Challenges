const div = document.getElementsByClassName("timer__controls")[0];
const input = document.getElementsByTagName("input")[0];
const left = document.getElementsByClassName("display__time-left")[0];
const end = document.getElementsByClassName("display__end-time")[0];
var time;
var id;
var t_id;
var timeout_interval;

function click(e){
    if(e.target.tagName == "BUTTON"){
        time = Number(e.target.getAttribute("data-time"));
        clock();
    }
}

function enter(e){
    if (e.keyCode == 13) {
        e.preventDefault();
        time = Number(input.value) * 60;
        input.value = "";
        clock();
    }
}

function clock(){
    minutes = Math.floor((time) / 60);
    seconds = Math.floor(((time/60)- minutes)*60) ;
    left.innerHTML = `${minutes}:${('0' + seconds).slice(-2)}`;
    d = new Date();
    hrs = d.getHours()+ Math.floor(time/3600);

    while(hrs > 12){
        hrs-=12;
    };

    mon = d.getMinutes();
    min =(mon+ (((time / 3600) - Math.floor(time / 3600)) * 60)).toFixed(0);
    if(min >= 60){
        min -=60;
        hrs +=1;
    }

    end.innerHTML = `Be Back At ${('0' + hrs).slice(-2)}:${('0' + min).slice(-2)}`;
    d.getHours();

    clearInterval(id);
    clearTimeout(t_id);
    timeout_interval = time*1000;

    var interval = setInterval(() => {
        time -= 1;
        minutes = Math.floor((time) / 60);
        seconds = Math.round(((time / 60) - minutes) * 60);
        left.innerHTML = `${minutes}:${('0' + seconds).slice(-2)}`;
        document.title = left.innerHTML;
    }, 1000);
    
    var timeout = setTimeout(() => {
        clearInterval(id);
    }, timeout_interval);

    id = interval;
    t_id = timeout;
}

div.addEventListener("click", click);
input.addEventListener("keydown", enter);