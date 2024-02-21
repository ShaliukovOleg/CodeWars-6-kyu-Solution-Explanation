// Solution / Решение

function bowlingPins(haystack) {
    const pins = [
        [7, 8, 9, 10],
        [4, 5, 6],
        [2, 3],
        [1]
    ]; // Создаем массив с позициями кеглей на поле

    const pinsString = pins // Преобразуем массив кеглей в строку с учетом наличия или отсутствия кеглей в haystack
        .map((row, key) => { // Итерируемся по каждому "ряду" кеглей
            const value = row // Преобразуем текущий ряд кеглей в строку символов (I - если кегля на месте, " " - если кегля сбита)
                .map(x => haystack.includes(x) ? " " : "I") // Проверяем, есть ли кегля с номером x в haystack
                .join(' '); // Преобразуем массив символов в строку, разделенную пробелами
            return ' '.repeat(key) + value + ' '.repeat(key); // Добавляем пробелы в начале и в конце строки в зависимости от текущего ряда (key)
        }).join('\n'); // Преобразуем массив строк (рядов кеглей) в одну строку, разделенную символом перевода строки

    return pinsString; // Возвращаем строку, представляющую поле для игры в боулинг
}



// Tests

console.log(bowlingPins([2, 3])); 
/*
I I I I
 I I I 
       
   I
*/

console.log(bowlingPins([1, 2, 10])); 
/*
I I I  
 I I I 
    I

*/

/*

DESCRIPTION:
Mount the Bowling Pins!
Task:
Did you ever play Bowling? Short: You have to throw a bowl into 10 Pins arranged like this:

I I I I  # each Pin has a Number:    7 8 9 10
 I I I                                4 5 6
  I I                                  2 3
   I                                    1
You will get an array of integers between 1 and 10, e.g. [3, 5, 9], 
and have to remove them from the field like this:

I I   I
 I   I
  I   
   I   
Return a string with the current field.

Note that:
The pins rows are separated by a newline (\n)
Each Line must be 7 chars long
Fill the missing pins with a space character ( )
Have fun!

*/

/*

ОПИСАНИЕ:
Установите кегли для боулинга!
Задача:
Вы когда-нибудь играли в боулинг? Кратко: Вам нужно бросить миску в 10 кеглей, расположенных вот так:

I I I I I # каждая кегля имеет номер: 7 8 9 10
 I I I 4 5 6
  I I I 2 3
   I 1
Вы получите массив целых чисел от 1 до 10, например [3, 5, 9], 
и нужно будет удалить их из поля следующим образом:

I I I
 I I
  I   
   I   
Возвращает строку с текущим полем.

Обратите внимание, что:
Строки контактов разделяются новой строкой (\n).
Каждая строка должна быть длиной 7 символов
Заполните недостающие булавки символом пробела ( ).
Веселитесь!

*/