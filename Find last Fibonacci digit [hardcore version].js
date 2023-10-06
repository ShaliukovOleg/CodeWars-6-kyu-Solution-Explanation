// Solution / Решение

function lastFibDigit(index) {
    return [0, 1, 1, 2, 3, 5, 8, 3, 1, 4, 5, 9, 4, 3, 7,
        0, 7, 7, 4, 1, 5, 6, 1, 7, 8, 5, 3, 8, 1, 9,
        0, 9, 9, 8, 7, 5, 2, 7, 9, 6, 5, 1, 6, 7, 3,
        0, 3, 3, 6, 9, 5, 4, 9, 3, 2, 5, 7, 2, 9, 1][index % 60]
}

// Особенность этой функции заключается в том,
// что она использует предварительно вычисленную таблицу последних цифр чисел Фибоначчи для оптимизации вычислений.
// По сути каждые 60 цифр значения последних цифр фиббоначи повторяются. Из-за этого не требуются вычисления и мы берем данные из таблицы. 

function lastFibDigit(index) {
    const fibonacciLastDigits = []; // Создаем пустой массив для хранения последних цифр чисел Фибоначчи
    let a = 0, b = 1; // Инициализируем начальные значения для чисел Фибоначчи

    for (let i = 0; i <= 60; i++) {
        // В цикле вычисляем последние цифры и добавляем их в массив
        fibonacciLastDigits.push(a % 10); // Добавляем последнюю цифру числа Фибоначчи в массив
        [a, b] = [b, (a + b) % 10]; // Обновляем значения чисел Фибоначчи для следующей итерации
    }
    return fibonacciLastDigits[index % 60]; // Возвращаем массив последних цифр чисел Фибоначчи для заданного индекса
}

// Short version / кратчайшее решение (без заготовленных данных).

function lastFibDigit(index) {
    const fib = [0, 1];
    for (let i = 2; i <= index % 60; i++) {
        fib[i] = (fib[i - 1] + fib[i - 2]) % 10;
    }
    return fib[index % 60];
}

// With cache

const lastFibDigit = (index, cache = {}) => {
    if (cache[index] !== undefined) {
        return cache[index]; // Если результат уже в кэше, вернем его
    }

    const fib = [0, 1];
    for (let i = 2; i <= index % 60; i++) {
        fib[i] = (fib[i - 1] + fib[i - 2]) % 10;
    }

    const result = fib[index % 60];
    cache[index] = result; // Сохраняем результат в кэше
    return result;
};

/*

Just like in the "father" kata, 
you will have to return the last digit of the nth element in the Fibonacci sequence 
(starting with 1,1, to be extra clear, not with 0,1 or other numbers).

You will just get much bigger numbers, so good luck bruteforcing your way through it ;)

lastFibDigit(1) == 1
lastFibDigit(2) == 1
lastFibDigit(3) == 2
lastFibDigit(1000) == 5
lastFibDigit(1000000) == 5

*/

/*

Как и в ката "Find Fibonacci last digit (7 kyu)", 
необходимо вернуть последнюю цифру n-го элемента последовательности Фибоначчи 
(начиная с 1,1, чтобы было понятнее, а не с 0,1 или других чисел).

Вы просто получите гораздо большие числа, так что удачи вам в переборе ;)

lastFibDigit(1) == 1
lastFibDigit(2) == 1
lastFibDigit(3) == 2
lastFibDigit(1000) == 5
lastFibDigit(1000000) == 5

*/