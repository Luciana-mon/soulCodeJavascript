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
let precoFinal
let valorTotal


if (descontoValido == true) {
    precoFinal = precoProduto - descontoProduto
    console.log(`Valor do produto com desconto R$ ${precoFinal.toFixed(2)}`);
}
if (precoFinal >= 1000) {
    valorTotal = precoFinal - 50.00
    console.log(`Valor como novo desconto R$ ${valorTotal.toFixed(2)}`)
} else {
    precoFinal = precoProduto
    console.log(`Preco do produto sem desconto R$ ${precoFinal.toFixed(2)}`);
}



