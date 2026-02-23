var input = document.querySelector('input')
var btn = document.querySelector('button')
var msgBox = document.querySelector('.msgBox')

btn.addEventListener('click', () => {

    if(input.value == '')
    {
        msgBox.innerText = 'Please Enter a number to play game..';
        return;
    }
    
    var randomNum = Math.ceil(Math.random()*50+1);
    
    if(input.value == randomNum){
        msgBox.innerText = 'You won the game..';
        msgBox.style.color = 'green'
    }
    else{
        msgBox.innerText = 'Try again..';
        msgBox.style.color = 'red'
        console.log(randomNum);
        setTimeout(() => {
            msgBox.innerText = '';
        },3000)
    }
})