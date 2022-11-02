var elem_origen;
var elem_destino;

//arrastrar
function comenzar(){
	elem_origen=document.getElementById("imagen");
	elem_origen.addEventListener("dragstart",comenzamos_arrastrar,false);

	elem_destino=document.getElementById("zonadestino");
	elem_destino.addEventListener("dragenter",function(e){
		e.preventDefault();
	},false);

	elem_destino.addEventListener("dragover",function(e){
		e.preventDefault();
	},false);

	elem_destino.addEventListener("drop",soltado,false);

	elem_origen.addEventListener("dragend",terminado,false);

	elem_destino.addEventListener("dragenter",entrando,false);

	elem_destino.addEventListener("dragleave",saliendo,false);
}

function comenzamos_arrastrar(e){
	//capture la ruta de la imagen
	var codigo="<img src='"+elem_origen.getAttribute("src")+"' width='"+elem_origen.getAttribute("width")+"' height='"+elem_origen.getAttribute("height")+"'>";
	e.dataTransfer.setData("Text",codigo);
}

function soltado(e){
	e.preventDefault();
	elem_destino.innerHTML=e.dataTransfer.getData("Text");
}

function terminado(e){
	//el objeto que desencadeno el evento lo guardamos
	var elemento=e.target;
	elemento.style.visibility="hidden";
}

function entrando(e){
	e.preventDefault();
	elem_destino.style.background="rgba(8,252,25,.8)";
}

function saliendo(e){
	//e.preventDefault();
	//elem_destino.style.background="#FFFFFF";
	elem_destino.style.visibility="hidden";
}

window.addEventListener("load",comenzar,false);