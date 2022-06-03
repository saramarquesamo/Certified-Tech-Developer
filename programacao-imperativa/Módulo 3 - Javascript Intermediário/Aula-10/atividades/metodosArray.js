/*.push()
Adiciona um ou mais elementos ao final do array
•Recebe um ou mais elementos como parâmetros
•Retorna o novo comprimento do array*/

let cores = ["Roxo", "Laranja", "Azul"]
cores.push("Violeta")
console.log(cores)
cores.push("Cinza", "Ouro")
console.log(cores)

/*.pop()
Elimina o último elemento de um array
•Não recebe parâmetro
•Retorna o elemento eliminado*/

let cores2= ["Roxo", "Laranja", "Azul"]
let ultimaCor = cores2.pop()
console.log(cores2)
console.log(ultimaCor)


/*.shift()
Elimina o primeiro elemento de um array
•Não recebe parâmetro
•Retorna o elemento eliminado*/

let cores3= ["Roxo", "Laranja", "Azul"]
let primeiraCor=cores3.shift()
console.log(cores3) // ["Laranja", "Azul"]
console.log(primeiraCor) // Roxo

/*.unshift()
Adiciona um ou mais elementos ao início de um array
•Recebe um ou mais elementos como parâmetro
•Retorna o novo comprimento do array*/

let cores4 = ['Roxo', 'Laranja', 'Azul'];
cores4.unshift('Violeta'); // Retorna 4
console.log(cores4);// ["Violeta", "Roxo", "Laranja", "Azul"]
cores4.unshift('Cinza', 'Ouro') // Retorna 6
console.log(cores4);// ["Cinza", "Ouro", "Violeta", "Roxo", "Laranja", "Azul"]

/*.join()
Junta os elementos de um array usando um separador que especificamos. Se não o especificar, use vírgulas.
•Recebe um separador (string), opcional
•Retorna uma string com os elementos unidos*/

let cores5 = ['Roxo', 'Laranja', 'Azul'];
letseparadosPorVirgula = cores5.join()
console.log(separadosPorVirgula) // "Roxo,Laranja,Azul"
letsepardosPorTraco = cores5.join(" - ")
console.log(separdosPorTraco) // "Roxo - Laranja - Azul"

/*.lastIndexOf()
Similar ao .indexOf(), exceto que ele começa procurando pelo elemento no final do array (de trás para frente).
Se houver elementos repetidos, ele retorna a posição do primeiro que encontrar
 (ou seja, o último, se olharmos desde o início).*/

 let cores6 = ['Roxo', 'Laranja', 'Azul', 'Laranja'];
 cores6.lastIndexOf("Laranja")// Ele encontrou o que procurava. Retorna 3, que é o índice do elemento encontrado.
 cores6.indexOf("Abacaxi")// Não encontrou o que procurava. Retorno -1.


 /*.includes()
 Também similar ao .indexOf(), mas retorna um booleano
 •Recebe um item para pesquisar no array
 •Retorna verdadeiro se encontrou o que estava procurando, falso se não*/


 let cores7 = ['Roxo', 'Laranja', 'Azul'];
 cores7.includes("Laranja")// Ele encontrou o que procurava. Retorna true
 cores7.includes("Abacaxi")// Não encontrou o que procurava. Retorna false









