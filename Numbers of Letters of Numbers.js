// Solution / Решение

function numbersOfLetters(n) {
    // Создание массива words, содержащего слова для цифр от 0 до 9
    const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    const normalizer = num => { // Объявление функции normalizer с параметром num
        // Преобразование числа num в строку, затем в массив цифр, и замена каждой цифры соответствующим словом из массива words
        const char = [...String(num)].map(digit => words[digit]).join(''); 
        // Проверка, отличается ли длина исходного числа от длины полученной строки char
        return num !== char.length ? [char, ...normalizer(char.length)] : [char];
    };
    return normalizer(n); // Вызов функции normalizer с аргументом n и возврат результата
}

// Tests

console.log(numbersOfLetters(37)); // [ 'threeseven', 'onezero', 'seven', 'five', 'four' ]
console.log(numbersOfLetters(311)); // [ 'threeoneone', 'oneone', 'six', 'three', 'five', 'four' ]
console.log(numbersOfLetters(999)); // [ 'nineninenine', 'onetwo', 'six', 'three', 'five', 'four' ]

/*

If we write out the digits of "60" as English words we get "sixzero"; 
the number of letters in "sixzero" is seven. The number of letters in "seven" is five. 
The number of letters in "five" is four. The number of letters in "four" is four: 
we have reached a stable equilibrium.

Note: for integers larger than 9, write out the names of each digit in a single word 
(instead of the proper name of the number in English). 
For example, write 12 as "onetwo" (instead of twelve), 
and 999 as "nineninenine" (instead of nine hundred and ninety-nine).

For any integer between 0 and 999, return an array showing the path from that integer to a stable equilibrium:

Examples
numbersOfLetters(60) --> ["sixzero", "seven", "five", "four"]
numbersOfLetters(1) --> ["one", "three", "five", "four"]

*/

/*

Если записать цифры числа "60" в виде английских слов, получится "sixzero"; 
количество букв в слове "sixzero" равно семи. Количество букв в слове "семь" равно пяти. 
Количество букв в слове "пять" равно четырем. Количество букв в слове "четыре" равно четырем: 
мы достигли устойчивого равновесия.


Примечание: для целых чисел, больших 9, запишите названия каждой цифры одним словом 
(вместо названия числа на английском языке). 
Например, 12 пишите как "onetwo" (вместо twelve), 
а 999 - как "nineninenine" (вместо девятьсот девяносто девять).


Для любого целого числа от 0 до 999 верните массив, показывающий путь от этого целого числа до устойчивого равновесия:


Примеры
numbersOfLetters(60) --> ["sixzero", "seven", "five", "four"]
numbersOfLetters(1) --> ["one", "three", "five", "four"]

*/