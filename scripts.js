let button = document.getElementById('click-me-btn-btn');
console.log('lss')
button.addEventListener('click', async () => {
  alert("Button was clicked!")
  
  let response = await fetch("https://web-theory-assignment-1-chi.vercel.app/api/click");

  console.log(response.visits)
});