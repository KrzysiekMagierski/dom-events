console.log('I am playground.js!');

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded. Ready to go!");
  textarea();

});


const textarea = () => {
  const ta = document.querySelector('textarea');
  const ta2 = document.querySelector('textarea').nextElementSibling;
  ta.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      ta2.innerText = ta.value;
      ta.value = '';
      console.log(e.key)
    e.preventDefault() //blokuje domyślne działanie zeby nie było entera
  }
    
  });
}
