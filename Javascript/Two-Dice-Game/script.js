var body = document.body;

var imgContainer = document.createElement('div')
imgContainer.setAttribute('id','imgContainer')

var resultBox = document.createElement('div')
resultBox.setAttribute('id','resultBox')

var msgBox = document.createElement('div')
msgBox.setAttribute('id','msgBox')

body.append(resultBox,imgContainer,msgBox)

let results = [null, null]

resultBox.innerHTML = `<h2>Dice 1: -</h2><h2>Dice 2: -</h2>`;
msgBox.textContent = "Click the dice to play!";
function createDice(index){
    var dice = document.createElement('img')
    dice.setAttribute('src','./images/dice.png')
    // dice.style.width = '200px'
    // console.log(dice);
    

    dice.addEventListener('click', function () {
        
        if(results[index] !== null) return;
        
        results[index] = Math.floor(Math.random()*6+1);

        resultBox.children[index].textContent = `Dice ${index + 1}: - ${results[index]}`;
        

        checkGameStatus();
    })
    return dice;
}

let die1 = createDice(0)
let die2 = createDice(1)
imgContainer.append(die1,die2);



function checkGameStatus(){
    if(results[0] !== null && results[1] !== null){
        if(results[0] == results[1]){
            msgBox.textContent = '🎉 You Won!'
            msgBox.style.color = 'green'
            msgBox.style.borderColor = 'green'
            imgContainer.style.borderColor = 'green'
        }
        else{
            msgBox.textContent = '❌ You Lost. Try again!'
            msgBox.style.color = 'red'
            msgBox.style.borderColor = 'red'
            imgContainer.style.borderColor = 'red'
        }
    }
}

var resetBtn = document.createElement('button')
resetBtn.textContent = 'Reset Game'
resetBtn.addEventListener('click', function(){
    results = [null, null];
    resultBox.innerHTML = `<h2>Dice 1: -</h2><h2>Dice 2: -</h2>`;
    msgBox.textContent = "Click the dice to play!";
    msgBox.style.color = 'white'
    msgBox.style.borderColor = 'white'
    imgContainer.style.borderColor = 'white'
})
console.log(resetBtn);
body.append(resetBtn)
