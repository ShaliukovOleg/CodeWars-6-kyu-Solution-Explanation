/*

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:
arrayDiff([1,2,2,2,3],[2]) == [1,3]
 
*/

/*
 
Цель этого задания -- реализация функции разности, которая вычитает один массив из другого и возвращает результат.
Т.е. нужно удалить все значения из массива a, которые присутствуют в списке b, сохраняя их порядок.

Пример:
arrayDiff([1,2],[1]) == [2]
Значение "1" присутствующее в массиве "а" должно быть удалено и если бы массив содержал другие значения равные "1", то они также должны быть удалены из него.

*/

function arrayDiff(a, b) { // Объявление функции с двумя переменными. (1 - вводный массив, 2 - массив, значения которого должны быть убраны из массива "1")
    const result = // Объявляем переменную result, в которую вернем значения нового массива
        a.filter(elements => !b.includes(elements)); // Используем метод filter() - (создает новый массив со всеми элементами прошедшими проверку). Передаем ему аргумент того, что нужно отфильтровать элементы(elements) первого массива и, если они отсутствуют во втором массиве, оставить их без изменений. (Но если они есть, то убрать их из массива). 
    return result; // Возвращаем переменную result, которая содержит значения нового массива.
}

console.log(arrayDiff([1,2],[1]));