//length : saber o comprimento

let texto = "Ola Mundo"
console.log(texto.length);

//indexOff : saber se algo existe
console.log(texto.indexOf("Mundo"));

//slice : para pegar uma parte do texto
console.log(texto.slice(0,3));

//trim : remover espaços em branco

console.log(texto.trim()); // nao precisa de parâmetro

//split : para gerar um array
console.log(texto.split(" "));

//replace : para alterar uma parte do texto
console.log(texto.replace("Mundo", "Developer"));