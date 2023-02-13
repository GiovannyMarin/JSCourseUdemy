//length - retorna a quantidade de caracteres da string
console.log("Jorge SANT aNA".length);
//           01234567891234 = 14

//charAt() - retorna o caractere dentro do indice pedido
console.log("Jorge SANT aNA".charAt(7));
//           01234567891234 = A

//indexOf() - retorna a posicao do caractere na primeira ocorrencia dele na string
const nome = "Jorge SANT aNA";
console.log(nome.indexOf("o"));
//           01234567891234 = 1
// quando n houver a ocorrencia do caractere ele retornara -1

//replace() - ele procura por uma cadeia de caracteres identica e substitui
const nome2 = "Jorge SANT aNA";
console.log(nome2.replace("SANT", "MARC"));
//           Jorge MARC aNA

//substr() - pega iniciando de uma posicao quantos caracteres voce precisar
console.log(nome2.substr(6, 4)); //iniciando do indice 6, pegue 4 caracteres

//toLowerCase() - deixa tudo em minusculo
console.log(nome2.toLowerCase());

//toUpperCase() - deixa tudo em maiusculo
console.log(nome2.toUpperCase());

//trim() - remove os espacos em branco
const nome3 = " mario ";
console.log(nome3.trim());
