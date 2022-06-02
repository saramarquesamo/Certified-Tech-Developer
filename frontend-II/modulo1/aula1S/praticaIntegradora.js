// Prática Integradora
// Objetivo
// Desenvolver um script que permita somar um array de números consecutivos, de forma que se some o primeiro número com o segundo e o imprima através do console. 
// Depois, temos que pegar este resultado e somar o terceiro número, e assim por diante, até termos terminado de percorrer todo o array.

let room5 = [1,2,3,4,5]
let sum = 0;

for (let i = 0; i < room5.length; i++) {
    sum += room5[i];
}
console.log(sum);



// const numbersList = [1, 2, 3, 4, 5];
// const total = numbersList.reduce((total, currentElement) => total + currentElement);
// console.log(total);

