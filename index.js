const verificar = (saldo) => {
    if (saldo <= 10)  'ferro'
    else if (saldo <= 20) return 'bronze'
    else if (saldo <= 50) return 'prata'
    else if (saldo <= 80) return 'ouro'
    else if (saldo <= 90) return 'diamante'
    else if (saldo <= 100) return 'lendário'
    else return 'imortal'
}

const rankeada = (vitorias, derrotas) => {
    const saldo = vitorias - derrotas
    let text = `O Herói tem de saldo **${saldo}** e está no nível `

    text += verificar(saldo)
    
    return text
}

console.log(rankeada(120, 32))