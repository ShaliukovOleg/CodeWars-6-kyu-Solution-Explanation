/*

A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. 
Return True if it is, False if not. Ignore numbers and punctuation.

*/

/*

Панграмма — это предложение, в котором каждая буква алфавита встречается хотя бы по одному разу.
В зависимости от алфавита, который берется за основу, можно рассмотреть две фразы на русском и английском языках:

ПРИМЕРЫ:
РУС: В чащах юга жил бы цитрус? Да, но фальшивый экземпляр!
АНГЛ: The quick brown fox jumps over the lazy dog

Требуется проверить строку и вернуть "TRUE", если строка является панграммой, и FALSE, если строка нет.
Не учитывать знаки препинания и цифры в строке.

*/

function isPangram(string) { // Примером будет данная строка: The quick brown fox jumps over the lazy dog
    let str = string
        .replace(/[\W\d]/g, '') // Убираем все ненужные символы из строки, согласно условию засчет регулярного выражения
        .toLowerCase(); // Преобразует все буквы верхнего регистра в маленькие
    return [...new Set(str)].length == 26 // Тут мы проверим содержит ли выражение все буквы английского алфавита.
    // Если содержит вернет "TRUE", в противном случае "FALSE"
}

// function isPangram(string) {
//     return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26; // Лучшее возможное решение, сразу фильтрация через регулярное выражение и проверка на совпадение значений друг с другом. После этого проверка оставшегося массива на соответствие количеству символов латинского алфавита.
// }
console.log(isPangram('The quick brown fox jumps over the lazy dog')); // true