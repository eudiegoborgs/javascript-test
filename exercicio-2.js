/*
1 – Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se que:
• Esse funcionário foi contratado em 2010, com salário inicial de R$1000,00;
• Em 2011 recebeu aumento de 1,5% sobre seu salário inicial;
• A partir de 2012 (inclusive), os aumentos salariais sempre corresponderam ao dobro do percentual do ano anterior

Faça um programa que determine o salário atual desse funcionário.
*/

let porcentagemAumento = 0.015;
let salarioAtual = 1000;
let anoLimite = 2019;

function aumentodeSalario(anoAtual, salario, aumento) {
    let novoSalario = salario * (1 + aumento);
    console.log(`No ano de ${anoAtual} o salario teve um reajuste de ${aumento} para $ ${novoSalario}`);
    if (anoAtual < anoLimite) {
        return aumentodeSalario(++anoAtual, novoSalario, aumento * 2);
    } s
}

aumentodeSalario(2011, 1000, 0.015);

/*
2 – Faça um programa que calcule a soma dos primeiros 50 números pares.
*/

/*
Calcular os n°
Imprimir eles na tela
*/

function somaPares(numero, total, contador) {
    if (contador <= 50) {
        console.log(numero, total, contador);
        if (numero % 2 !== 0) {
            total = (numero + total)
            ++contador;
        }
        return somaPares(++numero, total, contador);
    }
    return total;
}

console.log(somaPares(0, 0, 0));

let total = 0;
for (let i = 0; i <= 100; i = i + 2) {
    if (i % 2 === 0) {
        total = (i + total)
    }
}

console.log(total)


/*
 3 – Faça um programa onde o usuário possa escolher qual a tabuada que se deseja imprimir. Exiba a tabuada desse número de 1 a 10.
 
Opção que o usuario escolhe a tabuada
Exibir a tabuadaa que o usuário escolheu
1 - implementar calculo de multipicação
2 - extrair calculo para uma função (function)
3 - implementar loop 
4 - buscar do usuario qual tabuada exibir


1 x 2 = 2
2 x 2 = 4
3 x 2 = 6
4 x 2 = 8
5 x 2 = 10
6 x 2 = 12
7 x 2 = 14
8 x 2 = 16
9 x 2 = 18
10 x 2 = 20

*/
function tabuada(calculo, calculo2) {
    return calculo * calculo2;
}

function exibe_tabuada() {
    calculo2 = parseInt(window.prompt(`Digite a tabuada que voce deseja: `));

    for (calculo = 1; calculo <= 10; calculo++) {
        alert(`${calculo} x ${calculo2} = ${tabuada(calculo, calculo2)}`)
    }
}

exibe_tabuada()