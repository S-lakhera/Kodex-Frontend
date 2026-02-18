var btn = document.querySelector('button')
var box = document.getElementById('container')

const imgList = [
    './images/Bheem.png',
    './images/Chhutki.png',
    './images/Dholu.png',
    './images/Jaggu.png',
    './images/Kaliya.png'
]

btn.addEventListener('click', function () {
    var img = document.createElement('img')
    img.setAttribute('src',imgList[Math.floor(Math.random()*imgList.length)])
    img.style.position = 'absolute'
    img.style.left = Math.random()*78+'%'
    img.style.top = Math.random()*74+'%'
    box.append(img);
})