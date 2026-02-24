const nav = document.querySelector('nav')
let audio = new Audio()
let buttons = document.querySelectorAll('.buttons div')

document.addEventListener('keydown',(e)=> {
    // console.log(e.code);
    if(e.code === 'Space')
    {
        audio.src = './sounds/51.mp3'
        audio.play()
    }
    
    if(e.code === 'KeyA')
    {
        audio.src = './sounds/52.mp3'
        audio.play();
    }
    if(e.code === 'KeyS')
    {
        audio.src = './sounds/53.mp3'
        audio.play();
    }
    if(e.code === 'KeyD')
    {
        audio.src = './sounds/54.mp3'
        audio.play();
    }
    if(e.code === 'KeyF')
    {
        audio.src = './sounds/55.mp3'
        audio.play();
    }

    if(e.code === 'KeyG')
    {
        audio.src = './sounds/56.mp3'
        audio.play();
    }
    if(e.code === 'KeyH')
    {
        audio.src = './sounds/57.mp3'
        audio.play();
    }
    if(e.code === 'KeyJ')
    {
        audio.src = './sounds/58.mp3'
        audio.play();
    }
    if(e.code === 'KeyK' )
    {
        audio.src = './sounds/59.mp3'
        audio.play();
    }
    if(e.code === 'KeyL')
    {
        audio.src = './sounds/60.mp3'
        audio.play();
    }
    
})



buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        audio.src = './sounds/fahhhhh.mp3'
        audio.play()
    })
    
} )

let navbar = true;
document.addEventListener('wheel', (e) => {
    console.log(e.deltaY);
    
    if(e.deltaY > 0)
    {
        nav.style.transform = 'translateY(-100%)'
        navbar = false;
    }
    if(navbar == false && e.deltaY< -1){
        nav.style.transform = 'translateY(0%)'
        navbar = true;
    }
})