//Напишите функцию, которая принимает массив чисел и возвращает сумму всех элементов.

const arr = [1, 2, 3, 4, 5]

const newArr = arr.reduce((sum, el) => {
    return sum + el
}, 0)

console.log(newArr);