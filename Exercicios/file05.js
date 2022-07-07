/* 
 
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;


NÃO SE ESQUEÇA DE INSERIR O LINK DO SEU REPOSITÓRIO NO GITHUB COM O CÓDIGO FONTE QUE VOCÊ DESENVOLVEU
*/

var nome ='garrafa'  //Palavra pra converter 
var novoNome=[]

for (var c=nome.length-1; c>=0 ; c--){
    novoNome.push((nome[c]));
}
nomeConvertido = novoNome.toString()  //converterndo array pra string
console.log('A palavra convertida é =   '+nomeConvertido)
