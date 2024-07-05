//Напишите функцию, которая принимает два числа и возвращает наибольшее общее делимое этих чисел.

function showDelNum(a, b) {
    let count1 = []
    let count2 = []

    for (let i = 0; i <= b && a; i++) {
        if (b % i === 0) {
            count1.push(i);
        } if (a % i === 0) {
            count2.push(i)
        }
    }

    let newArr = [...count1, ...count2]
    let num = newArr.filter((el, pos) => newArr.indexOf(el) !== pos)
    let result = 0

    for (let i = 0; i < num.length; i++) {
        if (num[i] > result) {
            result = num[i]
        }
    }
    return result;
}

console.log(showDelNum(12, 6));
