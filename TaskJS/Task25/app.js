//Напишите функцию, которая принимает число и возвращает массив всех чисел от 1 до этого числа.

function showNum(n) {
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    console.log(arr);
}

showNum(29)