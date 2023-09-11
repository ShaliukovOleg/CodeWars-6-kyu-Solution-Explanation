/*

We want to find the area of a set of buildings stacked close to each other.
A matrix (an array of arrays) gives us a description of the building from above, 
where each number represents the height expressed in cubes 1*1*1, the cubes are stacked adjacent to each other.

For example:

matrix = [[2,1],[2,0]] 

In position (0,0), there are 2 cubes stacked on each other
In position (0,1), there is only 1 cube
In position (1,0), there are 2 cubes stacked on each other
In position (1,1), there are 0 cubes stacked on each other.

So, the total covered area is 20.
The matrix will be of at least size 1*1 and square.

Note: The floor of the building counts as area as well.

*/

/*

Мы хотим найти площадь группы зданий, расположенных близко друг к другу.
Матрица (массив массивов) дает нам описание здания сверху, 
где каждое число представляет высоту в кубах 1*1*1, кубы расположены рядом друг с другом.

Например:

matrix = [[2,1],[2,0]]

В позиции (0,0) находятся 2 куба, расположенные друг на друге
В позиции (0,1) есть только 1 куб
В позиции (1,0) находятся 2 куба, расположенные друг на друге
В позиции (1,1) нет кубов, расположенных друг на друге.

Таким образом, общая площадь составляет 20.
Матрица будет иметь размер как минимум 1*1 и будет квадратной.

Примечание: пол здания также учитывается в площади.

*/

function surface_area(matrix) {
    let area = 0; // Переменная, в которую вернем конечное значение
    for (let i = 0; i < matrix.length; i++) { // Проверка значениц первого массива из двух [[i][j]]
        for (let j = 0; j < matrix.length; j++) { // Проверка значениц второго массива из двух [[i][j]]
            const height = matrix[i][j]; // Создаем переменную, в которую запишем двумерный массив
            const arrLeng = matrix.length; // Создаем переменную, в которую записываем длинну вводного массива
            if (height > 0) { // Условие при котором двумерный массив не должен быть равен нулю
                area += 2 // В теле цикла добавляем к каждому значению area + 2
                    +
                    (i !== 0 // Проверка первого условия
                        ? Math.max(0, height - matrix[i - 1][j])
                        : height)
                    +
                    (i !== arrLeng - 1 // Проверка второго условия
                        ? Math.max(0, height - matrix[i + 1][j])
                        : height)
                    +
                    (j !== 0 // Проверка третьего условия
                        ? Math.max(0, height - matrix[i][j - 1])
                        : height)
                    +
                    (j !== arrLeng - 1 // Проверка четвертого условия
                        ? Math.max(0, height - matrix[i][j + 1])
                        : height);
            }
        }
    }
    return area;
}

// Не совсем красивая форма записи, перепишу её через switch чуть позже добавлю обновление

console.log(surface_area([[2, 1], [2, 0]]));