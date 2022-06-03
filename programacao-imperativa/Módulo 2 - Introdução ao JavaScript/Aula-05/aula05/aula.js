//Aula 5 
/*Função expressa: aquela que se atribui como valor á uma variável let somar = function(){}
Função declarada: recebe um nome formal e não se atribui para uma variável function somar(){}
As duas terão o mesmo resultado
para imprimir o resultado precisa de uma variável / console.log()*/


//Função declarada 
function darOi() {
    console.log("Olá!");
}

darOi();

//Função expressa
let somar = function() {
    console.log(1 + 1);
}

somar();

//Vendo parâmetros
let somar2 = function(numA, numB) {
    console.log(numA + numB);
}

somar2(2,2);

//Escopo 
/* Local: variável declarada dentro de uma função. Não existe fora dela.
Global: Variável declarada fora de uma função (conhecida em qualquer parte do codigo)*/


//local
function multiplicar(numA, numB) {
    let resultado = numA * numB; 
    console.log(resultado); 
}

//Global
let resultado = 0; 
console.log(resultado);

function multiplicar(numA, numB) {
    let resultado =  numA * numB; 
    console.log(resultado); 
}
multiplicar(2,2);