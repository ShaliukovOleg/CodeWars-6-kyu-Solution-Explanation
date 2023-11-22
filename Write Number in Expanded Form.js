// Solution / Решение

function expandedForm(num) {
    const numStr = num.toString(); // Преобразование числа в строку
    const result = []; // Создание массива для хранения разрядов числа
    for (let i = 0; i < numStr.length; i++) { // Перебор каждой цифры числа
        if (numStr[i] !== '0') { // Пропуск нулевых цифр
            const numDigit = numStr[i] + '0'.repeat(numStr.length - 1 - i); // Формирование разряда
            result.push(numDigit); // Добавление сформированного разряда в массив
        }
    }
    return result.join(' + '); // Возвращение объединенной строки, разделенной  символом ' + '
}

// Solution 2 / Решение 2

function expandedForm(num) {
    const numStr = num.toString(); // Преобразование числа в строку
    const result = numStr 
        .split('') // Разбиение строки на массив
        .map((numDigit, i) => numDigit !== '0' ? numDigit + '0'.repeat(numStr.length - 1 - i) : null) // Отображение каждой цифры в разряд в расширенной форме (или null, если цифра равна 0)
        .filter(Boolean) // Фильтрация null значений (нулевых цифр)
        .join(' + '); // Объединение разрядов в строку, разделенной  символом ' + '

    return result; // Возвращение строки
}

// Tests

console.log(expandedForm(12)); // 10 + 2
console.log(expandedForm(42)); // 40 + 2
console.log(expandedForm(70304)); // 70000 + 300 + 4

/*

Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!! // Write Number in Expanded Form - Part 2


*/

/*

Запись числа в расширенной форме
Вам будет дано число, которое необходимо вернуть в виде строки в развернутом виде. Например:

expandedForm(12); // Должно вернуться '10 + 2'
expandedForm(42); // Должно возвращаться '40 + 2'
expandedForm(70304); // Должно возвращаться '70000 + 300 + 4'
ПРИМЕЧАНИЕ: Все числа будут целыми числами, большими 0.

Если вам понравилась эта ката, посмотрите часть 2!!! // Запись числа в расширенной форме - часть 2

*/