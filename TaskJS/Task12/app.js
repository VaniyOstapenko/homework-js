//Напишите функцию, которая принимает массив чисел и возвращает произведение всех элементов.

const arr = [1, 2, 3, 4, 5]

const newArr = arr.reduce((sum, el) => {
    return sum * el
}, 1)

console.log(newArr);