/*
10) Crie uma função que verifica se um número inteiro passado como
parêmetro é divisível por 3, e retorne true ou false.


Lógica Matematica: Um número é divisível por 3
se a soma de seus algarismos é divisível por 3.
Exemplos: 18 é divisível por 3 pois 1+8= 9 (9/3=3) que é
divisível por 3. Mas 134 não é divisível por 3,
pois 1+3+4= 8 (8/3=2,6...) que não é divisível por 3.

No JS: 0 = true (divisivel por 3)
*/

function inteiro (numero){
    return numero % 3 === 0 //Verificar o resto da divisão
}

console.log(inteiro(18))
console.log(inteiro(134))

console.log("-------------------------") //Apenas para separar os resultados no console :)

//"Brincando" um pouco mais...

function numInteiro (numero){
    if (numero % 3 === 0){
        return "Este numero é divisivel por 3"
    } else {
        return "Este numero não é divisivel por 3"
    }
}

console.log(numInteiro(18))
console.log(numInteiro(134))

console.log("-------------------------") //Apenas para separar os resultados no console :)

//Usando função Arrow

let funcaoArrow = (numero) => {
    return numero % 3 === 0
}

console.log (funcaoArrow(18))
console.log (funcaoArrow(134))

console.log("-------------------------") //Apenas para separar os resultados no console :)

let funcaoArrow2 = (numero) => {
    let valor = numero % 3
    if (valor === 0){
        return "O resto da divisão é: " + valor + ", portanto o resultado é: true"
    } else {
        return "O resto da divisão é: " + valor + ", portanto o resultado é: false" 
    }
}

console.log(funcaoArrow2(18))
console.log(funcaoArrow2(134))

console.log("-------------------------") //Apenas para separar os resultados no console :)

let funcaoArrow3 = (numero) => {
    let valor = numero % 3
    let verificar = valor === 0
    if (verificar === true){
        return "O resto da divisão é: " + valor + ", portanto o resultado é: " + verificar
    } else {
        return "O resto da divisão é: " + valor + ", portanto o resultado é: " + verificar
    }
}

console.log(funcaoArrow2(18))
console.log(funcaoArrow2(134))