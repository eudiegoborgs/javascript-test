/*
1 – Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se que:
• Esse funcionário foi contratado em 2010, com salário inicial de R$1000,00;
• Em 2011 recebeu aumento de 1,5% sobre seu salário inicial;
• A partir de 2012 (inclusive), os aumentos salariais sempre corresponderam ao dobro do percentual do ano anterior

Faça um programa que determine o salário atual desse funcionário.
*/

let porcentagemAumento = 0.015;
let salarioAtual = 1000;

for (let ano = 2011; ano <= 2019; ano++) {
    porcentagemAumento = porcentagemAumento * 2;
    const aumento = 1000 * porcentagemAumento; // 150
    salarioAtual = salarioAtual + aumento;
    // primeiro ano a porcentagem era 1.5 
    // a partir de 2012 a porcetagem e o dobro do ano anterior,
}

console.log('Porcentagem acmulada', porcentagemAumento);
console.log('Salario Atual', salarioAtual);


/*
2 – Faça um programa que calcule a soma dos primeiros 50 números pares.
*/

let numeros;
for (numeros = 0; numeros <= 50; numeros++) {
    if (numeros % 2 == 0) {

        console.log(`O número ${numeros} é par, pois o resto da divisão por dois é igual a zero`)

    }

}

/*
3 – Faça um programa onde o usuário possa escolher qual a tabuada que se deseja imprimir. Exiba a tabuada desse número de 1 a 10.
*/

let tabuada = 10;
for (x = 0; x <= 10; x++) {

    console.log("Tabuada do: " + tabuada)
    console.log(x + "x" + tabuada + "=" + x * tabuada);
}
