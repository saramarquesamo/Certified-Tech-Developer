// alert retorna apenas uma mensagem
alert('Ola mundo'); // ATENÇÃO: é um comando que pára a execução 
// **prompt** inserir texto e opções de aceitar ou cancelar
prompt("Digite seu nome");

// usando variavel para armazenar os dados
let nomeUsuario = prompt("Por favor, digite seu nome");
console.log(nomeUsuario);

// retornar true ou false
resultado = confirm("Deseja um tratamento personalizado?")
console.log(resultado); // ok TRUE, cancelar FALSE

// exemplo com dados
let tratamentoPersonalizado = confirm("Deseja um tratamento personalizado?")

if(tratamentoPersonalizado) {
  let nome = prompt("Por favor, digite seu nome");
   alert("Bem-vindo ao nosso site"+ nome +". Muito obrigado pela sua visita, estamos à sua disposição! ?");
} else {
   alert("Obrigado por conectar.")
}

// \n salto para próxima linha

let nome = prompt('Digite seu nome:')
//console.log(nome);
// alert('ola ' + nome)
document.querySelector('h1').innerText+= ' ' + nome; //h1 do HTML querySelector = selecionador de TAG html, += concetena e atribui, inerText = para pegar o conteúdo que há no H1