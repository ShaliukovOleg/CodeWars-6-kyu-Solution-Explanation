/*

Task
John is a programmer. He treasures his time very much. He lives on the n floor of a building. Every morning he will go downstairs as quickly as possible to begin his great work today.

There are two ways he goes downstairs: walking or taking the elevator.

When John uses the elevator, he will go through the following steps: 

1. Waiting the elevator from m floor to n floor;
1a. Or take the stairs to m floor;
2. Waiting the elevator open the door and go in;
3. Waiting the elevator close the door;
4. Waiting the elevator down to 0 floor;
5. Waiting the elevator open the door and go out;
(the time of go in/go out the elevator will be ignored)

Given the following arguments:

n: An integer. The floor of John(0-based).
m: An integer. The floor of the elevator(0-based).
speeds: An array of integer. It contains four integer [a,b,c,d]
        a: The seconds required when the elevator rises or falls 1 floor
        b: The seconds required when the elevator open the door
        c: The seconds required when the elevator close the door
        d: The seconds required when John walks to n-1 or n+1 floor

Please help John to calculate the shortest time to go downstairs.

For n = 4, m = 5 and speeds = [1,2,3,10], the output should be 12.

John go downstairs by using the elevator:

1 + 2 + 3 + 4 + 2 = 12

For n = 0, m = 5 and speeds = [1,2,3,10], the output should be 0.

John is already at 0 floor, so the output is 0.

For n = 4, m = 3 and speeds = [2,3,4,5], the output should be 20.

John go downstairs by walking:

5 x 4 = 20

For n = 7, m = 6 and speeds = [3,1,1,4], the output should be 25.

John walks down 1 floor and takes the elevator from there.

1×4 + 1 + 1 + 6×3 + 1 = 25

Pure walk would have taken 7×4 = 28; pure elevator would have taken 1×3 + 1 + 1 + 7×3 + 1 = 27.

Note
These are Dutch floors. They are numbered 0-based. (0 is usually called "begane grond".)

*/

/*

Джон — программист. Он очень дорожит своим временем. 
Он живет на n этаже здания. Каждое утро он будет спускаться вниз как можно быстрее, 
чтобы начать свою большую работу сегодня.

Он спускается вниз двумя способами: пешком или на лифте.

Когда Джон воспользуется лифтом, он выполнит следующие шаги:

1. Ждем лифт с "m" этажа на "n" этаж;
1а. Или поднимитесь по лестнице на "m" этаж;
2. Ждем, пока двери лифта откроются и заходим в лифт;
3. Ждем, пока двери лифта не закроются;
4. Ждем спуск лифта до 0-го этажа;
5. Ждем, пока двери лифта откроются и выходим из лифта;
(время входа/выхода из лифта будет проигнорировано)

Приводятся следующие аргументы:

n: целое число. Этаж, где живет Джон (начальное значение 0).
m: целое число. Этаж, на котором находится лифт(начальное значение 0).
speeds: массив целых чисел. Он содержит четыре целых числа [a,b,c,d]
        a: Количество секунд, необходимое для подъема или спуска лифта на 1 этаж.
        b: Количество секунд, необходимое, для открытия дверей лифта
        c: Количество секунд, необходимое, для закрытия дверей лифта
        d: Количество секунд, необходимое для того, чтобы Джон поднялся на "n-1" или "n+1" этаж.

Задача состоит в том, чтобы расчитать кратчайшее время, которое требуется Джону, чтобы спуститься вниз.

ПРИМЕР: 

Для n = 4, m = 5 и speeds(скорости) = [1,2,3,10] === 12
Джон спустился вниз на лифте:
1 + 2 + 3 + 4 + 2 = 12

Для n = 0, n = 0, m = 5 и speeds(скорости) = [1,2,3,10] вывод должен быть 0.
Джон уже находится на 0 этаже, поэтому получаем 0 0.

Для n = 4, m = 3 n = 4, m = 3 and speeds = [2,3,4,5] выход должен быть 20.
Джон спустился вниз пешком:
5 x 4 = 20

Для n = 7, m = 6 and speeds = [3,1,1,4] выход должен быть 25.
Джон спускается на 1 этаж и оттуда поднимается на лифте.
1×4 + 1 + 1 + 6×3 + 1 = 25

Чистая прогулка заняла бы 7×4 = 28; чистый лифт занял бы 1×3 + 1 + 1 + 1×3 + 1 + 1 + 7×3 + 1 = 27.

На заметку:
В задаче приведены голладские пол. Т.е. нумерация начинается с нуля (пол равен уровню земли, используется периодически при строительстве зданий) 

*/

function shorterestTime(n, m, [a, b, c, d]) {
    // Функция имеет 6 аргументов, описание каждого я приводил выше
    if (n !== 0) { // Проверяем, чтобы этаж, где живет Джон не был равен нулю
        return Math.min( // Используем метод Math.min, который возвращает минимальное значение из всех аргументов
            n * d, // Время необходимое для того чтобы спуститься или поднятся на n-этаж (Первый аргумент)

            // Методы Math.abs возвращают абсолютное значение числа
            Math.abs(n - m) * a + b * 2 + c + n * a, // Время необходимое для того, чтобы спуститься или поднятся на n-этаж на лифте (Второй аргумент)
            Math.abs(n - m) * d + b * 2 + c + m * a // Время необходимое, чтобы подняться используя и лифт и ступеньки (Третий аргумент)
        )
    }
    return 0; // Если "n" равно нулю вернет ноль со всего выражения
}

console.log(shorterestTime(4,5,[1,2,3,10])); // 12