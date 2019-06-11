/* ДЗ 6 - Асинхронность и работа с сетью */

/*
 Задание 1:

 Функция должна возвращать Promise, который должен быть разрешен через указанное количество секунду

 Пример:
   delayPromise(3) // вернет promise, который будет разрешен через 3 секунды
 */
function delayPromise(seconds) {
    var ms = seconds * 1000;

    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

/*
 Задание 2:

 2.1: Функция должна вернуть Promise, который должен быть разрешен с массивом городов в качестве значения

 Массив городов можно получить отправив асинхронный запрос по адресу
 https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json

 2.2: Элементы полученного массива должны быть отсортированы по имени города

 Пример:
   loadAndSortTowns().then(towns => console.log(towns)) // должна вывести в консоль отсортированный массив городов
 */
function loadAndSortTowns() {
  return new Promise ((resolve, rejected) => {
      var xhr = new XMLHttpRequest();

      xhr.open('GET', 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json')

      xhr.send();

      var towns = [];
      var townsArr;

      xhr.addEventListener('load', () => {
          townsArr = JSON.parse(xhr.responseText);
          for (var i = 0; i < townsArr.length; i++) {
              towns.push(townsArr[i].name) 
          }
          towns.sort();

          resolve(towns);
      });
  });
}

export {
    delayPromise,
    loadAndSortTowns
};
