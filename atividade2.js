let listaPecas = ["monitor", "teclado", "mouse"];
let nomePeca = "Desktop";
let pesoPeca = 350;

if (listaPecas.length >= 10) {
  //Não tem espaço na lista
  console.log("Não pode mais cadastrar peças. Limite de 2 atingido");
}

if (pesoPeca >= 100) {
  console.log("A peça possui mais de 100g e pode ser cadastrada");
}

if (nomePeca.length < 3) {
  console.log("Atenção, o nome da peça tem que ter mais de 3 caracteres");
}