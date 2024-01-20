// Solution / Решение

// Функция для проверки, является ли число простым
const isPrime = num => num < 2 ? false : ![...Array(Math.floor(Math.sqrt(num)) + 1).keys()].slice(2).some(i => num % i === 0);
// Функция для нахождения ближайшего простого числа к сумме
const closestNumberToPrime = sum => { let count = 0; while (!isPrime(sum + count)) count++; return count; };
// Функция для определения минимального числа, при котором сумма становится простым числом
const minimumNumber = numbers => closestNumberToPrime(numbers.reduce((a, b) => a + b));

// Tests

console.log(minimumNumber([2, 12, 8, 4, 6])); // 5
console.log(minimumNumber([50, 39, 49, 6, 17, 28])); // 2

/*

Task :
Given a List [] of n integers , find minimum number to be inserted in a list, 
so that sum of all elements of list should equal the closest prime number .

Notes
List size is at least 2.
List's numbers will only positives (n > 0).
Repetition of numbers in the list could occur.
The newer list's sum should equal the closest prime number.

Input >> Output Examples
1- minimumNumber ({3,1,2}) ==> return (1)
Explanation:
Since , the sum of the list's elements equal to (6), 
the minimum number to be inserted to transform the sum to prime number is (1), 
which will make the sum of the List equal the closest prime number (7).

2-  minimumNumber ({2,12,8,4,6}) ==> return (5)
Explanation:
Since , the sum of the list's elements equal to (32), 
the minimum number to be inserted to transform the sum to prime number is (5),
which will make the sum of the List equal the closest prime number (37).

3- minimumNumber ({50,39,49,6,17,28}) ==> return (2)
Explanation:
Since , the sum of the list's elements equal to (189), 
the minimum number to be inserted to transform the sum to prime number is (2), 
which will make the sum of the List equal the closest prime number (191).

*/

/*

Задача
Дан список [] из n целых чисел, найдите минимальное число, которое нужно вставить в список, 
чтобы сумма всех элементов списка была равна ближайшему простому числу.

Примечания
Размер списка не менее 2.
Числа в списке только положительные (n > 0).
Возможны повторения чисел в списке.
Сумма более новых элементов списка должна быть равна ближайшему простому числу.

Примеры ввода >> вывода
1- minimumNumber ({3,1,2}) ==> return (1)
Пояснение:
Поскольку , сумма элементов списка равна (6), 
то минимальное число, которое необходимо вставить для преобразования суммы в простое число, равно (1), 
что сделает сумму списка равной ближайшему простому числу (7).

2- minimumNumber ({2,12,8,4,6}) ==> return (5)
Пояснение:
Поскольку , сумма элементов списка равна (32), 
то минимальное число, которое нужно вставить, чтобы преобразовать сумму в простое число, равно (5),
что сделает сумму списка равной ближайшему простому числу (37).

3- minimumNumber ({50,39,49,6,17,28}) ==> return (2)
Пояснение:
Поскольку , сумма элементов списка равна (189), 
то минимальное число, которое нужно вставить, чтобы преобразовать сумму в простое число, равно (2), 
что сделает сумму Списка равной ближайшему простому числу (191).

*/