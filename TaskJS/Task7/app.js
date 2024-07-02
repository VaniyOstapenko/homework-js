//Напишите функцию, которая принимает массив строк и возвращает массив только тех строк, которые содержат больше пяти символов.

const str = ['hi', 'i"m', 'vaina', 'ostapenko']

const newStr = str.filter((el) => el.length > 5)

console.log(newStr);