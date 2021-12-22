const titleTest = document.querySelector('h1')
const btn = document.querySelector('.button')
console.log(btn)
btn.addEventListener('click', (e) => {
    e.preventDefault()
    titleTest.classList.toggle('blue')
});