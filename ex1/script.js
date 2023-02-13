/*1) Ao executar o script a aplicação deve solicitar a entrada de um número, seguido de 
uma operação de soma ou subtração e posteriormente seguido de um segundo 
número. 

2) A operação deve ser inserida pelo usuário de forma textual, ou seja, quando o sistema 
solicita a operação o usuário deve informar o texto ‘soma’ ou ‘subtração’ (sem as 
aspas). 

3) Na sequência o sistema deve enviar os parâmetros para uma função efetuar o devido 
cálculo. Exemplo: calculo(num1, num2, operacao). 

4) A função deve executar o cálculo com base na operação informada pelo usuário e na 
sequência deve retornar o valor encontrado. 

5) Ao término o sistema deve fornecer a seguinte saída para o usuário: 
“O resultado é: <resultado>.” 

*A informação em vermelho é uma variável e deve ser substituída pelo seu respectivo valor 
calculada dentro da aplicação.*/

const inputNumero2 = document.querySelector("#input2");

const bntNum1 = document.querySelector(".numero1");
const bntNum2 = document.querySelector(".numero2");
const bntCondicional = document.querySelector(".condicional");

const form2 = document.querySelector(".form2");
const form3 = document.querySelector(".form3");

var num1;
var num2;
var condicao;

function somar(num1, num2) {
	const resultado = num1 + num2;
	return resultado;
}
function subtracao(num1, num2) {
	const resultado = num1 - num2;
	return resultado;
}

function valorInput1() {
	bntNum1.addEventListener("click", (e) => {
		e.preventDefault();
		const inputNumero1 = document.querySelector("#input1");
		if (Number(inputNumero1.value)) {
			console.log("numero");
			num1 = inputNumero1.value;
			console.log(num1);
			form2.style.display = "block";
		} else {
			alert("nao eh um numero");
		}
	});
}

function condicional() {
	bntCondicional.addEventListener("click", (e) => {
		e.preventDefault();
		const inputCondicional = document.querySelector("#condicional");
		if (inputCondicional.value == "subtracao") {
			console.log("sub");
			condicao = "-";
			form3.style.display = "block";
		} else if (inputCondicional.value == "adicao") {
			console.log("ad");
			condicao = "+";
			form3.style.display = "block";
		} else {
			alert("nao eh valido");
		}
	});
}

function valorInput2() {
	bntNum2.addEventListener("click", (e) => {
		e.preventDefault();
		const inputNumero2 = document.querySelector("#input3");
		if (Number(inputNumero2.value)) {
			console.log("numero");
			num2 = inputNumero2.value;
			console.log(num2);
			if (condicao == "+") {
				const paragrafo = document.querySelector(".resultado");
				console.log(condicao);
				paragrafo.innerHTML = `O resultado é ${somar(
					parseInt(num1),
					parseInt(num2)
				)}`;
			} else {
				const paragrafo = document.querySelector(".resultado");
				console.log(condicao);
				paragrafo.innerHTML = `O resultado é ${subtracao(
					parseInt(num1),
					parseInt(num2)
				)}`;
			}
		} else {
			alert("porra faz o ngc direito");
		}
	});
}

valorInput1();
condicional();
valorInput2();
