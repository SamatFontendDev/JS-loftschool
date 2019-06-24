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

document.addEventListener('DOMContentLoaded', function() {
    renderTable(getCookie());
});

function getCookie() {
    var cookie = document.cookie;

    if (cookie) {
        return cookie.split('; ').reduce(function(prev, current) {
            var [name, value] = current.split('=');

            prev[name] = value;

            return prev;
        }, {});
    }

    return {};
}

function renderTable(cookie = {}) {
    listTable.innerHTML = '';

    for (var key in cookie) {
        if (cookie.hasOwnProperty(key)) {
            listTable.innerHTML += `<tr>
                                    <td>${key}</td>
                                    <td>${cookie[key]}</td>
                                    <td><button>delete</button></td>
                                  </tr>`;
        }
    }
}

filterNameInput.addEventListener('keyup', filter);

function filter() {
    var cookie = getCookie();

    
    for (var key in cookie) {
        var valueInput = filterNameInput.value.trim().toLowerCase();
        var name = key.toLowerCase();
        var value = cookie[key].toLowerCase();
  
        if (!name.includes(valueInput) && !value.includes(valueInput)) {
            delete cookie[key];
        }
    }
    
    
    renderTable(cookie);
}

addButton.addEventListener('click', function() {
    var name = addNameInput.value.trim();
    var value = addValueInput.value.trim();

    document.cookie = `${name}=${value}`;
    
    filter();
});

listTable.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        var tr = e.target.closest('tr');
        var name = tr.firstElementChild.textContent;
        var date = new Date(0);

        document.cookie = `${name}=; path=/; expires=" ${date.toUTCString()}`;
        tr.remove();
    }
});