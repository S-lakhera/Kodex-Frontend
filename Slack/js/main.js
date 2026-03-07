const header = document.querySelector('header');
const body = document.body;
const dots = document.querySelectorAll('.dot')
const planImage = document.querySelector('#plan-image')
const rDots = document.querySelectorAll('.r-dot')
const img2 = document.querySelector('#img-2')
const menuBar = document.querySelector('.menu-icon')
const vNav = document.querySelector('.v-nav')

menuBar.addEventListener('click', () => {
    
    if(vNav.style.display === "none")
    {
        
        vNav.style.display = "flex"
    }
    else{
        vNav.style.display = "none"

    }
})

dots[0].classList.add("active")
dots.forEach((dot) => {
    dot.addEventListener('click', () => {
        dots.forEach((d) => {d.classList.remove("active")})

        let newSrc = dot.getAttribute('data-img')
        planImage.style.opacity = '0'

        setTimeout(() => {
            planImage.setAttribute('src',newSrc)
            planImage.style.opacity = '1'
        }, 200);

        dot.classList.add("active")
    })
})

rDots[0].classList.add("selected")
rDots.forEach((dot) => {
    dot.addEventListener('click', () => {
        rDots.forEach((d) => {d.classList.remove("selected")})

        let newSrc = dot.getAttribute('data-img')
        img2.style.opacity = '0'

        setTimeout(() => {
            img2.setAttribute('src',newSrc)
            img2.style.opacity = '1'
        }, 200);

        dot.classList.add("selected")
    })
})


body.addEventListener('wheel', (e) => {
    if(e.deltaY>0)
    {
        header.style.transform = "translateY(-100%)"
    }
    else{
        header.style.transform = "translateY(0)"
    }
        
});