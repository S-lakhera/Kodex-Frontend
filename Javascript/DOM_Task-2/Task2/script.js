const body = document.querySelector('body')
const btn = document.querySelector('button')


function applyTheme(themename){
    body.classList.remove("light","dark")
    body.classList.add(themename)
    localStorage.setItem('theme',themename);
}

let savedTheme = localStorage.getItem('theme')
applyTheme(savedTheme)


btn.addEventListener('click', () => {
    const newTheme = body.classList.contains('dark')? 'light':'dark'
    applyTheme(newTheme)
})
