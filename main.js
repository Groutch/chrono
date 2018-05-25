var sound =document.createElement("audio");
sound.src = "quack.mp3";

function chronometre() {
    var currentTime = 0;
    var intervalID;
    displayTime = function (timerSeconds) {
        var sec = timerSeconds%60;
        var min = Math.trunc(timerSeconds/60);
        if (min < 10)
        {
            min='0'+min;
        }
        if (sec < 10)
        {
            sec='0'+sec;
        }
        $("#chrono").html(min+":"+sec);
    };

    this.start = function () {
        $(".btstart").prop("disabled",true);
        displayTime(currentTime);
        if (intervalID != undefined) {
            clearInterval(intervalID);
        }
        intervalID = setInterval(function () {
            currentTime++;
            displayTime(currentTime);
        }, 1000);
    };

    this.pause = function () {
        $(".btstart").prop("disabled",false);
        if (intervalID!=undefined) {
            clearInterval(intervalID);
            displayTime(currentTime);
        }
    };

    this.stop = function () {
        $(".btstart").prop("disabled",false);
        if (intervalID!=undefined) {
            clearInterval(intervalID);
        }
        currentTime = 0;
        sound.play();
        displayTime(currentTime);
    };

};


$(document).ready(function () {
    var chrono = new chronometre();
    $(".btstart").click(chrono.start);
    $(".btpause").click(chrono.pause);
    $(".btstop").click(chrono.stop);
});
