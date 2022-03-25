const checkbox = document.getElementById('dark-mode')
const body = document.getElementById('body')

checkbox.addEventListener('change', () => {
    body.classList.toggle('dark')
})
