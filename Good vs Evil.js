// Solution / Решение

function goodVsEvil(good, evil) {
    const [worthGood, worthEvil] = [[1, 2, 3, 3, 4, 10], [1, 2, 2, 2, 3, 5, 10]]; // Деструктуризация массивов для определения значений силы добра и зла
    // Вычисляем общую силу на основе строки 'power' и массива численных значений силы 'force'
    const worth = (power, force) => power.split(' ').reduce((sum, current, index) => sum + force[index] * current, 0);
    const result = worth(good, worthGood) - worth(evil, worthEvil); // Записываем разницу между силами в переменную
    // Возвращаем строку, в зависимости от значения result
    return `Battle Result: ${
        result > 0 ? 'Good triumphs over Evil' : 
        result < 0 ? 'Evil eradicates all trace of Good' : 
        'No victor on this battle field'}`;
}

// Tests

console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1')); // Battle Result: Evil eradicates all trace of Good
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0')); // Battle Result: Good triumphs over Evil
console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0')); // Battle Result: No victor on this battle field

/*

Description
Middle Earth is about to go to war. 
The forces of good will have many battles with the forces of evil. 
Different races will certainly be involved. 
Each race has a certain worth when battling against others. 
On the side of good we have the following races, with their associated worth:
Hobbits: 1
Men: 2
Elves: 3
Dwarves: 3
Eagles: 4
Wizards: 10

On the side of evil we have:
Orcs: 1
Men: 2
Wargs: 2
Goblins: 2
Uruk Hai: 3
Trolls: 5
Wizards: 10

Although weather, location, supplies and valor play a part in any battle, 
if you add up the worth of the side of good and compare it with the worth of the side of evil, 
the side with the larger worth will tend to win.

Thus, given the count of each of the races on the side of good, 
followed by the count of each of the races on the side of evil, 
determine which side wins.

Input:
The function will be given two parameters. 
Each parameter will be a string of multiple integers separated by a single space. 
Each string will contain the count of each race on the side of good and evil.

The first parameter will contain the count of each race on the side of good in the following order:
Hobbits, Men, Elves, Dwarves, Eagles, Wizards.

The second parameter will contain the count of each race on the side of evil in the following order:
Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.

All values are non-negative integers. 
The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

Output:
Return 
"Battle Result: Good triumphs over Evil" if good wins, 
"Battle Result: Evil eradicates all trace of Good" if evil wins, or 
"Battle Result: No victor on this battle field" if it ends in a tie.

*/

/*

Описание
В Средней Земле начинается война. 
Силам добра предстоит множество сражений с силами зла. 
В них, конечно же, будут участвовать различные расы. 
Каждая раса имеет определенную ценность, когда сражается с другими. 

На стороне добра выступают следующие расы с соответствующими достоинствами:
Хоббиты: 1
Люди: 2
Эльфы: 3
Гномы: 3
Орлы: 4
Волшебники: 10

На стороне зла мы имеем:
Орки: 1
Люди: 2
Варги: 2
Гоблины: 2
Урук-хай: 3
Тролли: 5
Волшебники: 10

Хотя погода, местоположение, запасы и доблесть играют свою роль в любом сражении, 
Если сложить стоимость стороны добра и сравнить ее со стоимостью стороны зла, 
то победит та сторона, у которой больше достоинств.

Таким образом, если взять количество представителей каждой расы на стороне добра, 
а затем количество рас на стороне зла, 
определите, какая сторона победит.

Входные данные:
Функции будет передано два параметра. 
Каждый параметр представляет собой строку из нескольких целых чисел, разделенных одним пробелом. 
Каждая строка будет содержать количество рас на стороне добра и зла.

Первый параметр будет содержать количество представителей каждой расы на стороне добра в следующем порядке:
Хоббиты, Люди, Эльфы, Гномы, Орлы, Волшебники.

Второй параметр содержит количество представителей каждой расы, выступающей на стороне зла, в следующем порядке:
Орки, Люди, Варги, Гоблины, Урук-Хай, Тролли, Волшебники.

Все значения являются целыми неотрицательными числами. 
Результирующая сумма значений для каждой стороны не должна превышать предел 32-разрядного целого числа.

Выходные данные:
Возврат 
"Battle Result: Good triumphs over Evil", если победило добро, 
"Battle Result: Evil eradicates all trace of Good", если победило Зло, или 
"Battle Result: No victor on this battle field", если в итоге ничья.

*/