const pipoca = 10;
const macarrao = 8;
const carne = 15;
const feijao = 12;
const brigadeiro = 8;

function menu(tempo, comida) {
  switch (comida) {
    case "pipoca":
      console.log(
        tempo >= pipoca * 2 && tempo < pipoca * 3
          ? "A comida queimou "
          : tempo < pipoca
          ? "Tempo insuficiente"
          : tempo >= pipoca * 3
          ? "Xablauuuu"
          : "Prato pronto, bom apetite!!!"
      );
      break;
    case "macarrao":
      console.log(
        tempo >= macarrao * 2 && tempo < macarrao * 3
          ? "A comida queimou "
          : tempo < macarrao
          ? "Tempo insuficiente"
          : tempo >= macarrao * 3
          ? "Xablauuuu"
          : "Prato pronto, bom apetite!!!"
      );
      break;

    case "carne":
      console.log(
        tempo >= carne * 2 && tempo < carne * 3
          ? "A comida queimou "
          : tempo < carne
          ? "Tempo insuficiente"
          : tempo >= carne * 3
          ? "Xablauuuu"
          : "Prato pronto, bom apetite!!!"
      );
      break;

    case "feijao":
      console.log(
        tempo >= feijao * 2 && tempo < feijao * 3
          ? "A comida queimou "
          : tempo < feijao
          ? "Tempo insuficiente"
          : tempo >= feijao * 3
          ? "Xablauuuu"
          : "Prato pronto, bom apetite!!!"
      );
      break;

    case "brigadeiro":
      console.log(
        tempo >= brigadeiro * 2 && tempo < brigadeiro * 3
          ? "A comida queimou "
          : tempo < brigadeiro
          ? "Tempo insuficiente"
          : tempo >= brigadeiro * 3
          ? "Xablauuuu"
          : "Prato pronto, bom apetite!!!"
      );
      break;
    default:
      console.log("Prato inexistente");
  }
}
menu(30, "pipoca"); // false
