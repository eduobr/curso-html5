function ResetTime() {
    clearInterval(cronometer);
}

function StartTime() {
    let seconds = 0;

    //obtener elemento segundos
    let s = document.getElementById("seconds");

    //obtener elemento minutos
    let m = document.getElementById("minutes");

    cronometer = setInterval(function () {
        seconds++;

        //obtener segundos
        secs = seconds;
        //obtener minutos
        mins = 0;

        while (secs >= 60) {
            mins++;
            /*cuando los segundos sean mayor o igual a 60
            se le sumara 1 a los minutos y se volvera a 0
            lo segundos
            */
            secs -= 60;
        }

        m.innerHTML = ('0'+mins).slice(-2);
        s.innerHTML = ('0'+secs).slice(-2);
        
        Total_secs = secs;
        Total_mins = mins;
    }, 1000);
}