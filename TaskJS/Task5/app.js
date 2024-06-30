//Напишите функцию, которая принимает массив строк и возвращает новый массив, где все строки отсортированы по длине.

const str = ['hello', 'my', 'name', 'galina']

const newStr = str.sort((a, b) => {
    return a.length - b.length
})

console.log(newStr);

