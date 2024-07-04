//Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только уникальные значения.

function uniqNum(num) {
    const n = new Set(num)
    return Array.from(n)
}

console.log(uniqNum([1, 2, 3, 3, 4, 5, 5, 5, 6, 6, 7]));