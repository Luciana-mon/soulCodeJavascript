/*Requisito II: Crie um arquivo Javascript para executar algumas lógicas de programação:

Defina valores para as variáveis: nome do produto, preço do produto, desconto do produto e desconto válido (booleano);

Caso desconto válido seja verdadeiro. Realize o cálculo do desconto e salve em uma nova variável: preço final. Caso contrário, apenas repasse o valor do produto para variável de preço final;

Faça a seguinte verificação: Se o preço final do produto for maior que 1000, reduza 50 reais. Caso contrário, apenas mostre uma mensagem na tela com o valor do preço final; 

Crie um array de demandas com os valores: 10, 2, 1, 30, 5. Cada item no array representa a demanda de um cliente diferente. Por exemplo o primeiro cliente está solicitando 10 produtos.

Para cada demanda no array calcule quanto cada cliente deverá pagar e mostre a mensagem no formato: "O cliente 1 deverá pagar: R$ 585". Salve o total de cada cliente em um novo array que deverá começar vazio.*/

let nomeProduto = "Geladeira";
let precoProduto = 1100.00;
let descontoProduto = 100.00;
let descontoValido = true;
let precoFinal = precoProduto;
let totalLucro = 0;
let demanda = [10, 2, 1, 30, 5];
let valorTotalProduto = [];


if (descontoValido == true) {
    precoFinal = precoProduto - descontoProduto
    console.log(`Valor do produto com desconto: R$ ${precoFinal.toFixed(2)}`);
}
if (precoFinal >= 1000) {
    precoFinal = precoFinal - 50.00
    console.log(`Valor do produto com novo desconto: R$ ${precoFinal.toFixed(2)}`)
} else {
    console.log(`Preço do produto sem desconto: R$ ${precoFinal.toFixed(2)}`);
}

for (let i = 0; i < demanda.length; i++) {
    let e = demanda[i] * precoFinal;
    valorTotalProduto.push(e);
    console.log(`O cliente ${i + 1} devera pagar: R$ ${valorTotalProduto[i]}`);
}

for (let i = 0; i < valorTotalProduto.length; i++) {
    totalLucro += valorTotalProduto[i];
}
console.log(`Total do lucro é de: R$ ${totalLucro}`);




















