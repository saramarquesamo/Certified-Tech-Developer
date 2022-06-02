console.log("Olá, sou outro texto"); 
console.log(25); 
console.log(true); 

// Variantes 
// Como alternativas ao log( ), mas raramente implementado, é bom saber que existem outros métodos, tais como: 
// .error( ) → Escreve um erro no console. 
// .warn( ) → Escreve uma advertência no console. 
// .table( ) → Escreve uma tabela no console. 

let meuObjeto= { 
    mensagem: "Mensagem de texto", 
    utilidade: "Prova de JS" 
    }; 
    let meuArray= [ 'Primeira mensagem do array', 'Segunda mensagem do array', 'Terceira mensagem do array'] 
    console.table(meuObjeto); 
    console.table(meuArray); 

    let numero = 5; 
    let numeroEmLetras = "5"; 
    console.log(numero == numeroEmLetras); 
    console.log(numero === numeroEmLetras); 
    
// O método alert() pertence ao objeto window, mas para usá-lo podemos implementá-lo diretamente no console.
alert("Este é um alerta.");
