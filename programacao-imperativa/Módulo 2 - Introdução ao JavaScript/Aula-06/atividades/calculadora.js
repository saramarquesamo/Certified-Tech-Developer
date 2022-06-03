
function adicionar (num1, num2) {
    return num1 + num2
}

function subtracao (num1, num2) {
    return num1 - num2
}

function multiplicacao (num1, num2) {
    return num1 * num2
}

function divisao (num1, num2) {
    return num1 / num2
}

function quadrado (num1) {
    return Math.pow(num1, 2)
}

/*function quadradoDoNumero(num){
  return multiplicar(num,num);
}
quadradoDoNumero(5);*/ 

function media (num1, num2, num3){
    let soma = num1 + num2 + num3;
    return soma / 3;
}
/*function mediaDeTresNumeros(num1,num2,num3){
  const soma = adicionar(num1,num2);
  const soma2 = adicionar(soma,num3);
  return dividir(soma2,3);
}

console.log("Media de tres:");
console.log(mediaDeTresNumeros(8.5,6,9));*/

/*function calculaPorcentagem(totalPorcentagem,porcentagem){
  const multiplicao = multiplicar(totalPorcentagem,porcentagem);
  return dividir(multiplicao,100);
  //return totalPorcentagem*porcentagem/100;
}

console.log( calculaPorcentagem(300,15) );
*/

function porcentagem(num1, num2) {
    return (num1 / num2) * 100;
}

/*function geradorDePorcentagem(percentual,total){
  return multiplicar(dividir(percentual,total),100); 
}

console.log( geradorDePorcentagem(2,200) + "%");*/

console.log("------------ Testes ------------");
console.log(adicionar(1,1));
console.log(subtracao(2,1));
console.log(multiplicacao(2,1));
console.log( divisao(2,1));
console.log( divisao(0,0));
console.log(quadrado(5));
console.log(media(2,5,10).toFixed(2));
console.log(porcentagem(2,200));
