const cardSrc = () => [
    {imgSrc : "media/bear.jpg", name : "bear"},
    {imgSrc : "media/devil.jpg", name : "devil"},
    {imgSrc : "media/fox.jpg", name : "fox"},
    {imgSrc : "media/gorilla.jpg", name : "gorilla"},
    {imgSrc : "media/jigjle.jpg", name : "jigjle"},
    {imgSrc : "media/penguin.jpg", name : "penguin"},
    {imgSrc : "media/ranaji.jpg", name : "ranaji"},
    {imgSrc : "media/superhero.jpg", name : "superhero"},
    {imgSrc : "media/bear.jpg", name : "bear"},
    {imgSrc : "media/devil.jpg", name : "devil"},
    {imgSrc : "media/fox.jpg", name : "fox"},
    {imgSrc : "media/gorilla.jpg", name : "gorilla"},
    {imgSrc : "media/jigjle.jpg", name : "jigjle"},
    {imgSrc : "media/penguin.jpg", name : "penguin"},
    {imgSrc : "media/ranaji.jpg", name : "ranaji"},
    {imgSrc : "media/superhero.jpg", name : "superhero"},
    {imgSrc : "media/bear.jpg", name : "bear"},
    {imgSrc : "media/devil.jpg", name : "devil"},
    {imgSrc : "media/fox.jpg", name : "fox"},
    {imgSrc : "media/gorilla.jpg", name : "gorilla"},
    {imgSrc : "media/jigjle.jpg", name : "jigjle"},
    {imgSrc : "media/penguin.jpg", name : "penguin"},
    {imgSrc : "media/ranaji.jpg", name : "ranaji"},
    {imgSrc : "media/superhero.jpg", name : "superhero"},
]


const container = document.querySelector('.container');
const newGame = document.querySelector('#newgame');
let matchedCards = 0;
let duringGame = new Audio("media/duringgame.mp3");
duringGame.play();
let gameEnd = new Audio("media/gameEnd.mp3");
let sound = document.querySelector(".sound");

newGame.addEventListener('click', () => {
    window.location.reload();
});

sound.addEventListener('click', () => {
    document.querySelector("#sound1").classList.toggle("hidden");
    document.querySelector("#sound2").classList.toggle("hidden");
    if( document.querySelector("#sound1").classList.contains("hidden")){
        duringGame.pause();
    }else{
        duringGame.play();
    }
})

const randomize = () => {
    const cardData = cardSrc();
    return cardData.sort(() => Math.random() - 0.5);
};

const cardGenerator = () => {
    const cardData = randomize();

    cardData.forEach((item) => {
        const card = document.createElement('div');
        const face = document.createElement('img');
        const back = document.createElement('div');

        card.className = 'card';
        face.className = 'face';
        back.className = 'back';

        face.src = item.imgSrc;
        back.img = "media/Flip.png"

        card.setAttribute('name', item.name);

        container.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);



        card.addEventListener('click', () => {
            card.classList.add('flipped');
            face.classList.add("display");
            checkCards();
        });
    });
};

const checkCards = () => {
      
    const flippedCards = document.querySelectorAll('.card.flipped');
    const faceDisplay = document.querySelectorAll('.face.display');
    const face = document.querySelectorAll('.face');
    
    if (flippedCards.length === 3) {
        const [firstCard, secondCard, thirdCard] = flippedCards;

        if (firstCard.getAttribute('name') === secondCard.getAttribute('name') && secondCard.getAttribute('name') === thirdCard.getAttribute('name')) {
            flippedCards.forEach((flippedCards) => flippedCards.style.opacity = '0');
            flippedCards.forEach((card) => card.classList.remove('flipped'));
            faceDisplay.forEach((face) => face.classList.remove('display'));
            matchedCards += 3;
            if(matchedCards === 24){
                console.log("You Win");
                document.querySelector(".popup").style.display = "flex";
                duringGame.pause();
            }
        } else {
            setTimeout(() => {
                flippedCards.forEach((card) => card.classList.remove('flipped'));
                faceDisplay.forEach((face) => face.classList.remove('display'));
            }, 1000);
        }
    }
};

cardGenerator();