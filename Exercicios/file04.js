/*4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.*/

const dados =[
    {
        "estado":'SP',
        "valor":6783643
    },
    {
        "estado":'RJ',
        "valor":3667866
    },
    {
        "estado":'MG',
        "valor":2922988
    },
    {
        "estado":'ES',
        "valor":2716548
    }
]

soma=0
function calculando(){
    dados.forEach((item)=>{
            soma=soma+item.valor           
    })
}
calculando();

/*-------------------------------------*/

valorSp= dados[0].valor
valorRj= dados[1].valor
valorMg= dados[2].valor
valorEs= dados[3].valor

function calculoPorcentagem(valorSoma,valorEstado){
    return(valorSoma-valorEstado)/valorEstado*100
}

var SP= calculoPorcentagem(soma,valorSp)
var RJ= calculoPorcentagem(soma,valorRj)
var MG= calculoPorcentagem(soma,valorMg)
var ES= calculoPorcentagem(soma,valorEs)

console.log('Porcentagem de sp foi '+SP.toFixed(1)+'%')
console.log('Porcentagem de Rj foi '+RJ.toFixed(1)+'%')
console.log('Porcentagem de Mg foi '+MG.toFixed(1)+'%')
console.log('Porcentagem de Es foi '+ES.toFixed(1)+'%')