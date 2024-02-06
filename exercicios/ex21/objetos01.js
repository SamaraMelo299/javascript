let amigo = {nome: 'Samara',
sexo: 'F',
peso: '70',
emagrecer(p) {
    console.log('Emagreceu')
    this.peso -= p
}}


amigo.emagrecer(2)
console.log(`${amigo.nome} peso ${amigo.peso} kg  .`)