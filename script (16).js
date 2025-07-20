//Создаем переменную, в которую положим кнопку Сменить тему 
let button1 = document.getElementById("theme");
let body = document.body; //Получаем доступ к body для изменения его стилей

//Создаем обработчик события для кнопки
//При нажатии на кнопку будет срабатывать функция, которая будет менять класс body на противоположный
button1.addEventListener("click", () => {
  body.classList.toggle('light');
  body.classList.toggle('dark');
});