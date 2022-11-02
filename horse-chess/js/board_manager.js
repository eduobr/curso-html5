
function ClearBoard() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            //dejamos el tablero vacio
            board[i][j] = 0;

            cell = document.getElementById("c"+i+j);
			cell.style.background = "";  
			cell = document.getElementById("c"+i+j).innerHTML = "";
        }
    }
}

function PaintCell(x, y, color) {
    //le pasamos el id de la celda del tablero
    cell = document.getElementById("c" + x + y);
    cell.style.background = color;
}

function PaintHorseCell(x, y, color) {
    //le pasamos el id de la celda del tablero
    cell = document.getElementById("c" + x + y);
    cell.style.background = color;
    cell.innerHTML = "<img src='horse.gif'></img>"

}

function PaintBonusCell(x, y) {
    cell = document.getElementById("c" + x + y);
    cell.innerHTML = "<img src='bonus.JPG'></img>"
}

function setBoard() {
    if (Level == 2) PaintLevel_2();
    if (Level == 3) PaintLevel_3();
    if (Level == 4) PaintLevel_4();
    if (Level == 5) PaintLevel_5();
    if (Level == 6) PaintLevel_6();
}

function Paint_Row(row) {
    for (let i = 0; i < 8; i++) {
        board[i][row] = 1;
        PaintHorseCell(i, row, "orange");
    }
}

function Paint_Column(column) {
    for (let i = 0; i < 8; i++) {
        board[column][i] = 1;
        PaintHorseCell(column, i, "orange");
    }
}

function PaintLevel_2() {
    Paint_Column(6);
}

function PaintLevel_3() {
    for (i = 4; i < 8; i++) Paint_Column(i);
}

function PaintLevel_4() {
    PaintLevel_3();
    PaintLevel_5();
}

function PaintLevel_5() {
    for (i = 0; i < 4; i++){
        for (let j = 0; j < 4; j++) {
            board[j][i] = 1;
            PaintHorseCell(j,i, "orange");
        }

    }
}

function PaintLevel_6(){
    Paint_Column(0);
    Paint_Column(7);
    Paint_Row(0);
    Paint_Row(7);
}