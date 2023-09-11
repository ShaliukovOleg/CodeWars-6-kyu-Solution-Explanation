/*

Given an object with an arbitrary number of properties, any number of which may be objects or arrays, 
replace all values which are strictly equal to the string: 
"dynamic" with a given string occurring anywhere in that object or a child object or array.

Your solution should be recursive.
Your solution should be "in place" meaning it return the original object, not a copy.
Your solution should also include some type safety. 
If a value that isn't an object or array is passed as the first argument, 
it should just return whatever was passed in.

*/

/*

Дан объект с произвольным количеством свойств, любое количество которых может быть объектами или массивами, 
заменить все значения, строго равные строке: 
"dynamic" на заданную строку, встречающуюся в любом месте этого объекта или дочернего объекта или массива. 

Решение должно быть рекурсивным.
Решение должно быть "in place", то есть возвращать исходный объект, а не его копию.
Решение также должно включать безопасность типов. 
Если в качестве первого аргумента передается значение, не являющееся объектом или массивом, 
то решение должно просто возвращать то, что было передано.

*/

function solution(data, replace) {
    if (typeof data !== 'object' || data === null) return data;
    // Не является ли значение объектом или пустым значением

    if (Array.isArray(data)) {
        // Проверяем каждый элемент "массива" на наличие необходимого для нас значения и заменяем его
        return data.map(item => (item === 'dynamic' ? replace : solution(item, replace)));
    } else {
        // Перебираем все свойства "объекта" на наличие необходимого для нас значения и заменяем его
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                data[key] = (data[key] === "dynamic") ? replace : solution(data[key], replace);
            }
        }
    }
    return data;
}

const data = {
    foo: "dynamic",
    bar: {
        baz: ["dynamic"]
    },
    dynamic: true
};
const result = solution(data, "static");
console.log(result);