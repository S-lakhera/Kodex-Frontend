var teams = [
    {
        name: 'CSK',
        fullName: 'Chennai Super Kings',
        captain: 'Ruturaj Gaikwad',
        colors: ['#FFFF00', '#1B4E9B'], // Yellow and Blue
        titles: [2010, 2011, 2018, 2021, 2023],
        homeGround: 'M. A. Chidambaram Stadium',
        logo: './images/csk.png'
    },
    {
        name: 'MI',
        fullName: 'Mumbai Indians',
        captain: 'Hardik Pandya',
        colors: ['#004BA0', '#D4AF37'], // Blue and Gold
        titles: [2013, 2015, 2017, 2019, 2020],
        homeGround: 'Wankhede Stadium',
        logo: './images/mi.png'
    },
    {
        name: 'RCB',
        fullName: 'Royal Challengers Bengaluru',
        captain: 'Rajat Patidar',
        colors: ['#EC1C24','#716b68'], // Black and Red
        titles: [2025],
        homeGround: 'M. Chinnaswamy Stadium',
        logo: './images/rcb.png'
    },
    {
        name: 'KKR',
        fullName: 'Kolkata Knight Riders',
        captain: 'Ajinkya Rahane',
        colors: ['#3A225D', '#B38235'], // Purple and Gold
        titles: [2012, 2014, 2024],
        homeGround: 'Eden Gardens',
        logo: './images/kkr.png'
    },
    {
        name: 'SRH',
        fullName: 'Sunrisers Hyderabad',
        captain: 'Pat Cummins',
        colors: ['#FF822E', 'white'], // Orange and Black
        titles: [2016],
        homeGround: 'Rajiv Gandhi Intl. Stadium',
        logo: './images/srh.png'
    },
    {
        name: 'RR',
        fullName: 'Rajasthan Royals',
        captain: 'Riyan Parag',
        colors: ['#EA1B85', '#254AA5'], // Pink and Blue
        titles: [2008],
        homeGround: 'Sawai Mansingh Stadium',
        logo: './images/rr.png'
    },
    {
        name: 'GT',
        fullName: 'Gujarat Titans',
        captain: 'Shubman Gill',
        colors: ['#1B2133', '#B4975A'], // Navy Blue and Gold
        titles: [2022],
        homeGround: 'Narendra Modi Stadium',
        logo: './images/gt.png'
    },
    {
        name: 'LSG',
        fullName: 'Lucknow Super Giants',
        captain: 'Rishabh Pant',
        colors: ['#A4E3FC', '#F9CD05'], // Sky Blue and Yellow
        titles: [],
        homeGround: 'Ekana Stadium',
        logo: './images/lsg.png'
    },
    {
        name: 'DC',
        fullName: 'Delhi Capitals',
        captain: 'Axar Patel',
        colors: ['#00008B', '#FF0000'], // Blue and Red
        titles: [],
        homeGround: 'Arun Jaitley Stadium',
        logo: './images/dc.png'
    },
    {
        name: 'PBKS',
        fullName: 'Punjab Kings',
        captain: 'Shreyas Iyer',
        colors: ['#ED1B24', '#D4AF37'], // Red and Gold
        titles: [],
        homeGround: 'Maharaja Yadavindra Singh Stadium',
        logo: './images/pbks.png'
    }
];

var card = document.querySelector('.card')
var logo = document.querySelector('#logo')
var details = document.querySelector('#details')
var btn = document.querySelector('button')
var img = document.querySelector('img')


btn.addEventListener('click', function() {
    card.style.visibility = 'visible'
    let random = Math.floor(Math.random()*teams.length)
    let winner = teams[random]

    img.setAttribute('src',winner.logo)

    document.querySelector('#teamname').textContent = winner.fullName
    document.querySelector('#captain').textContent = winner.captain
    document.querySelector('#ground').textContent = winner.homeGround
    document.querySelector('#titles').textContent = winner.titles
    
    document.querySelector('#teamname').style.color = winner.colors[1]
    card.style.borderColor = winner.colors[0];
    card.style.boxShadow = `0 0 20px ${winner.colors[0]}`
})