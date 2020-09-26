
document.addEventListener('DOMContentLoaded', () => {
//Tabs
const tabs = document.querySelectorAll('.tabheader__item'),
      content = document.querySelectorAll('.tabcontent'),
      tabparent = document.querySelector('.tabheader__items');


      function hideTabContent () {
          content.forEach(item => {
              item.classList.remove('show', 'fade');
              item.classList.add('hide');
          });

          tabs.forEach (item => {
             item.classList.remove('tabheader__item_active');
          });
      }


      function showTabContent (i) {
          content[i].classList.remove('hide');
          content[i].classList.add('show', 'fade');
          tabs[i].classList.add('tabheader__item_active');
      }

      hideTabContent();
      showTabContent(0);
    
      tabparent.addEventListener('click', (e) => {
          if (e.target && e.target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (e.target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
          }

      });

//timer

const dealine = '2020-11-14';

function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(t / (1000*60*60*24)),
          hours = Math.floor((t / (1000*60*60) % 24)),
          minutes = Math.floor((t / (1000*60) % 60)),
          seconds = Math.floor((t/1000) % 60);

   return {
       'total': t,
       'days': days,
       'hours': hours,
       'minutes': minutes,
       'seconds': seconds
   };

}

function addZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);

    updateClock();
         
    function updateClock(){
        const t = getTimeRemaining(endtime);
        days.innerHTML = addZero(t.days);
        hours.innerHTML =  addZero(t.hours);
        minutes.innerHTML = addZero(t.minutes);
        seconds.innerHTML = addZero(t.seconds);
        
        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
};

setClock('.timer', dealine);
console.log(getTimeRemaining);

});