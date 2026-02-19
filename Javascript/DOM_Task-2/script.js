var body = document.body;

var imgContainer = document.createElement('div')
imgContainer.setAttribute('id','imgContainer')
var img = document.createElement('img')
img.setAttribute('src','./images/dice.png')
var img2 = img.cloneNode(true);
imgContainer.append(img)
imgContainer.append(img2)

body.append(imgContainer);

var resultBox = document.createElement('div')
resultBox.setAttribute('id','resultBox')
body.append(resultBox);

var result1;
img.addEventListener('click', function() {
    result1 = Math.floor(Math.random()*6+1);
    var h2 = document.createElement('h2')
    h2.textContent = `Dice 1 : ${result1}`
    resultBox.append(h2)

},{once:true})

var result2;
img2.addEventListener('click', function() {
    result2 = Math.floor(Math.random()*6+1);
    var h2 = document.createElement('h2')
    h2.textContent = `Dice 1 : ${result2}`
    resultBox.append(h2)

    if(result1 == result2)
    {
        console.log('You won this game');
    }
    else{
        console.log('You lost the game, Try again..');
        
    }
},{once:true})
