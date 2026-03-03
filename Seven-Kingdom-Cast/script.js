import characters from './data.js'
const container = document.querySelector('.container');
const nav = document.querySelector('nav')
const body = document.body;

function openModal(character) {

    const modalWrapper = document.createElement('div');
    modalWrapper.classList.add('modal-wrapper');

    modalWrapper.innerHTML = `
    <div class="modal">
                <button class="close-btn">&times;</button>
                <div class="modal-body">
                    <div class="modal-left">
                        <img src="${character.image}" alt="">
                    </div>
                    <div class="modal-right">
                        <h1>${character.characterName} :&nbsp; <span>${character.realName}</span></h1>
                        <h3>${character.title}</h3>
                        <h4>${character.house}</h4>
                        <h5>Dialogue - ${character.dialogue}</h5>
                        <h5>Status - ${character.status}</h5>
                        <hr>
                        <p class="desc">${character.description}</p>
                        <p id="quote">${character.quote}</p>
                    </div>
                </div>
            </div>`

    document.body.append(modalWrapper);

    const closeBtn = document.querySelector('.close-btn')
    closeBtn.addEventListener('click', () => {
        modalWrapper.remove()
    })

    modalWrapper.addEventListener('click', (e) => {
        if(e.target === modalWrapper) modalWrapper.remove()
    })
}

characters.forEach((ch) => {
    const img = document.createElement('img')
    img.src = ch.image;

    img.addEventListener('click', () => {
        openModal(ch);
    })
    container.append(img)
})

body.addEventListener('wheel', (e) => {
    
    if(e.deltaY<0)
    {
        nav.style.display = "flex"
        
    }
    else{
        nav.style.display = "none"
        
    }
})