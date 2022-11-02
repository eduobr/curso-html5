function hide_message(restart) {
    Message = document.getElementById("message");
    Message.style.display = "none";

    //si no es un mensaje de bienvenida(game over) debe volver a comenzar el juego
    if (restart){
        autoplay();
    }
}

function ShowMessage(string_notificacion, string_button, game_over) {
    ResetTime();
    Next_Level = !game_over;

    if (game_over == false) {
        string_score = "Level -" + Level + " Time";
        if (Total_mins < 10) {
            string_score = string_score + Total_mins + ":";
        }
        if (Total_secs < 10) {
            string_score = string_score + Total_secs;
        }
    } else {
        string_score = "Score: " + (Level_Moves - Moves) + "/" + Level_Moves;
    }

    Message = document.getElementById("message");
    Message.style.display = "block";

    Message_Notificacion = document.getElementById("notification");
    Message_Notificacion.innerHTML = string_notificacion;

    Message_Notificacion = document.getElementById("final_score");
    Message_Notificacion.innerHTML = string_score;

    Message_Notificacion = document.getElementById("button");
    Message_Notificacion.innerHTML = string_button;

    Message_Notificacion = document.getElementById("share_panel");
    Message_Notificacion.style.display = "block";

    if (game_over == true) {
        string_tweet = "<a class='popup' target='_blank' href='http://twitter.com/share?text=%20Level%20" + Level + "%20Score:%20" + (Level_Moves - Moves) + "/" + Level_Moves + "%20No%20puedo%20con%20este%20nivel%20&via=JoseCodFacilito'>Tweet you Score</a>";
    } else {
        string_tweet = "<a class='popup' target='_blank' href='http://twitter.com/share?text=Ya%20me%20he%20pasado%20un%20nuevo%20nivel%20!!'>Tweet you Game!</a>";
    }
    Tweet_Game_Over = document.getElementById("tweet_game_over");
    Tweet_Game_Ok = document.getElementById("tweet_game_ok");

    Tweet_Game_Over.innerHTML = string_tweet;
    Tweet_Game_Ok.innerHTML = string_tweet;


}

function ShowWelcome() {
    Message = document.getElementById("message");
    Message.style.display = "block";

    Message_Notificacion = document.getElementById("notification");
    Message_Notificacion.innerHTML = "Level:  " + Level;

    Message_Notificacion = document.getElementById("final_score");
    Message_Notificacion.innerHTML = "Lifes:  " + Lifes;

    Share = document.getElementById("share_panel");
    Share.style.display = "none";

    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
}