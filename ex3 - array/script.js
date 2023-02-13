let add = document.getElementById("add");
let ordenar = document.getElementById("ordenar");

var objetos = ["Cadeira", "Impressora", "Garfo"];

function checar() {
	let valor = document.getElementById("valor").value;
	if (valor === "") {
		alert("Informe um valor valido");
	} else {
		if (objetos.indexOf(valor) != "-1") {
			alert("objeto ja adicionado");
		} else {
			let valor = document.getElementById("valor").value;
			objetos.push(valor);
			console.log(objetos);
			document.getElementById("valor").value = "";
		}
	}
}

function ordenarArray() {
	objetos.sort();
	console.log(objetos);
}
