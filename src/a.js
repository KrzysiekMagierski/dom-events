console.log('I am a.js!');

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded. Ready to go!");
counter();



});

// A.1 - Stworz licznik ktory nalicza numery co 1 sekunde i wstawia liczbe to html

const counter = () => {
  const nextNumber = document.querySelector('#counter');
  let number = 0;
  const interval = setInterval(() => {
    number = number +1;
    nextNumber.innerText = number;
  }, 1000);
}


// A.2 - Stworz minutnik ktory posiada strukture 00:00 - inkrementuje sekundy, pokazuje ile uplynelo minut i sekund
// A.3 - Stworz funkcje ktora na wejsciu dostaje co ile minutnik ma sie inkrementowac - po wywolaniu

window.timer = (n) => {
  const minuteTimer = document.querySelector('#timer');
  const secondTimer = document.querySelector('#secondTimer');
  let minuteCount = 0
  let secondCount = 0
  const intervalSecond = setInterval(() => {
    secondCount = secondCount + 1;
    if (secondCount === 60) {
      secondCount = 0
    } 
    secondTimer.innerText = secondCount
  }, 1000/n)
  const intervalMinute = setInterval(() => {
    minuteCount = minuteCount + 1;
    minuteTimer.innerText ='  ' + minuteCount + ' : '
  }, 60000/n)


}


// ma dodac do strony kolejny minutnik ktory inkrementuje zgodnie z zadanym argumentem
// A.4 - Dodaj mozliwość ustawienia maksymalnej liczby minutnika po ktorej minutnik ma sie zatrzymac
// A.5 - Dodaj mozliwosc ustawienia czasu dzialania minutnika po ktorym minutnik stanie

// A.6 - Dodaj przycisk zatrzymujacy i uruchamiajacy minutnik