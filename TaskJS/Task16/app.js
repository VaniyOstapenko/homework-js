//Напишите функцию, которая принимает число и возвращает сумму его цифр.

const n = 24;

let newN = String(n).split('')

let sum = newN.reduce((sum, el) => {
    return sum += +el
}, 0)

console.log(sum);