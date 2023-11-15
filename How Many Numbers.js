// Solution / Решение

function adjNum(n, d) { // Функция adjNum проверяет, соответствуют ли цифры числа условиям.
    const digits = n.toString().split('').map(Number); // Преобразуем число в массив цифр, используя строковое представление.
    return digits.slice(1).every((x, i) => x > digits[i] && x - digits[i] <= d); // Проверяем, что разность между соседними цифрами в пределах d.
}

function selNumber(n, d) { // Функция selNumber считает количество чисел от 12 до n, удовлетворяющих условиям функции adjNum.
    let result = 0;
    for (let i = 12; i <= n; i++) { // Перебираем числа от 12 до n.
        if (adjNum(i, d)) result++; // Если adjNum возвращает true для текущего числа, увеличиваем счетчик.
    }
    return result; // Возвращаем общее количество чисел, удовлетворяющих условиям.
}

// Short version

function selNumber(n, d, result = 0) {
    const arrCheck = num => Array.from(num.toString(), Number);
    const adjNum = (num, d) => arrCheck(num).slice(1).every((x, i) => x - arrCheck(num)[i] <= d && x - arrCheck(num)[i] > 0)
    for (let i = 12; i <= n; i++) { if (adjNum(i, d)) result++; }
    return result;
}

// Shortest version (feat. evk)

const selNumber = (n, d, s = '', i = 0) => s < n ? [...Array(s ? d : 9)].reduce((x, _, j) => (j += i + 1, j < 10 ? x + selNumber(n, d, s + j, j) : x), s > 10) : 0;

/*

Create a function sel_number(), that will select numbers that fulfill the following constraints:

The numbers should have 2 digits at least.

They should have their respective digits in increasing order from left to right. 
Examples: 789, 479, 12678, have these feature. But 617, 89927 are not of this type. 
In general, if d1, d2, d3.... are the digits of a certain number i Example: ( i = d1d2d3d4d5) so, d1 < d2 < d3 < d4 < d5

They cannot have digits that occurs twice or more. Example: 8991 should be discarded.

The difference between neighbouring pairs of digits cannot exceed certain value. 
Example: If the difference between contiguous digits cannot exceed 2, so 1345, 23568 and 234578 pass this test. 
Other numbers like 1456, 389, 157 don't belong to that group because in the first number(1456), 
the difference between second and first digit 4 - 1 > 2; in the next one(389), we have 8 - 3 > 2; 
and see by yourself why 157 should be discarded. In general, taking the example above of i = d1d2d3d4d5:

d2 - d1 <= d;

d3 - d2 <= d;

d4 - d3 <= d;

d5 - d4 <= d;
The function should accept two arguments n and d; n is the upper limit of the range to work with
(all the numbers should be less or equal than n), 
and d is maximum difference between every pair of its contiguous digits. It's clear that 1 <= d <= 8.

Here we have some cases:

sel_number(0,1) = 0 # n = 0, empty range
sel_number(3, 1) = 0 # n = 3, numbers should be higher or equal than 12
sel_number(13, 1) = 1 # only 12 fulfill the requirements
sel_number(20, 2) = 2 # 12 and 13 are the numbers
sel_number(30, 2) = 4 # 12, 13, 23 and 24 are the selected ones
sel_number(44, 2) = 6 # 12, 13, 23, 24, 34 and 35 are valid ones
sel_number(50, 3) = 12 # 12, 13, 14, 23, 24, 25, 34, 35, 36, 45, 46 and 47 are valid
Compare the last example with this one:

sel_number(47, 3) = 12 # 12, 13, 14, 23, 24, 25, 34, 35, 36, 45, 46 and 47 are valid 
(because the instructions says the value of may be included if it fulfills the above constraints of course)

Happy coding!!

*/

/*

Создайте функцию sel_number(), которая будет выбирать числа, удовлетворяющие следующим ограничениям:

Числа должны содержать не менее 2 цифр.

Соответствующие цифры должны располагаться в порядке возрастания слева направо. 
Примеры: 789, 479, 12678 обладают этими свойствами. Но 617, 89927 не относятся к этому типу. 
В общем случае, если d1, d2, d3.... являются цифрами некоторого числа i Пример: ( i = d1d2d3d4d5), то d1 < d2 < d3 < d4 < d5

В них не может быть цифр, которые встречаются дважды и более. Пример: 8991 следует отбросить.

Разница между соседними парами цифр не может превышать определенного значения. 
Пример: Если разность между соседними цифрами не может превышать 2, то 1345, 23568 и 234578 проходят этот тест. 
Другие числа, такие как 1456, 389, 157, не принадлежат к этой группе, поскольку в первом числе (1456) 
разница между второй и первой цифрами 4 - 1 > 2, а в следующем (389) - 8 - 3 > 2; 
и убедитесь сами, почему 157 следует отбросить. В общем случае, если взять пример i = d1d2d3d4d5:

d2 - d1 <= d;

d3 - d2 <= d;

d4 - d3 <= d;

d5 - d4 <= d;
Функция должна принимать два аргумента n и d; n - верхняя граница диапазона, с которым нужно работать
(все числа должны быть меньше или равны n), 
а d - максимальная разность между каждой парой его смежных цифр. Понятно, что 1 <= d <= 8.

Приведем несколько случаев:

sel_number(0,1) = 0 # n = 0, пустой диапазон
sel_number(3, 1) = 0 # n = 3, числа должны быть больше или равны 12
sel_number(13, 1) = 1 # только 12 удовлетворяют требованиям
sel_number(20, 2) = 2 # 12 и 13 - это числа
sel_number(30, 2) = 4 # выбраны 12, 13, 23 и 24
sel_number(44, 2) = 6 # 12, 13, 23, 24, 34 и 35 - действительные
sel_number(50, 3) = 12 # 12, 13, 14, 23, 24, 25, 34, 35, 36, 45, 46 и 47 - допустимые.
Сравните предыдущий пример с этим:

sel_number(47, 3) = 12 # 12, 13, 14, 23, 24, 25, 34, 35, 36, 45, 46 и 47 действительны 
(поскольку в инструкции сказано, что значение of может быть включено, если, конечно, оно удовлетворяет указанным выше ограничениям)

Удачного кодирования!!!

*/