/*
Crie uma função que retorna os números pares, a seguir, utilize a função .filter() na
variável numerosAleatorios passando a função que você criou como callback.
numerosAleatorios = [12, 47, 66, 35, 142, 71, 14, 6]
*/

function isEven(number) {
    if(number % 2 == 0) return number
}
let numerosAleatorios = [12, 47, 66, 35, 142, 71, 14, 6];
let numerosPares = numerosAleatorios.filter(isEven);
console.log(numerosPares)