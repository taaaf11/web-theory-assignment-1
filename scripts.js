import { Redis } from "@upstash/redis";


let button = document.getElementById('click-me-btn-btn');
console.log('lss')
button.addEventListener('click', () => {
  alert("Button was clicked!")
});