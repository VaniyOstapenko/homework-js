//Напишите функцию, которая принимает строку и возвращает новую строку, где все пробелы заменены на дефисы.

function strDefis(str) {
    return str.replaceAll(' ', '-')
}

console.log(strDefis('Hello, My name is Ivan'));