//Напишите функцию, которая принимает массив строк и возвращает строку, которая встречается чаще всего.

const arr = ['Hi', 'How', 'Are', 'You', 'Hi', 'I"m', 'all', 'right', 'Are', 'Are', 'Are', 'Hi', 'Hi', 'Hi', 'Hi', 'Hi']
let newArr = arr.filter((el, i) => {
    return arr.indexOf(el) != i
})

console.log(newArr);