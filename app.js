let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

var timer = false;

function start(){
    timer = true;
    stopWatch();
}    
function stop(){
    timer = false;
}
function reset(){
    timer = false;
     hr = 0;
     min = 0;
     sec = 0;
     count = 0;

     document.getElementById("ms").innerHTML = "00";
     document.getElementById("sec").innerHTML = "00";
     document.getElementById("min").innerHTML = "00";
     document.getElementById("hr").innerHTML ="00";
}
function stopWatch(){
    if (timer == true) {
        count = count + 1;

        if (count == 100) {
            sec = sec + 1;
            count = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
            count = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        document.getElementById("ms").innerHTML = count;
        document.getElementById("sec").innerHTML = sec;
        document.getElementById("min").innerHTML = min;
        document.getElementById("hr").innerHTML = hr;

        setTimeout("stopWatch()", 10);
    }
}