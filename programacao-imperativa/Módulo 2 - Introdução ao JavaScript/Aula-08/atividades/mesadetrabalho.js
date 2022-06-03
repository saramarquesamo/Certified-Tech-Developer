function podeSubir(altura, acompanhada){
    if(altura > 1.40 && altura < 2.0){
        console.log('Acesso autorizado');
        return true
    }
    if(altura < 1.40 && altura > 1.20 && acompanhada){
        console.log('Acesso autorizado somente com acompanhante');
        return true
    }
    if(altura <= 1.20){
        console.log('Acesso negado.');
        return false
    }
}

podeSubir(1.20, true)
podeSubir(1.41, true)
podeSubir(1.41, false)
podeSubir(1.39, false)
podeSubir(1.39, true)
