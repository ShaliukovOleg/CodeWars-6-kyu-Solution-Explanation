// Solution / Решение

function add(x, y) {
  while (y != 0) {
    // Вычисляем сумму без учета переносов
    let result = x ^ y;
    // Вычисляем переносы
    let val = (x & y) << 1;
    // Обновляем x и y для следующей итерации
    x = result;
    y = val;
  }
  return x;
}

// Short version

const add = (x, y) => y === 0 ? x : add(x ^ y, (x & y) << 1);

// Tests

console.log(add(5, 19)); // 4
console.log(add(23, 17)); // 40
console.log(add(-50,-176)); // -226

/*

Task
Given Two integers a , b , find The sum of them , 
BUT You are not allowed to use the operators + and -

Notes
The numbers (a,b) may be positive , negative values or zeros .

Returning value will be an integer .

Javascript: the Array reduce methods are disabled, along with eval, require, and module .
Input >> Output Examples

1- Add (5,19) ==> return (24) 
2- Add (-27,18) ==> return (-9)
3- Add (-14,-16) ==> return (-30)

*/

/*

Задача
Даны два целых числа a, b, найдите их сумму, 
Но вам не разрешается использовать операторы + и -.

Примечания
Числа (a,b) могут быть положительными, отрицательными или нулями.

Возвращаемое значение будет целым числом.

Javascript: методы уменьшения массива отключены, также как eval, require и module.
Примеры ввода >> вывода

1- Add (5,19) ==> return (24) 
2- Add (-27,18) ==> return (-9)
3- Add (-14,-16) ==> return (-30)

*/
