let Total_secs;
let Total_mins;
let cronometer;

let Moves_Required;
let Moves;
let Options;
let Bonus;

let Level = 4;
let Lifes = 5;
let Level_Moves;
let Next_Level = false;

let board = new Array(8);

let CellSelected_x;
let CellSelected_y;

let CheckCell_Required;

function Check_SuccessfullEnd() {
	SuccessfullEnd = true;
	if (Moves > 0) SuccessfullEnd = false;
	if (SuccessfullEnd) ShowMessage("You Win!", "Next Level", false);
}

function CheckGameOver(x,y) {
	Options = 0;

	Check_Moves(x, y, 1, 2);	//check move right - top long
	Check_Moves(x, y, 2, 1);	//check move right long - top
	Check_Moves(x, y, 1, -2);	//check move right - bottom long
	Check_Moves(x, y, 2, -1);	//check move right long - bottom
	Check_Moves(x, y, -1, 2);	//check move left - top long
	Check_Moves(x, y, -2, 1);	//check move left long - top
	Check_Moves(x, y, -1, -2);	//check move left - bottom long
	Check_Moves(x, y, -2, -1);	//check move left long - bottom
	document.getElementById("options").innerHTML = Options;

	if (!Options){
		//Si no tiene opciones y tiene bonus
		if(Bonus) CheckCell_Required = false
		else ShowMessage("Game Over!", "Try Again", true);
	}
}

function Check_Moves(x, y, mov_x, mov_y) {
	option_x = x + mov_x;
	option_y = y + mov_y;

	if (option_x < 8 && option_y < 8 && option_x >= 0
		&& option_y >= 0) {
		if (board[option_x][option_y] == 0
			|| board[option_x][option_y] == 2) {
			Options++;
		}
	}

	
}

function SelectCell(x, y) {
	//cada vez que se seleccione una celda le quitamos 1 a los movimientos
	Moves--;

	Grow_MeterBonus();

	document.getElementById("moves").innerHTML = Moves;

	//la posición del tablero seleccionada la vamos a poner a 1
	//la posición seleccionada anteriormente la vamos a pintar naranja
	PaintCell(CellSelected_x, CellSelected_y, "orange");
	//pintamos el caballo
	//lo pintamos en la casilla seleccionada
	PaintHorseCell(x, y, "green");
	
	//comprobamos si es una casilla bonus
	if(board[x][y]==2){
		Bonus++;
		document.getElementById("bonus").innerHTML = "+" + Bonus;
	}
	
	board[x][y] = 1;
	//la posición actual la guardamos como seleccionada
	//por lo que luego de la primera vez de ejecutar el programa
	//estas se pintaran naranja
	CellSelected_x = x;
	CellSelected_y = y;

	CheckCell_Required = true;
	Check_SuccessfullEnd();
	CheckGameOver(x,y);
	Check_newBonus();
}

function Grow_MeterBonus(){
	/*
		1-0		9-8		17-16
		8*0		8*1		 8*2 //(0,1,2) son los bonux
		1/8		9/8		17/8
	*/

	moves_done = Level_Moves- Moves;
	bonus_done = Math.floor(moves_done/Moves_Required); //Math.floor devuelve la parte entera
	moves_rest = Moves_Required * bonus_done;
	bonus_grow = moves_done - moves_rest;
	
	width_meter = bonus_grow * 168 / Moves_Required;

	document.getElementById("meter_bonus").style.width = width_meter + "px";
}

function Check_newBonus() {
	//comparamos la cantidad de movimientos con el total para saber cuantos movimientos le quedan
	//si lo que le queda es divisible entre los movientos requeridos entonces recibe un bonus
	if((Level_Moves-Moves) % Moves_Required == 0){
		//buscar una casilla al azar para poner el bonus
		Bonus_Cell = false;
		while (Bonus_Cell == false) {
			Bonus_Cell_x = Math.round(Math.random() * 7);
			Bonus_Cell_y = Math.round(Math.random() * 7);
			//si la casilla esta vacia
			if(board[Bonus_Cell_x][Bonus_Cell_y] == 0)
				Bonus_Cell = true;
		}

		//si sale del while es porque encontró una casilla vacia
		board[Bonus_Cell_x][Bonus_Cell_y] = 2;

		//Luego debemos pintarla
		PaintBonusCell(Bonus_Cell_x, Bonus_Cell_y);
	}
}

//Se ejecutará cada vez que se seleccione una celda
function CheckCell(x, y) {
	let CheckTrue = true;
	if(CheckCell_Required){
		CheckTrue = false;

		/*Obtenemos la diferencia entre la casilla que fue
		seleccionada y la actual*/
		let dif_x = x - CellSelected_x;
		let dif_y = y - CellSelected_y;

		//comprobamos los 8 movimientos posibles
		if (dif_x == 1 && dif_y == 2) CheckTrue = true; // right - top long
		if (dif_x == 1 && dif_y == -2) CheckTrue = true; // right - bottom long
		if (dif_x == 2 && dif_y == 1) CheckTrue = true; // right long - top
		if (dif_x == 2 && dif_y == -1) CheckTrue = true; // rightlong - bottom
		if (dif_x == -1 && dif_y == 2) CheckTrue = true; // left - top long
		if (dif_x == -1 && dif_y == -2) CheckTrue = true; // left - bottom long
		if (dif_x == -2 && dif_y == 1) CheckTrue = true; // left long - top
		if (dif_x == -2 && dif_y == -1) CheckTrue = true; // left long - bottom
	}else{
		//si es una casilla vacia o con bonus
		if(board[x][y]==0 ||  board[x][y] == 2){
			Bonus--;
			document.getElementById("bonus").innerHTML = "+" + Bonus;
			if(Bonus==0){
				document.getElementById("bonus").innerHTML = "";
			}
		}
	}

	//si la casilla que seleccionamos es igual a 1 no lo dejamos seleccionar
	if (board[x][y] == 1) CheckTrue = false;
	if (CheckTrue) SelectCell(x, y);
		
}

function autoplay() {
	//cuando se inicie el programa declaramos que se podrán hacer
	//64 movimientos
	//Lo enviamos al start_manager.js
	/*Moves = 64;
	Moves_Required = 8;
	Bonus = 0;*/
	//creamos un arreglo bidimensional que tenga el tamaño
	//del tablero

	//establecemos los parametros de partida
	setLevelParameters();
	
	for (let i = 0; i < 8; i++) board[i] = new Array(8);
	
	ClearBoard();
	setBoard();

	ResetTime();
	//hacemos que inicie el tiempo 2seg despues ya que el mensaje inicial también se
	//ocultará a los 2seg despues
	setTimeout(StartTime(),2000);
	
	First_Position = false;
	while (First_Position==false) {
		//posicionamos el caballo al azar en el tablero
		x = Math.round(Math.random() * 7);
		y = Math.round(Math.random() * 7);
		//Hata que no sea una casilla vacia no se saldra del while
		if (board[x][y]==0) First_Position = true;
	}

	//La primera vez que se ejecuta el programa la
	//celda anteriormente seleccionada y la actual son la misma
	CellSelected_x = x;
	CellSelected_y = y;

	SelectCell(x, y);
}

autoplay();

/*Si la posición del tablero esta en: */
//0 -> vacía
//1 -> ocupada