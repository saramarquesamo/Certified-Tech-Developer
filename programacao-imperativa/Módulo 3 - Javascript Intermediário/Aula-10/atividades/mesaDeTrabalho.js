
//Acessar elementos específicos de um array

let numeros = [1,2,3,4,5,6,7]
console.log(numeros[2], numeros[3]);

//Modificar cada um dos elementos de um array e imprimi-los no console.

numeros [0] = 5;
numeros [2] = 6;
console.log(numeros);

//Adicionar elementos a um array.

//inicio
numeros.push(2);
numeros.push(5);
console.log(numeros);

//final
numeros.unshift(1000);
numeros.unshift(1001);
console.log(numeros);

//Extrair elementos de um array.

// Remove o primeiro elemento do array e retorna o elemento removido
let elementoRemovido = numeros.shift();
// Remover o ultimo elemento do array e retorna o elemento removido 
elementoRemovido = numeros.pop();

//Comparar elementos de um array com os elementos de outro. 

//usar if e else neste

// Verificar o que retornar estes códigos:

let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length])

let grupoDeAmigos = [ 
    ["Harry", "Ron", "Hermione"], 
    ["Spiderman", "Hulk", "Ironman"],
    ["Penélope Glamour", "Pierre Nodoyuna","Patán"] 
]
console.log(grupoDeAmigos[1][0])


let str = "uma string qualquer";
let grupoDeAmigos2 = [ 
    [45, 89, 0], 
    ["Digital", "House", true], 
    ["string", "123","false", 54, true, str] 
]
console.log(grupoDeAmigos2[2][grupoDeAmigos2[2].length - 1])

//ARRAY INVERTIDO
//Neste exercício, você terá que criar uma função que retorne um array com seus elementos invertidos, sem modificá-lo. Então, você deve fazer uma função que o modifique e inverta a ordem de seus elementos.
//Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento em ordem reversa no console (você não precisa inverter o Array).
//Crie a função inverter que recebe um Array como argumento e retorna um novo invertido.

let numeros2 = [1,2,3,4];

function inverterArray (array){
  let arrayInvertido = [];
  arrayInvertido.push(array[3]);
  arrayInvertido.push(array[2]);
  arrayInvertido.push(array[1]);
  arrayInvertido.push(array[0]);
  return arrayInvertido;
}


let arr = ["abacaxi","abacate","amora"];
let arrDois = ["batata","abacate","morango"];

arr[0] == arrDois[0] ? console.log("verdade") :console.log("mentira")
arr[1] == arrDois[1] ? console.log("verdade") :console.log("mentira")
arr[2] == arrDois[2] ? console.log("verdade") :console.log("mentira")

console.log(inverterArray(numeros2));


/*somarArray()
Neste exercício, você criará uma função somarArray()
que aceita um array de números e retorna a soma de todos eles.
Exemplo:
somarArray([1,2,3])                // 6
somarArray([10, 3, 10, 4])     // 27
somarArray([-5,100])             // 95*/

function somarArray (array){

    let soma = 0
    soma = array[0] + array[1] + array[2]
    console.log(soma);
}

somarArray([1,2,3])
somarArray([5,2,10])

/*Simulação Array.join()
Neste exercício, você criará uma função chamada join que recebe um array e simula o comportamento do método Array.join().
Importante: Não poderá utilizar o método Array.join() original.
Por exemplo:
join(["o","l","á"]) deve retornar a string "olá".
join([“t”,"c","h","a,"u"]) deve retornar a string "tchau".
*/
const teste = ["Sara", "Marques", "Amorim"];
let nome = teste.join(",");
console.log(nome);

/*Coleções de Filmes (e mais…)
O tech leader da equipe precisa conhecer a estrutura de dados do novo projeto. Para
isso, devemos:
1. Criar a estrutura apropriada para armazenar os seguintes filmes e séries:
"star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela".
Importante: verifique se tudo funciona corretamente acessando qualquer um
dos filmes uma vez que a estrutura correspondente tenha sido criada.
2. Os filmes devem estar todos em letras maiúsculas. Para isso, crie uma função
que recebe um array por parâmetro e converta o conteúdo de cada elemento
3
em letras maiúsculas.
Dica: revise o que faz o método de strings .toUpperCase()*/

const nomesDeFilmes = ["star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela"]
function filmes(array){

}

filmes(nomesDeFilmes);
console.log(nomesDeFilmes[0]);

