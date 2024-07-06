//Напишите функцию, которая принимает массив строк и возвращает массив, где каждый элемент - это первая буква исходного элемента.

const arr = ['hi', 'there', 'my', 'name', 'is', 'ivan'];

const newArr = arr.map((el) => el.charAt(0))

console.log(newArr);