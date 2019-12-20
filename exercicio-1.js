/** 

Exercício 1
Faça um programa que leia 2 números, some - os e exiba uma mensagem com o resultado comparando se os valores são maiores, menores ou iguais a 100.
*/

let um = parseInt(window.prompt('Digite o primeiro valor:', 'Digite aqui!'));
let dois = parseInt(window.prompt('Digite o segundo valor:', 'Digite aqui!'));
let soma = um + dois;

if (soma > 100) {
    alert(soma = " é maior do que 100!");
}
else if (soma == 100) {
    alert(soma = " é igual a 100!");
}
else {
    alert(soma = " é menor do qeu 100!");
}


// Como pedir ao usuario que insira algo no prompt
// Continue aqui

/*
Exercício 2
Escreva um programa que calcule e mostre a tabuada (até 10x) de um número qualquer, digitado pelo usuário.
*/

valor = parseInt(window.prompt('Digite o valor da tabuada para ser impressa'));
for (count = 1; count <= 10; count++) {
    document.write(valor + " X " + count + " = " + (count * valor) + "<br>");
}


/*
Exercício 3
Faça um programa que leia um vetor numérico de 10 posições. Depois, ordene o vetor em ordem crescente e apresente os elementos ordenados.
*/

let vetor = new Array();
//leitura dos valores
for (let j = 0; j < 10; j++) {
    vetor[j] = parseInt(window.prompt("Digite a " + (j + 1) + "º posição do vetor:"));
}
//ordenção
for (let i = 0; i < vetor.length; i++) {
    for (let k = i; k > 0 && vetor[k] < vetor[k - 1]; k--) {
        let aux = vetor[k - 1];
        vetor[k - 1] = vetor[k];
        vetor[k] = aux;
    }
}
// exibe o resultado
alert("O vetor ordenado é: " + vetor);


/*
Exercício 4
Escreva um programa que leia dois números e apresente um menu de opções como o mostrado abaixo:

Escolha a opção: A- Soma de 2 números. B- Diferença entre 2 números (maior pelo menor). C- Produto entre 2 números. D- Divisão entre 2 números (o denominador não pode ser zero).

Leia a opção do usuário e execute a operação com os dois números lidos anteriormente. Caso a opção digitada seja inválida, apresente a mensagem de “Opção inválida” para o usuário. Lembre-se de usar funções para organizar seu programa.
*/

function soma(a, b) {
    let res = a + b;
    alert("A soma é: " + res);
}

function diferenca(a, b) {
    let dif = Math.abs(a - b);
    alert("A diferença é: " + dif);
}

function produto(a, b) {
    let prod = a * b;
    alert("O produto é: " + prod);
}

function divisao(a, b) {
    let div;
    if (b === 0) {
        alert("O denominador não pode ser zero.");
    }
    else {
        div = a / b;
        alert("A divisão é: " + div);
    }
}

let valor1 = parseInt(window.prompt('Digite o 1° valor'));
let valor2 = parseInt(window.prompt('Digite o 2° valor'));

let opcao = window.prompt("Escolha a opção:\nA- Soma de 2 números.\nB- Diferença entre 2 números (maior pelo menor).\nC- Produto entre 2 números.\nD- Divisão entre 2 números (o denominador não pode ser zero).");
switch (opcao.toUpperCase()) {
    case "A": soma(valor1, valor2); break;
    case "B": diferenca(valor1, valor2); break;
    case "C": produto(valor1, valor2); break;
    case "D": divisao(valor1, valor2); break;
    default: alert("Opção inválida."); break;
}


/*
Exercício 5
Uma eleição possui 2 candidatos a prefeito: o candidato José, do Partido da Felicidade e o candidato João, do Partido da Esperança. Os eleitores votam nos candidatos pelo número do partido. Para votar no candidato José do Partido da Felicidade, precisam digitar o número 1. Para votar no candidato João, do Partido da Esperança, precisam digitar o número 2.

Faça um programa que simule uma urna eletrônica. Para cada eleitor, deve ser lido o número do seu título e em seguida o eleitor poderá digitar o seu voto. A eleição é encerrada quando um valor negativo (menor do que 0) para o título do eleitor é digitado. Informe quantos votos cada candidato teve e qual deles ganhou a eleição.
*/

let titulo, totalJose, totalJoao;
totalJose = 0;
totalJoao = 0;
do {
    titulo = parseInt(window.prompt("Digite o seu titulo de eleitor ou um valor menor que 0 para finalizar a eleição: "));
    if (titulo >= 0) {
        let voto = parseInt(window.prompt("Candidatos:\n1 - José, Partido da Felicidade.\n2 - João, Partido da Esperança."));
        switch (voto) {
            case 1: totalJose++; break;
            case 2: totalJoao++; break;
            default: alert("Voto nulo.");
        }
        alert("Parabéns, cidadão!");
    }
} while (titulo >= 0);
// exibir totais
alert("Resultado:\nJosé teve " + totalJose + " votos.\nJoão teve " + totalJoao + " votos.");
if (totalJose > totalJoao) {
    alert("José foi eleito.");
}
else if (totalJoao == totalJose) {
    alert("A eleição empatou, tirem no dado.");
}
else {
    alert("João foi eleito.");
}


