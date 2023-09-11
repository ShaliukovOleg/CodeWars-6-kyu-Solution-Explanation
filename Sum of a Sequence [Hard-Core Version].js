/*

The task is simple to explain: simply sum all the numbers from 
the first parameter being the beginning to the second parameter being 
the upper limit (possibly included), going in steps expressed by the third parameter:
If it is an impossible sequence (with the beginning being larger the end and a positive step or the other way around), 
just return 0. See the provided test cases for further examples :)

Note: differing from the other base kata, much larger ranges are going to be tested,
so you should hope to get your algo optimized and to avoid brute-forcing your way through the solution.

*/

/*

Задача состоит в том, что: 
нужно просуммировать все числа от первого параметра, являющегося началом, 
до второго параметра, являющегося верхним пределом (возможно, включенным), 
шагом указанным в третьем параметре

Если невозможная последовательность: 
- начало больше конца (begin > end)
- положительным шагом или наоборот (step != end - begin)
Вернуть 0. 

*/

/*

sequenceSum(2,2,2) === 2
sequenceSum(2,6,2) === 12 // 2 + 4 + 6
sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
sequenceSum(1,5,3) === 5 // 1 + 4

*/

function sequenceSum(begin, end, step) {
    //your code here
    let result = 0; // Объявляем новую переменную, в которую будет выведен конечный результат
    for ( // Решение, при помощи цикла, как и в простом варианте решения данной задачи
        let i = begin; // Присваиваем переменной "i" значение begin(первого операнда)
        // используем тернарный оператор для наглядности и меньшего количества символов

        step > 0 // Если шаг будет больше нуля, то
            ? i <= end // Переменная "i" меньше второго операнда
            : i >= end; // Переменная "i" больше или равна второму операнду

        i += step) // Присваеваем циклу шаг значение третьего операнда "step"
        result += i; // Каждую итерацию к результату добавляем значение "i"
    return result; // Возвращаем переменную после цикла. Которая будет содержать сумму всех значений "i". 
}

console.log(sequenceSum(1, 5, 0));