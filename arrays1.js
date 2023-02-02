/*Crie um arquivo chamado arrays1_js.html, e vamos fazer um algoritmo:
a. Crie um array para armazenar a seguinte lista:
0 - Sem cadastro
1 - Leite
2 - Ovo
3 - Farinha
4 - Milho
5 – Café

b. Através da função adequada, receba o “Código do produto” do usuário, busque o 
código na posição correspondente do array que você criou, e exiba o nome do produto. 
Ex: Usuário digitou 1, “Leite”.

c. Caso o usuário digite um código que não esteja contido, exiba o valor da posição 0 
do seu vetor, e pergunte se deseja adicionar o produto.

d. Se o usuário optar por adicionar o produto, receba o valor utilizando a função 
adequada no JS, 
inclua esse valor em seu vetor e conclua com uma mensagem de sucesso, 
com o código e nome do produto. 
Ex: “Produto incluído com sucesso: 6 - Óleo”.*/

// let lista = [
//   [0, "Sem cadastro"],
//   [1, "Leite"],
//   [2, "Ovo"],
//   [3, "Farinha"],
//   [4, "Milho"],
//   [5, "Café"],
// ];

let lista = ["Sem cadastro", "Leite", "Ovo", "Farinha", "Milho", "Café"]; // Inicializei a lista de produtos

let buscarProdutos = prompt("Qual produto quer buscar? Digite:").toLowerCase(); // Recebendo através do prompt o produto que usuário digitou

//Verificando se o produto existe dentro da lista
if (lista[buscarProdutos] !== undefined && buscarProdutos !== 0) {
  alert(`Produto: ${lista[buscarProdutos]}`); //Exibindo em alert o nome do produto digitado pelo usuário
} else {
  alert(lista[0]); // Exibindo um alert com a primeira posição array

  //Pergunto através do alert se usuário quer cadastrar o produto digitado
  let adicionarProduto = prompt(
    "Deseja adicionar o produto digitado? Sim ou Não?"
  ).toLowerCase();
  //Se usuário digitar sim eu recebo através do prompt o nome do produto que quer cadastrar.
  if (adicionarProduto == "sim") {
    let novoProduto = prompt("Digite o nome do produto: "); // Recebendo novo produto
    lista.push(novoProduto); // Adicionando novo produto no array lista.
    alert(
      `Produto incluído com sucesso: ${lista.length} - ${
        lista[lista.length - 1]
      }`
    );
  } else {
    alert(`Você optou por não incluir produto.`);
  }
}
