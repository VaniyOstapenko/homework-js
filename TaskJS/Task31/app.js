//Напишите функцию, которая принимает массив строк и возвращает строку, которая встречается чаще всего.

const arr = ['Hi', 'How', 'Are', 'You', 'Hi', 'I"m', 'all', 'right', 'Are', 'Are', 'Are', 'Hi', 'Hi', 'Hi', 'Hi', 'Hi']

let newArr = arr.filter((el, res) => arr.indexOf(el) != res)

let title = ''
let count = 0;

for (let i = 0; i < newArr.length; i++) {
    const res = newArr.filter((el) => el == newArr[i])
    if (res.length > count) {
        count = res.length
        title = newArr[i]
    }
}

console.log(title);