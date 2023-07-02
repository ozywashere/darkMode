const checkbox = document.getElementById('checkbox')
const card = document.querySelector('.card')
console.log(card)
checkbox.addEventListener('change', () => {
  card.classList.toggle('dark-theme')
})
