//Напишите функцию, которая принимает строку и возвращает количество гласных в этой строке.

const str = 'hello';
let sogl = 'aeiouy';
let count = 0;

function countNum() {
    for (let i = 0; i < str.length; i++) {
        if (sogl.includes(str[i])) {
            count++;
        }
    }
}

countNum()
console.log(count);