// Solution / Решение

function flip(d, a) {
    const direction = arr => arr[0].map((_, i) => arr.map(row => row[i])); // преобразование матрицы, где строки становятся столбцами
    if (d === 'R' || d === 'L') return a.map(elem => elem.sort((x, y) => d === 'R' ? x - y : y - x)); // обработка случаев лево - право
    if (d === 'U' || d === 'D') return direction(direction(a).map(elem => elem.sort((x, y) => d === 'D' ? x - y : y - x))); // обработка случаев верх - низ
}

// Solution 2 / Решение 2

function flip(d, a) {
    const direction = arr => arr[0].map((_, i) => arr.map(row => row[i]));
    switch (d) {
        case 'R': return a.map(v => v.sort((x, y) => x - y));
        case 'L': return a.map(v => v.sort((x, y) => y - x));
        case 'D': return direction(direction(a).map(v => v.sort((x, y) => x - y)));
        case 'U': return direction(direction(a).map(v => v.sort((x, y) => y - x)));
    }
}

// Tests

console.log(flip('R', [[1, 3, 2], [4, 5, 1], [6, 5, 3], [7, 2, 9]])); // [[1, 2, 3], [1, 4, 5], [3, 5, 6], [2, 7, 9]]
console.log(flip('L', [[1, 3, 2], [4, 5, 1], [6, 5, 3], [7, 2, 9]])); // [[3, 2, 1], [5, 4, 1], [6, 5, 3], [9, 7, 2]]
console.log(flip('U', [[1, 3, 2], [4, 5, 1], [6, 5, 3], [7, 2, 9]])); // [[7, 5, 9], [6, 5, 3], [4, 3, 2], [1, 2, 1]]
console.log(flip('D', [[1, 3, 2], [4, 5, 1], [6, 5, 3], [7, 2, 9]])); // [[1, 2, 1], [4, 3, 2], [6, 5, 3], [7, 5, 9]]

/*

This kata is a slightly harder version of Gravity Flip. 
It is recommended to do that first.

Bob is bored in his physics lessons yet again, and this time, 
he's brought a more complex gravity-changing box with him. 
It's 3D, with small cubes arranged in a matrix of n×m columns. 
It can change gravity to go in a certain direction, 
which can be 'L', 'R', 'D', and 'U' (left, right, down, and up).

Given the initial configuration of the cubes inside of the box as a 2D array, 
determine how the cubes are arranged after Bob switches the gravity.

See the sample tests for examples.

*/

/*

Это ката является немного более сложной версией Gravity Flip. 
Рекомендуется выполнять его первым.

Бобу снова скучно на уроках физики, и на этот раз 
он взял с собой более сложную коробку, изменяющую гравитацию. 
Она трехмерная, с маленькими кубиками, расположенными в матрице из n×m столбцов. 
Он может изменять гравитацию, чтобы двигаться в определенном направлении, 
которое может быть "L", "R", "D" и "U" (влево, вправо, вниз и вверх).

Учитывая начальную конфигурацию кубиков внутри коробки в виде двумерного массива, 
определите, как будут расположены кубики после того, как Боб переключит гравитацию.

Примеры смотрите в примерах тестов.

*/