/*
Exercício 6
Faça um programa que peça ao usuário uma temperatura em Fahrenheit, converta-a para graus Celsius e escreva o novo valor na tela. A fórmula de conversão de Fahrenheit (F) para Celsius é C = ( ( F - 32 ) * 5 ) / 9. Exemplo: 100 Fahrenheit = 37,77 Celsius.
*/

//dando erro

var tempF, tempC;
tempF = Number(parseInt(window.prompt(`Digite a temperatura que voce deseja converter: `)));
tempC = (tempF - 32)*5/9;
alert("A temperatura em Celsius é " + tempC);


/*
Exercício 7
Para um jogo, precisamos saber se um personagem morreu ou não depois de sofrer um ataque. Faça uma função que receba 2 parâmetros, DANO e SAUDE. A função deve retornar verdadeiro se o dano for matar o personagem (ou seja, deixar sua saúde menor ou igual a zero) e falso caso contrário.
*/
//dando erro

function personagemMorreu(dano, saude) {
    if (dano >= saude) {
        return true;
    }
    else {
        return false;
    }
}

/*
Exercício 8
Temos um vetor de 5 posições, com o nome de 5 itens que nosso herói carrega na mochila. Quando o personagem chega numa porta, queremos detectar automaticamente se ele tem o não uma chave para deixá-lo passar. Crie uma função TemChave que percorre o vetor comparando se cada item tem o nome “chave” e retorne verdadeiro se encontrar alguma. Caso contrário, a função deve retornar falso.
*/

let mochila = ["pa", "pao", "copo", "café", "mesa"];
function temChave() {
    for (let ind = 0; ind < mochila.length; ind++) {
        if (mochila[ind] === "chave") {
            return true;
        }
    }
    return false;
}
console.log(temChave());


/*
Exercício 9
Precisamos limitar as posições em que um inimigo pode andar na tela. A menor posição possível é 0 e a maior, 100: qualquer valor maior que 100 ou menor que 0 sairia fora da tela. Precisamos de uma função LimitaPosicao que recebe uma POSICAO que pode ter qualquer valor positivo ou negativo, verifica se ela é válida ou não e retorna sempre um valor corrigido entre 0 e 100.
*/


function limitaPosicao(posicao) {
    if (posicao > 100) {
        return 100;
    }
    if (posicao < 0) {
        return 0;
    }
    return posicao;
}


/*
Exercício 9
Crie um game de jo-ken-po. A cada rodada, o jogador vê o menu:

Escolha sua jogada: 1 - Papel 2 - Pedra 3 - Tesoura

O jogo lê a opção do jogador e verifica se é válida. Se for inválida, o jogador perde a rodada e o jogo acaba. Se for válida, o computador escolhe uma resposta aleatória, que é mostrada ao jogador. Se o jogador ganhar, ele pode jogar mais uma rodada e sua pontuação aumenta. O jogo acaba quando o jogador perde uma rodada. A pontuação total é mostrada no fim do jogo.
*/

/*Passo 1 ler opção do jogador FEITO
  Passo 2 verificar se a opção escolhida é valida FEITO
  Passo 3 se for invalida o jogo acaba e o jogador perde FEITO
  Passo 4 se for valida a maquina gera uma resposta aleatoria que é mostrada ao joagdor FEITO
  Passo 5 se o jogador ganhar ele pode jogar mais um avez e sua pontuaçã aumenta '
  Passo 6 o jogo acaba quando o jogador erra, a pontuação é gerada no finaldo jogo/
*/
var pontos = 0;
var quandoGanha = {
    1: 2, // papel: pedra
    2: 3, // pedra: tesoura
    3: 1, // tesoura: papel
};

var textoDaEscolha = {
    1: 'PAPEL',
    2: 'PEDRA',
    3: 'TESOURA',
}

function inicia(){
    let opcao = parseInt(window.prompt("Qual é a opção 1 - Papel 2 - Pedra 3 - Tesoura"));
    if (opcao == 1 || opcao == 2 || opcao == 3){
        var escolhaDoComputador = Math.floor(Math.random() * 3);
        alert('Você escolheu: ' + textoDaEscolha[opcao]);
        alert('O computador escolheu: ' + textoDaEscolha[escolhaDoComputador]);
        if (ehGanhador(opcao, escolhaDoComputador)) {
            pontuou();
            inicia();
            return;
        }
        alert('Você perdeu! Sua pontuação atual é de: ' + pontos);
    } else {
        alert('Você digitou uma opção invalida! \nVocê perdeu.');
    }
}

function ehGanhador(opcao, escolhaDoComputador) {
    return quandoGanha[opcao] === escolhaDoComputador;
}

function pontuou() {
    pontos++;
}

inicia();