// Trabalhando com funções

//Desafio 1
/*function teste(x, y) {
    return y - x;
}

let res = teste (10,40)
console.log(res);

//Desafio 2 
function teste2(x, y) {
    return x * 2;
    console.log(x);
    return x/2;
}

teste2(10);*/


// Ex01 - Crie uma função que converta polegadas em centímetros.
//Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.


function centimetro (polegada) {
    return polegada * 2.54;
}
console.log(centimetro(20)); 

//Ex02 - Crie uma função que receba uma string e a converta em um URL.
//ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"

function toURL(string) {
    return `http://www.${string}.com.br`
  }
  console.log(toURL("funcaojs"));

//Ex03 - Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).

function frase (string2) {
    return `Minha função${string2}`
}
console.log(frase("!"));

//Ex04 - Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.

function cachorro (idade) {
    return idade * 7;
}
console.log(cachorro(3));

//Ex05 - Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
//PS: considere que você trabalhe 160 horas no mês.

function valor(salario) {
    return salario / 160;
}
console.log(valor(1500));

//Ex06 - Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas.
// Em seguida, execute a função, testando diferentes valores. 
//*IMC, significa Índice de Massa Corporal e é um parâmetro utilizado para saber se o peso está de acordo com a altura.

function imc(peso, altura) {
    let conversao = peso/1000
    let conversao2 = altura/100
    return conversao / (conversao2)**2;
}
console.log("Seu IMC é de " + imc(80000,160).toFixed(2));

//Ex07 -  Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 
// Investigue o que o método de .toUpperCase() faz.

function name (string) {
    return `${string}`
}
console.log("amor e paz".toUpperCase());

//Ex08 - Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.
//Dica: Isso te ajudará a entender o que o operador typeof faz.

function tipo(dado) {
    return typeof dado;
}
console.log(tipo(20));

//Ex 09 - Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
//Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.

function Circunferencia(raio) {
    return 2 * Math.PI * raio;
}
console.log(Circunferencia(1).toFixed(2));
