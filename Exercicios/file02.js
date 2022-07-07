/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a 
soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
escreva um programa na linguagem que desejar onde, informado um número, ele
calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado
pertence ou não a sequência.

   IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente 
definido no código;
 */

var  Fibonacci =[0,1];

console.log("INICIANDO...");
function fazendoSequencia(){
    while(Fibonacci.length <=10){
        ultimoElemento = Fibonacci[Fibonacci.length-1]
        penultimoElemento = Fibonacci[Fibonacci.length-2]
        proximoElemento = penultimoElemento + ultimoElemento;
        Fibonacci.push(proximoElemento)
    }
    console.log('A sequencia de fibonacci é '+Fibonacci);   
   }

function verificando(numero){
    if(Fibonacci.includes(numero)){ //Pesquisandi se está dentro da lista 
        console.log('Esse numero existe na sequencia SIM !!!')
    }else{
        console.log('NÃO EXISTE NA SEQUENCIA TENTE DE NOVO  ')
    }
}


fazendoSequencia();
verificando(1);        //NESTE PARAMENTRO VOCE COLOCA O NUMERO O QUAL DESEJAR PESQUISAR 