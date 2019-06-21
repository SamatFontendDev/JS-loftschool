/*
 ДЗ 7 - Создать редактор cookie с возможностью фильтрации

 7.1: На странице должна быть таблица со списком имеющихся cookie. Таблица должна иметь следующие столбцы:
   - имя
   - значение
   - удалить (при нажатии на кнопку, выбранная cookie удаляется из браузера и таблицы)

 7.2: На странице должна быть форма для добавления новой cookie. Форма должна содержать следующие поля:
   - имя
   - значение
   - добавить (при нажатии на кнопку, в браузер и таблицу добавляется новая cookie с указанным именем и значением)

 Если добавляется cookie с именем уже существующей cookie, то ее значение в браузере и таблице должно быть обновлено

 7.3: На странице должно быть текстовое поле для фильтрации cookie
 В таблице должны быть только те cookie, в имени или значении которых, хотя бы частично, есть введенное значение
 Если в поле фильтра пусто, то должны выводиться все доступные cookie
 Если добавляемая cookie не соответсвует фильтру, то она должна быть добавлена только в браузер, но не в таблицу
 Если добавляется cookie, с именем уже существующей cookie и ее новое значение не соответствует фильтру,
 то ее значение должно быть обновлено в браузере, а из таблицы cookie должна быть удалена

 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
const homeworkContainer = document.querySelector('#homework-container');
// текстовое поле для фильтрации cookie
const filterNameInput = homeworkContainer.querySelector('#filter-name-input');
// текстовое поле с именем cookie
const addNameInput = homeworkContainer.querySelector('#add-name-input');
// текстовое поле со значением cookie
const addValueInput = homeworkContainer.querySelector('#add-value-input');
// кнопка "добавить cookie"
const addButton = homeworkContainer.querySelector('#add-button');
// таблица со списком cookie
const listTable = homeworkContainer.querySelector('#list-table tbody');

function renderTable(cookies = {}) {
  cookies = document.cookie.split('; ').reduce(function(prev, current) {
    var [name, value] = current.split('=');

    prev[name] = value;
    
    return prev;
  }, {});

  listTable.innerHTML = '';

  for (var key in cookies) {
    if (cookies.hasOwnProperty(key)) {
      listTable.innerHTML += `<tr><td>${key}</td><td>${cookies[key]}</td><td><button class="delete">удалить</button></td></tr>`;
    }
  }
};

document.addEventListener("DOMContentLoaded", renderTable());

filterNameInput.addEventListener('keyup', function() {
   
});

addButton.addEventListener('click', () => {
  document.cookie = `${addNameInput.value}=${addValueInput.value}`;
  renderTable();
});

const delete = homeworkContainer.querySelector('.delete');

delete.addEventListener('click', function(){
    var cookieName =  this.parentNode.previousElementSibling.previousElementSibling.textContent;
    
    var cookieVlaue =  this.parentNode.previousElementSibling.textContent;

    var cookie = `${cookieName}=${cookieVlaue}`;

    var cookiesArr = document.cookie.split('; ');

    for (var i = 0; i < cookiesArr.length; i++) {
      if (cookiesArr[i] === cookie) {

      }
    }
});