/* ДЗ 1 - Функции */

/*
 Задание 1:
 1.1: Добавьте к функции параметр с любым именем
 1.2: Функция должна возвращать аргумент, переданный ей в качестве параметра
 Пример:
   returnFirstArgument(10) вернет 10
   returnFirstArgument('привет') вернет `привет`
 Другими словами: функция должна возвращать в неизменном виде то, что поступает ей на вход
 */
function returnFirstArgument(a) {
    return a;
}

/*
Задание 2:
2.1: Функция должна возвращать сумму переданных аргументов
Пример:
 sumWithDefaults(10, 20) вернет 30
 sumWithDefaults(2, 4) вернет 6
2.1 *: Значение по умолчанию для второго аргумента должно быть равно 100
Пример:
 sumWithDefaults(10) вернет 110
*/
function sumWithDefaults(a, b) {
    if (b === undefined) {
        b = 100;
    }
    
    return a + b;
}
/*
Задание 3:
Функция должна принимать другую функцию и возвращать результат вызова этой функции
Пример:
 returnFnResult(() => 'привет') вернет 'привет'
*/
function returnFnResult(fn) {
    var result = fn();

    return result;
}

/*
Задание 4:
Функция должна принимать число и возвращать новую функцию (F)
При вызове функции F, переданное ранее число должно быть увеличено на единицу и возвращено из F
Пример:
 var f = returnCounter(10);
 console.log(f()); // выведет 11
 console.log(f()); // выведет 12
 console.log(f()); // выведет 13
*/
function returnCounter(number) {
    if (number === undefined) {
        number = 0;
    }
    
    return function() {
        number ++;

        return number;
    }
}
/*
Задание 5 *:
Функция должна возвращать все переданные ей аргументы в виде массива
Количество переданных аргументов заранее неизвестно
Пример:
 returnArgumentsArray(1, 2, 3) вернет [1, 2, 3]
*/
function returnArgumentsArray() {
    var newArr = [];
    
    for (var i = 0; i < arguments.length; i++) {
        newArr.push(arguments[i])
    }
    
    return newArr;
}

/*
Задание 6 *:
Функция должна принимать другую функцию (F) и некоторое количество дополнительных аргументов
Функция должна привязать переданные аргументы к функции F и вернуть получившуюся функцию
Пример:
 function sum(a, b) {
   return a + b;
 }
 var newSum = bindFunction(sum, 2, 4);
 console.log(newSum()) выведет 6
*/
// function fnSum(a, b){
//     return a + b;
// }
function bindFunction() {
}

export {
    returnFirstArgument,
    sumWithDefaults,
    returnArgumentsArray,
    returnFnResult,
    returnCounter,
    bindFunction
}