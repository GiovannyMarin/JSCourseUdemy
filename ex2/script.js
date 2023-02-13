/*No evento de foco modifique o background do input para amarelo.
• Quando o campo perder o foco, recupere o seu respectivo valor e:
o Caso o conteúdo contido no campo tenha menos de 3 caracteres o mesmo
deve ter seu background alterado para vermelho.
o Caso o conteúdo contido no campo tenha 3 caracteres ou mais o background
deve ser alterado para verde.*/

const input = document.getElementById("input");
const textoinput = document.getElementById("input").value;
function inputFocus() {
	input.style.background = "yellow";
}
input.addEventListener("focusout", () => {
	var input = document.getElementById("input");
	var textoinput = document.getElementById("input").value;
	input.style.background = "";
	if (textoinput.length < 3) {
		input.style.background = "red";
	} else {
		input.style.background = "green";
	}
});
