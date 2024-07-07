//Напишите функцию, которая принимает массив строк и возвращает строку, которая встречается чаще всего.

const arr = ['Hi', 'How', 'Are', 'You', 'Hi', 'I"m', 'all', 'right', 'Are', 'Are', 'Are', 'Hi', 'Hi', 'Hi', 'Hi', 'Hi']
let newArr = []
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === arr[i]) {
        newArr.push(arr[i])
    }
}

console.log(newArr);