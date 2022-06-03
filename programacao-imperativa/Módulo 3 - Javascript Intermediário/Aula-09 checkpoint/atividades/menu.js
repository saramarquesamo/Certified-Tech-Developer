const pipoca = 10;
const macarrao = 8;
const carne = 15;
const feijao = 12;
const brigadeiro = 8;

function menu (tempo, comida){
    switch (comida){
        case "pipoca": 
            if(tempo >= pipoca * 2 && tempo < pipoca * 3){
                console.log("A comida queimou")
                return "A comida queimou"
            } else if (tempo < pipoca){
                console.log("Tempo insuficiente")
                return "Tempo insuficiente"
            }else if (tempo >= pipoca * 3){
                console.log("Xablauuu!")
                return "Xablauuuu!"
            } else if (tempo = pipoca){
                console.log("Prato pronto, bom apetite!!!");
            }
            break;
        case "macarrao":
            if(tempo >= macarrao * 2 && tempo < macarrao * 3){
                console.log("A comida queimou")
                return "A comida queimou"
            } else if (tempo < macarrao){
                console.log("Tempo insuficiente")
                return "Tempo insuficiente"
            }else if (tempo >= macarrao * 3){
                console.log("Xablauuu!")
                return "Xablauuuu!"
            }else if (tempo = macarrao){
                console.log("Prato pronto, bom apetite!!!");
            }
            break;

        case "carne":
            if(tempo >= carne * 2 && tempo < carne * 3){
                console.log("A comida queimou")
                return "A comida queimou"
            } else if (tempo < carne){
                console.log("Tempo insuficiente")
                return "Tempo insuficiente"
            }else if (tempo >= carne * 3){
                console.log("Xablauuu!")
                return "Xablauuuu!"
            }else if (tempo = macarrao){
                console.log("Prato pronto, bom apetite!!!");
            }
            break;

        case "feijao":
            if(tempo >= feijao * 2 && tempo < feijao * 3){
                console.log("A comida queimou")
                return "A comida queimou"
            } else if (tempo < feijao){
                console.log("Tempo insuficiente")
                return "Tempo insuficiente"
            }else if (tempo >= feijao * 3){
                console.log("Xablauuu!")
                return "Xablauuuu!"
            }else if (tempo = macarrao){
                console.log("Prato pronto, bom apetite!!!");
            }
            break;
                    
        case "brigadeiro":
            if(tempo >= brigadeiro * 2 && tempo < brigadeiro * 3){
                console.log("A comida queimou")
                return "A comida queimou"
            } else if (tempo < brigadeiro){
                console.log("Tempo insuficiente")
                return "Tempo insuficiente"
            }else if (tempo >= brigadeiro * 3){
                console.log("Xablauuu!")
                return "Xablauuuu!"
            } else if (tempo = macarrao){
                console.log("Prato pronto, bom apetite!!!");
            }
            break;
        default :
            console.log("Prato inexistente");
    }
}
menu(2,"pipoca") // false
menu(32,"feijao") // false
menu(8,"macarrao") // true
menu(15,"carne") // true
menu(16,"brigadeiro") // false
menu(20, "podrão")