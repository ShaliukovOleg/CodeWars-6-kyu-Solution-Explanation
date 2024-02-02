// Solution / Решение

const sieveOfEratosthenes = (n) => {
  // Использование решето Эратосфена для выделения всех простых чисел из нужного диапазона с параметром n
  const sieve = Array(n + 1).fill(1); // Создание массива "sieve" длиной (n + 1) и заполнение его единицами
  for (
    let i = 2;
    i <= Math.sqrt(n);
    i++ // Цикл от 2 до квадратного корня из n
  )
    if (sieve[i])
      // Если sieve[i] равно true (т.е., число является простым)
      for (let j = i * i; j <= n; j += i) sieve[j] = 0; // Внутренний цикл для пометки кратных чисел как составных
  return sieve.reduce((p, v, i) => (v && i > 1 && p.push(i), p), []); // Возвращается массив простых чисел
};

const numPrimorial = (() => {
  // Определение самовызывающейся функции "numPrimorial"
  const primes = sieveOfEratosthenes(1e6),
    cache = [2]; // Вызов функции "sieveOfEratosthenes" для получения простых чисел до 1e6
  return (n) => {
    // Возвращается анонимная функция с параметром n
    while (cache.length < n)
      cache.push(cache.slice(-1)[0] * primes[cache.length]); // Цикл для наращивания массива простых чисел
    return cache[n - 1]; // Возвращается n-ное простое число из массива
  };
})();

// Tests

console.log(numPrimorial(5)); // 2310
console.log(numPrimorial(8)); // 9699690
console.log(numPrimorial(9)); // 223092870

/*

Definition (Primorial Of a Number)
Is similar to factorial of a number, In primorial, not all the natural numbers get multiplied, 
only prime numbers are multiplied to calculate the primorial of a number. 
It's denoted with P# and it is the product of the first n prime numbers.

Task
Given a number N , calculate its primorial.

Notes
Only positive numbers will be passed (N > 0).

Input >> Output Examples:

1- numPrimorial (3) ==> return (30)
Explanation:
Since the passed number is (3), Then the primorial should obtained by multiplying 2 * 3 * 5 = 30 .
Mathematically written as , P3# = 30.

2- numPrimorial (5) ==> return (2310)
Explanation:
Since the passed number is (5), Then the primorial should obtained by multiplying  2 * 3 * 5 * 7 * 11 = 2310 .
Mathematically written as , P5# = 2310.

3- numPrimorial (6) ==> return (30030)
Explanation:
Since the passed number is (6), Then the primorial should obtained by multiplying  2 * 3 * 5 * 7 * 11 * 13 = 30030 .

Mathematically written as , P6# = 30030.

*/

/*

Определение (Первообразная числа)
Аналогичен факториалу числа, но в примориале перемножаются не все натуральные числа, 
Для вычисления примориала числа перемножаются только простые числа. 
Обозначается P# и представляет собой произведение первых n простых чисел.

Задача
Дано число N, вычислите его первообразную.

Примечания
Будут переданы только положительные числа (N > 0).

Вход >> Выход Примеры:

1- numPrimorial (3) ==> return (30)
Пояснение:
Поскольку передано число (3), то примориал должен быть получен умножением 2 * 3 * 5 = 30.
Математически это записывается как , P3# = 30.

2- numPrimorial (5) ==> return (2310)
Пояснение:
Поскольку переданное число равно (5), то примориал должен получиться при умножении 2 * 3 * 5 * 7 * 11 = 2310 .
Математически это записывается как , P5# = 2310.

3- numPrimorial (6) ==> return (30030)
Пояснение:
Так как переданное число равно (6), то примориал должен получиться при умножении 2 * 3 * 5 * 7 * 11 * 13 = 30030 .

Математически это записывается как , P6# = 30030.

*/
