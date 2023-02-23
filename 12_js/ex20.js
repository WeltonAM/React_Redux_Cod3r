Array.prototype.reduce2 = function(callback, valorInicial){
    const inicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for(let i = inicial; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }

    return acumulador
}

const alunos = [
    {nome: "João", nota: 7.3, bolsista: true},
    {nome: "Maria", nota: 9.2, bolsista: true},
    {nome: "Pedro", nota: 9.8, bolsista: false},
    {nome: "Ana", nota: 8.7, bolsista: true}, 
]

const todosBol = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce2(todosBol)) 

const algumBol = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce2(algumBol)) 