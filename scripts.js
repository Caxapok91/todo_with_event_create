const listUl = document.getElementById("listWork");
const themeButton = document.getElementById("themeButton");
const inputTask = document.getElementById('input-text');
let dataWork = {};
let nextTaskId = 1;


//Переделайте проект, добавив туда поле ввода input
//при добавлении задачи все элементы должны создаваться через специальные методы
//в коде недолжно быть вставки в innerHtml
//Так же реализовать события клик по кнопки удаления и выполнения задачи
//Добавить событие нажатия клавиши enter во время ввода задачи, для ее добавления в список

//обьяснить как получить элемент который еще не создан

function showdatawork() {
    //listUl.innerHTML = "";
    for (const key in dataWork) {

        ///тут уже ничего не надо
        console.log('asda')
    }






}
inputTask.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addWork();
    }
});


function addWork() {
    let numberWork = nextTaskId;
    nextTaskId++;
    //const work = prompt("Введите задачу и нажмите ок");
    work = inputTask.value
    //добавим проверку на пустоту
    if (work == "") {
        alert('Введите задачу')
        return
    }
    //const buttonDel = `<button onclick='delelem(${numberWork})'> Удалить</button>`;
    //const buttonDon = `<button onclick='complElem(${numberWork})'> Выполнено</button>`;
    //et htmlelem=`<li id="${numberWork}">`+numberWork+"<span>"+work+"</span>"+ buttonDel+buttonDon+"</li>";
    //console.log(dataWork);



    dataWork[numberWork] = work;

    const liElem = document.createElement("li");
    liElem.setAttribute("id",numberWork)

    const buttonDel = document.createElement("button");
    buttonDel.textContent = "Удалить";
    //удаление
    buttonDel.addEventListener('click',function(){
    //delete dataWork[key];
        delete dataWork[numberWork];
        listUl.removeChild(liElem)
        console.log(dataWork)

    })
    //Выполнение
    const buttonDon = document.createElement("button");
    buttonDon.textContent = "Выполнено";
    buttonDon.addEventListener('click',function(){
        complElem(numberWork)
        console.log(dataWork)
    })

    const spanElem = document.createElement("span");
    spanElem.textContent = numberWork + " " + dataWork[numberWork];

    liElem.appendChild(spanElem);
    liElem.appendChild(buttonDel);
    liElem.appendChild(buttonDon);
    listUl.appendChild(liElem);
    //showdatawork();
    console.log(dataWork)
}


//уже не используется
function delelem(numberWork) {
    delete dataWork[numberWork];

    showdatawork();
}

function complElem(numberWork) {
    document.getElementById(numberWork).children[0].classList.toggle("done")
}



function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    themeButton.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
}




// Функция для показа только выполненных задач
function showDoneTasks() {
    const allTasks = document.querySelectorAll('li');
    allTasks.forEach(task => {
        if (task.querySelector('.done')) {
            task.style.display = 'flex';
        } else {
            task.style.display = 'none';
        }
    });
}


function showAllTasks() {
    const allTasks = document.querySelectorAll('li');
    allTasks.forEach(task => {
        task.style.display = 'flex';
    });
}

