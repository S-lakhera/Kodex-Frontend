const spotlight = document.querySelector('.layer')
const para = document.querySelector('p')

document.addEventListener('mousemove', (event) => {
    let x = event.clientX
    let y = event.clientY

    spotlight.style.background = `
    radial-gradient(
    circle at ${x}px ${y}px,
    transparent 100px,
    rgba(0,0,0,0.4) 200px,
    rgba(0, 0, 0, 0.96) 300px
  )`
}) 
