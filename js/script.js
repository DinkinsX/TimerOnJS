//Timer
let deadline = '2020-08-01'; // до какого числа таймер должен работать
window.addEventListener('DOMContentLoaded', function() { //сработает после прогрузки древа html
    function getTimeRemaning(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()), //millisec отнимаем указанную дату от нынешней
        seconds = Math.floor((t / 1000 ) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor(t / 1000 / 60 / 60);
        //days = Math.floor(t / 1000 / 60 / 60 / 24);
        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {  // берем элементы со страницы по id
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() { // получает разницу во времени и записываем в вёрстку
            let t = getTimeRemaning(endtime);
            if (+t.hours < 10) {
                hours.textContent =  '0' + t.hours;
            }  else {
                hours.textContent = t.hours;
            }
            if (+t.minutes < 10) {
                minutes.textContent = '0' + t.minutes;
            } else {
                minutes.textContent = t.minutes;
            }   
            if (+t.seconds < 10) { 
                seconds.textContent = '0' + t.seconds;
            } else {
                seconds.textContent = t.seconds;
            }
            
            if (t.total <= 0) { // стоптаймер
                clearInterval(timeInterval);
            }

        }
    }
    setClock('timer', deadline);
});