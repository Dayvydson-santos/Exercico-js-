/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

*/ 
  
 var dias  =[
	{
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
];
valores =[]; //array de valores 
diaDoMes =[] ; //dias  dos mes 
DiasMaioresMedias =[];

function verificando (){
    dias.forEach((value,index)=>{
		valores.push(value.valor)  //colocando valores dentro do array 
    });

	tamahoValores= valores.length  //tamanho do array  com valores com cada valor do mes 
	var maximoValor =Math.max(...valores);
	var minimoValor =Math.min(...valores);
	console.log('O Menor valor de faturamento ocorrido no mês foi: '+minimoValor+' R$');
	console.log('O Maior valor de faturamento ocorrido no mês foi:  '+maximoValor+' R$');
	//FAZENDO MEDIA 
	var contador = 0;
	soma=0;
	while(contador < tamahoValores){
		soma = soma + valores[contador++]
		ResultadoMedia= soma/tamahoValores;
		media = Number(ResultadoMedia.toFixed(2));
	};
	console.log('MEDIA =  '+media); //MEDIA
	valores.forEach((value,index)=>{
		quantidadeDias =0
		if(value >media){
			DiasMaioresMedias.push(dias[index].dia)     // coloca dentro do array o dia que teve media alta 
			DiaMaiorMedia= dias[index].dia 				//percorrendo o json e procura o dia 
		}
	})
	console.log('Os dias que tiveram  valores maiores que a media foram o dia ' + DiasMaioresMedias )    //array dos dias que teve media mais alta
}

verificando();