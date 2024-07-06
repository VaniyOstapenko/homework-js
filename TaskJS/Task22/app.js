//Напишите функцию, которая принимает два числа и возвращает наименьшее общее кратное этих чисел.

function show(a, b) {
    let arr = []
    let arr2 = []

    for (let i = 1; i < a && b; i++) {
        arr.push(a * i);
        arr2.push(b * i);
    }

    let newArr = [...arr, ...arr2]

    const repeatNum = newArr.filter((el, res) => newArr.indexOf(el) != res)
    let count = 1000;

    for (let i = 0; i < repeatNum.length; i++) {
        if (repeatNum[i] < count) {
            count = repeatNum[i]
        }
    }
    console.log(count);
}

show(16, 12)

