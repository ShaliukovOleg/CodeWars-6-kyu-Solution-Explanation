// Solution / Решение

function trafficLights(road, n) {
    const trafficStates = { 'R': 'RRRRRGGGGGO', 'G': 'GGGGGORRRRR', 'O': 'ORRRRRGGGGG' }; // Объект trafficStates содержит различные состояния для светофоров.
    const roadArr = road.split(''); // roadArr - массив, содержащий каждый символ строки road в виде отдельного элемента.
    const result = []; // result - массив, который будет содержать состояния дороги на каждом временном шаге.
    let carPosition = roadArr.indexOf('C'); // carPosition - индекс, где расположена машина ('C') на дороге.

    for (let line = 0; line <= n; line++) { // Внешний цикл, представляющий временные шаги (от 0 до n включительно).
        const step = line % 11; // Вычисляем текущий шаг в цикле с учетом периодичности (11 шагов).
        const stepInArray = []; // stepInArray - массив, который будет содержать состояние дороги на текущем временном шаге.

        for (let j = 0; j < roadArr.length; j++) { // Внутренний цикл, проходящий по каждому символу дороги.
            // В зависимости от типа символа выбираем соответствующее состояние для stepInArray.
            switch (roadArr[j]) {
                case 'C': // Если символ 'C', то добавляем 'C' в зависимости от текущего временного шага или точку.
                    stepInArray.push(line === 0 ? 'C' : '.');
                    break;
                case 'R': // Если символ 'R', то добавляем соответствующее состояние из trafficStates['R'].
                    stepInArray.push(trafficStates['R'][step]);
                    break;
                case 'O': // Если символ 'O', то добавляем соответствующее состояние из trafficStates['O'].
                    stepInArray.push(trafficStates['O'][step]);
                    break;
                case 'G': // Если символ 'G', то добавляем соответствующее состояние из trafficStates['G'].
                    stepInArray.push(trafficStates['G'][step]);
                    break;
                default: // Если символ не 'C', 'R', 'O' или 'G', то добавляем точку.
                    stepInArray.push('.');
            }
        }

        // Добавляем текущее состояние дороги на временном шаге в результат.
        result.push(stepInArray);
    }

    // Дополнительный цикл для обновления состояния дороги в зависимости от движения машины.
    for (let line = 1; line <= n; line++) {
        let next = result[line][carPosition + 1]; // Получаем следующий элемент, который будет затронут движением машины.
        if (next !== 'O' && next !== 'R') {  // Если следующий элемент не 'O' и не 'R', перемещаем машину вперед.
            result[line][carPosition + 1] = 'C';
            carPosition++;
        } else { // Если следующий элемент 'O' или 'R', машина остается на текущем месте.
            result[line][carPosition] = 'C';
        }
        if (carPosition + 1 >= roadArr.length) break; // Если машина достигла конца дороги, выходим из цикла.
    }

    return result.map(line => line.join('')); // Преобразуем каждую строку в массиве результатов в строку и возвращаем итоговый результат.
}

// Tests
console.log(trafficLights('C.R...G...', 10)); // red test
/*
[
  'C.R...G...', 
  '.CR...G...',
  '.CR...G...', 
  '.CR...G...',
  '.CR...G...', 
  '..C...O...',
  '..GC..R...', 
  '..G.C.R...',
  '..G..CR...', 
  '..G..CR...',
  '..O..CR...'
]
*/
console.log(trafficLights('C....G........R...', 10)); // orange test
/*
[
  'C....G........R...',
  '.C...G........R...',
  '..C..G........R...',
  '...C.G........R...',
  '....CG........R...',
  '....CO........G...',
  '....CR........G...',
  '....CR........G...',
  '....CR........G...',
  '....CR........G...',
  '....CR........O...'
]
*/
console.log(trafficLights('CG..G..R...G...G...', 10)); // green test
/*
[
  'CG..G..R...G...G...',
  '.C..G..R...G...G...',
  '.GC.G..R...G...G...',
  '.G.CG..R...G...G...',
  '.G..C..R...G...G...',
  '.O..OC.G...O...O...',
  '.R..R.CG...R...R...',
  '.R..R..C...R...R...',
  '.R..R..GC..R...R...',
  '.R..R..G.C.R...R...',
  '.R..R..O..CR...R...'
]
*/

