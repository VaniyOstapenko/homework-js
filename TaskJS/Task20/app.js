//Напишите функцию, которая принимает массив строк и возвращает массив тех строк, которые начинаются с буквы 'A'.

const str = ['Hello', 'Anna', 'How', 'Are', 'You', 'HAnna']

const newStr = str.filter((el) => {
    if (el[0] === 'A') {
        return el;
    }
})

console.log(newStr);
