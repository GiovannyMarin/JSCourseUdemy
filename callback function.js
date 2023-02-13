function exibirArtigo(id, callbackSucesso, callbackErro) {
	//logica = recuperar o id via requisicao http
	if (true) {
		callbackSucesso(
			"Funcoes de callback em JS",
			"funcoes de callback sao muito utilizadas"
		);
	} else {
		callbackErro("erro ao recuperar os dados");
	}
}

var callbackSucesso = function (titulo, descricao) {
	console.log(titulo);
	console.log(descricao);
};
var callbackErro = function (erro) {
	console.log(erro);
};

exibirArtigo(1, callbackSucesso, callbackErro);
