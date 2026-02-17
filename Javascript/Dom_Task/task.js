//Task-1
// var p = document.querySelector('p')
// var btn = document.querySelector('button')
// var check = false;
// btn.addEventListener('click', () => {
    //     if(!check){
        //         p.innerText = "Welcome"
        //     }
        //     else{
            //         p.innerText = 'Hello'
            //     }
            //     check = !check;
            // })
            
//Task-2
// var btn = document.querySelector('button')
// var box = document.querySelector('#box')
// var count = 0;
// btn.addEventListener('click',() => {
//     count++;
//     if(count == 1){
//         box.style.backgroundColor = 'red'
//     } 
//     else if(count == 2){
//         box.style.backgroundColor = 'green'
//     }
//     else if(count == 3){
//         box.style.backgroundColor = 'blue'
//         count = 0;
//     }
// })
            
//Task-3
// var btn = document.querySelector('button')
// var box = document.querySelector('#box')
// var isVisible = true;
// btn.addEventListener('click',() => {
    
//     if(isVisible){
//         box.style.visibility = 'hidden'
//     }
//     else{
//         box.style.visibility = 'visible'
//     }
//     isVisible = !isVisible;
// })

// Task-4
// var leftBtn = document.querySelector('#left')
// var rightBtn = document.querySelector('#right')
// var box = document.querySelector('#box')

// let angle = 0;
// leftBtn.addEventListener('click', () => {
//     angle -= 45;
//     box.style.rotate = `${angle}deg`
//     console.log(angle);
    
// })
// rightBtn.addEventListener('click', () => {
//     angle += 45
//     box.style.rotate = `${angle}deg`
//     console.log(angle);
// })

//Task-5
// var inc = document.querySelector('#inc')
// var dec = document.querySelector('#dec')
// var box = document.querySelector('#box')

// let num = 0;
// inc.addEventListener('click', () => {
//     num++;
//     box.innerText = num;
// })
// dec.addEventListener('click', () => {
//     if(num > 0) num--;
//     box.innerText = num;
// })

//Task-6
// var body = document.body;
// var btn = document.querySelector('button');
// var isDark = true
// btn.addEventListener('click', () =>{
//     if(isDark){
//         body.style.backgroundColor = 'white'
//         body.style.color = 'black'
//         btn.innerText = 'Dark Theme'
//     }
//     else{
//         body.style.backgroundColor = 'black'
//         body.style.color = 'white'
//         btn.innerText = 'Light Theme'
//     }
//     isDark = !isDark;
// })

// Task-7
// var inp = document.getElementById('input')
// var p = document.getElementById('para')

// inp.addEventListener('input', () => {
//     p.textContent = inp.value;
//     console.log(inp.value);
    
// })

// Task-8
// var box = document.querySelector('#box')

// box.addEventListener('mouseenter', function(){
//     box.style.backgroundColor = 'purple'
// })
// box.addEventListener('mouseleave', function () {
//     box.style.backgroundColor = '#a4e3e0'
// })

// Task-9
// var p = document.querySelector('p')
// var btn = document.querySelector('button')

// btn.addEventListener('click', function () {
//     p.textContent = "Button is clicked"
//     console.log("This will only log once!");
//     // btn.disabled = true
// }, {once:true})

// Task 10
var red = document.querySelector('#red')
var yellow = document.querySelector('#yellow')
var green = document.querySelector('#green')

var stop = document.querySelector('#stop')
var ready = document.querySelector('#ready')
var go = document.querySelector('#go')

stop.addEventListener('click', function () {
    red.style.backgroundColor = 'red'
    green.style.backgroundColor = ''
    yellow.style.backgroundColor = ''
})

ready.addEventListener('click', function () {
    red.style.backgroundColor = ''
    yellow.style.backgroundColor = 'yellow'
    green.style.backgroundColor = ''
})

go.addEventListener('click', function () {
    red.style.backgroundColor = ''
    yellow.style.backgroundColor = ''
    green.style.backgroundColor = 'green'
    console.log('working');
    
})