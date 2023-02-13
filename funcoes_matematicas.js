//ceil() - forca o arredondamento para cima
function arredondaCima(valor) {
	valor = Math.ceil(valor);
	console.log(valor);
}

//floor() - arredonda pra baixo

function arredondaBaixo(valor) {
	valor = Math.floor(valor);
	console.log(valor);
}

//arredonda dependendo do peso 4 arredonda pra baixo, 5 arredonda pra cima

function arredondaPorPeso(valor) {
	const valorvar = Math.round(valor);
	console.log(`${valorvar} eh o arredondamento de ${valor}`);
}

const x = 10.38;
const x2 = 10.58;

//random() - numero aleatorio entre 0 e 1, fazendo a multiplicacao com o maximo retornamos um valor entre 0 e o max

function random(max) {
	max = 100;
	const randomica = Math.random() * max; // decidindo o valor maximo
	console.log(randomica);
}

arredondaCima(x);
arredondaBaixo(x);
arredondaPorPeso(x);
arredondaPorPeso(x2);
random();
