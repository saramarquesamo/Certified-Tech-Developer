/* Requisitos:

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".*/

function menu(comida, tempo) {

    let pipoca = 0;

    if (comida == "pipoca") 

    {
      pipoca = 10;

      if (tempo > pipoca && tempo <= pipoca * 2) {
        return "Comida Queimou";

      } else if (tempo < pipoca) {
        return "Tempo insuficiente";

      } else if (tempo > pipoca && tempo >= pipoca * 3) {
        return "Kabum";
      }

      else if (tempo == pipoca){
          return "Comida pronta! Bom apetite!"
      }
    }
     else {
        return "Prato inexistente";
      
    }
    
  }
  
  console.log("--------Testes---------");
  console.log(menu("pipoca", 10)); 
  console.log(menu("pipoca",50)); 
  console.log(menu("pipoca",15)); 
  console.log(menu("pipoca",8));
  console.log(menu("macarrao", 30));
  