// Solution / Решение

function expandedForm(num) {
    const [integer, fractional] = ('' + num).split('.'); // Деструктуризация строки на целую и дробную часть

    // Обработка целой части числа
    const integerPart = integer
        .split('')
        .map((digit, i) => (digit !== '0' ? digit + '0'.repeat(integer.length - 1 - i) : null))
        .filter(Boolean);

    // Обработка дробной части числа
    const fractionalPart = fractional
        .split('')
        .reverse()
        .map((digit, i) => (digit !== '0' ? digit + '/1' + '0'.repeat(fractional.length - i) : null))
        .filter(Boolean)
        .reverse();

    // Объединение результатов и запись их в строку через знак ' + '
    return [...integerPart, ...fractionalPart].join(' + ');
}

// Solution 2 / Решение 2

function expandedForm(num) {
    const numStr = num.toString(); // Преобразование числа в строку
    const [integer, fractional = ""] = numStr.split('.'); // Деструктуризация строки на целую и дробную часть
    const result = []; // Переменная для результата вычислений

    for (let i = 0; i < integer.length + fractional.length; i++) { // Проходим по всем элементам двух переменных
        const digit = i < integer.length ? integer[i] : fractional[i - integer.length]; // Временная переменная для последовательной обработки элементов

        if (digit !== '0') { // Пропуск нулевых значений
            const numDigit = digit + '0'.repeat(Math.max(integer.length - 1 - i, 0)) +
                (i >= integer.length
                    ? '/1' + '0'.repeat(i + 1 - integer.length)
                    : '');

            result.push(numDigit); // Добавление обработанного элемента в массив
        }
    }

    return result.join(' + '); // Возврат элементов в виде строки соединенных знаком ' + '
}

// Tests

console.log(expandedForm(807.304)); // 800 + 7 + 3/10 + 4/1000
console.log(expandedForm(1.24)); // 1 + 2/10 + 4/100
console.log(expandedForm(4.28)); // 4 + 2/10 + 8/100
console.log(expandedForm(7.304)); // 7 + 3/10 + 4/1000

/*

Write Number in Expanded Form - Part 2
This is version 2 of my 'Write Number in Exanded Form' Kata.

You will be given a number and you will need to return it as a string in expanded form :

7286.45 => 7000 + 200 + 80 + 6 + 4/10 + 5/100

For example:

expanded_from(807.304); // Should return "800 + 7 + 3/10 + 4/1000"
expanded_from(1.24); // should return "1 + 2/10 + 4/100"
expanded_from(7.304); // should return "7 + 3/10 + 4/1000"
expanded_from(0.04); // should return "4/100"

*/

/*

Запись числа в развернутом виде - часть 2
Это вторая версия моего Ката "Запись числа в развернутом виде".

Вам будет дано число, и вы должны будете вернуть его в виде строки в развернутом виде:

7286.45 => 7000 + 200 + 80 + 6 + 4/10 + 5/100

Например:

expanded_from(807.304); // Должно вернуться "800 + 7 + 3/10 + 4/1000"
expanded_from(1.24); // Должно получиться "1 + 2/10 + 4/100"
expanded_from(7.304); // должно возвращаться "7 + 3/10 + 4/1000"
expanded_from(0.04); // должно получиться "4/100"

*/