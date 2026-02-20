var body = document.body;
var card = document.createElement('div')
card.setAttribute('id','card');
var btn = document.createElement('button')
btn.textContent = 'Generate Card'

btn.addEventListener('click', function(){
    card.style.height = Math.floor(Math.random()*400+10)+'px';
    card.style.width = Math.floor(Math.random()*400+10)+'px';

    let color = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
    
    card.style.backgroundColor = color;
})

body.append(btn,card)