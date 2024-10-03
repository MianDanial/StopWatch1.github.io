let milli = 0 ;
let sec = 0;
let min = 0 ;
let hr = 0 ;

let counter = false ;

function start() {
    counter = true;
    myFun();
}

function stop() {
    counter = false
    myFun();
}
function reset() {
    location.reload();
    
}

function myFun() {
    if (counter == true) {
        milli = milli + 1 ;
        if (milli == 100) {
            sec = sec + 1;
            milli = 0;
        }
        if (sec==60) {
            min = min + 1;
            sec = 0
        }
        if (min == 60) {
            hr = hr +1;
            min = 0;
        }

        let getMilli = milli;
        let getSec = sec;
        let getMin = min;
        let getHr = hr;

        if (milli < 10) {
            getMilli = "0" + milli; 
        }

        if (sec < 10) {
            getSec = "0" + sec; 
        }

        if (min < 10) {
            getMin = "0" + min; 
        }

        if (hr < 10) {
            getHr = "0" + hr; 
        }



        setTimeout("myFun()",10);
        document.getElementById("milli").innerHTML= getMilli;
        document.getElementById("sec").innerHTML= getSec;
        document.getElementById("min").innerHTML= getMin;
        document.getElementById("hr").innerHTML= getHr;
    }
}