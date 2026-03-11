const header = document.querySelector('header');
const body = document.body;
const dots = document.querySelectorAll('.dot')
const planImage = document.querySelector('#plan-image')
const rDots = document.querySelectorAll('.r-dot')
const img2 = document.querySelector('#img-2')
const menuBar = document.querySelector('.menu-icon')
const vNav = document.querySelector('.v-nav')
const sourcesHeader = document.getElementById('sources-header');
const sourcesContent = document.getElementById('sources-content');
const sourcesIcon = document.getElementById('sources-icon');
const modal = document.getElementById('join-modal')
const modalBox = modal.querySelector('div')
const closeModal = document.getElementById('close-modal')
const ctaBtns = document.querySelectorAll('#join-btn')
const navItems = document.querySelectorAll('.group.relative')


navItems.forEach((item) => {
    let menu = item.querySelector('.mega-menu')
    let icon = item.querySelector('i')

    item.addEventListener('mouseenter', () => {
        menu.classList.remove('opacity-0','invisible','translate-y-2')
        
        if(icon) icon.style.transform = 'rotate(180deg)'
    })
    item.addEventListener('mouseleave', () => {
        menu.classList.add('opacity-0','invisible','translate-y-2')
    })
})


const openModal = () => {
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100')
}

const hideModal = () => {
    modal.classList.remove('opacity-100')
    modal.classList.add('opacity-0', 'pointer-events-none')
}

ctaBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        openModal()
    })
})

closeModal.addEventListener('click', hideModal)
modal.addEventListener('click', (e) => {
    if(e.target === modal)
    {
        hideModal()
    }
})

sourcesHeader.addEventListener('click', () =>{
    const isOpen = sourcesContent.style.maxHeight !== '0px' && sourcesContent.style.maxHeight !== ''

    if(isOpen){
        sourcesContent.style.maxHeight = '0px'
        sourcesIcon.style.transform = 'rotate(0deg)'
    }else{
        sourcesContent.style.maxHeight = sourcesContent.scrollHeight + 'px'
        sourcesIcon.style.transform = 'rotate(180deg)'
    }
})

menuBar.addEventListener('click', () => {
    
    vNav.classList.toggle('hidden')
    vNav.classList.toggle('flex')

    menuBar.classList.toggle('ri-menu-fill');
    menuBar.classList.toggle('ri-close-line');
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
    if(e.deltaY>-0 && window.pageYOffset>340)
    {
        header.style.transform = "translateY(-130%)"
    }
    else{
        header.style.transform = "translateY(0)"
    }
        
});