/*

Overview
A character string represents a city road.

Cars travel on the road obeying the traffic lights..

Legend:

. = Road
C = Car
G = GREEN traffic light
O = ORANGE traffic light
R = RED traffic light
Something like this:

C...R............G......
Rules
Simulation
At each iteration:

the lights change, according to the traffic light rules... then
the car moves, obeying the car rules
Traffic Light Rules
Traffic lights change colour as follows:

GREEN for 5 time units... then
ORANGE for 1 time unit... then
RED for 5 time units....
... and repeat the cycle
Car Rules
Cars travel left to right on the road, moving 1 character position per time unit

Cars can move freely until they come to a traffic light. Then:

if the light is GREEN they can move forward (temporarily occupying the same cell as the light)

if the light is ORANGE then they must stop (if they have already entered the intersection they can continue through)

if the light is RED the car must stop until the light turns GREEN again

Kata Task
Given the initial state of the road, return the states for all iterations of the simiulation.

Input
road = the road array
n = how many time units to simulate (n >= 0)
Output
An array containing the road states at every iteration (including the initial state)
Note: If a car occupies the same position as a traffic light then show only the car
Notes
There is only one car
For the initial road state
the car is always at the first character position
traffic lights are either GREEN or RED, and are at the beginning of their countdown cycles
There are no reaction delays - when the lights change the car drivers will react immediately!
If the car goes off the end of the road it just disappears from view
There will always be some road between adjacent traffic lights

Example
Run simulation for 10 time units

Input

road = "C...R............G......"
n = 10
Result

[
  "C...R............G......", // 0 initial state as passed
  ".C..R............G......", // 1
  "..C.R............G......", // 2
  "...CR............G......", // 3
  "...CR............G......", // 4
  "....C............O......", // 5 show the car, not the light
  "....GC...........R......", // 6
  "....G.C..........R......", // 7
  "....G..C.........R......", // 8
  "....G...C........R......", // 9
  "....O....C.......R......"  // 10
]

*/

/*

Обзор
Строка символов представляет собой городскую дорогу.

Автомобили движутся по дороге, подчиняясь сигналам светофора.

Легенда:

. = Дорога
C = Автомобиль
G = ЗЕЛЕНЫЙ светофор
O = ОРАНЖЕВЫЙ светофор
R = КРАСНЫЙ светофор
Что-то вроде этого:

C...R............G......
Правила
Моделирование
На каждой итерации

светофор меняется, в соответствии с правилами светофора... затем
автомобиль движется, подчиняясь правилам движения автомобилей
Правила работы светофора
Светофоры меняют цвет следующим образом:

ЗЕЛЕНЫЙ на 5 единиц времени... затем
ОРАНЖЕВЫЙ на 1 единицу времени... затем
КРАСНЫЙ на 5 единиц времени....
... и повторить цикл
Правила движения автомобиля
Автомобили движутся по дороге слева направо, перемещаясь на 1 позицию символов за единицу времени.

Автомобили могут свободно двигаться до тех пор, пока не подъедут к светофору. Затем:

если свет ЗЕЛЕНЫЙ, то они могут двигаться вперед (временно занимая ту же клетку, что и светофор)

если свет ОРАНЖЕВЫЙ, то автомобиль должен остановиться (если он уже въехал на перекресток, то может продолжить движение)

если свет КРАСНЫЙ, то автомобиль должен остановиться, пока свет снова не станет ЗЕЛЕНЫМ.

Задача Ката
Учитывая начальное состояние дороги, вернуть состояния для всех итераций моделирования.

Входные данные
road = массив дорог
n = количество единиц времени для моделирования (n >= 0)
Выходные данные
Массив, содержащий состояния дороги на каждой итерации (включая начальное состояние).
Примечание: Если автомобиль занимает ту же позицию, что и светофор, то показывать только автомобиль.
Примечания
Существует только один автомобиль
Для начального состояния дороги
автомобиль всегда находится в позиции первого символа
Светофор либо ЗЕЛЕНЫЙ, либо КРАСНЫЙ, и находится в начале своего цикла обратного отсчета.
Задержки реакции не существует - при смене сигнала светофора водитель автомобиля реагирует немедленно!
Если автомобиль выезжает за пределы дороги, он просто исчезает из поля зрения
Между соседними светофорами всегда есть проезд.

Пример
Запуск моделирования на 10 единиц времени

Вход

road = "C...R............G......"
n = 10
Результат

[
  "C...R............G......", // 0 исходное состояние, как передано
  ".C..R............G......", // 1
  "...C.R............G......", // 2
  "...CR............G......", // 3
  "...CR............G......", // 4
  "....C............O......", // 5 показать автомобиль, а не свет
  "....GC...........R......", // 6
  "....G.C..........R......", // 7
  "....G..C.........R......", // 8
  "....G...C........R......", // 9
  "....O....C.......R......"  // 10
]

*/