//Напишите функцию, которая принимает строку и возвращает true, если строка является палиндромом, и false в противном случае.

function palindrom(str) {
    if (str === str.split('').reverse().join('')) {
        return 'true'
    } else {
        return 'false'
    }
}

console.log(palindrom('anna'));