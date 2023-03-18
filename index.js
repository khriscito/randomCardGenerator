let suit=["♦","♥","♠","♣"];
let card=["A",1,2,3,4,5,6,7,8,9,10,"J","Q","K"];

const generateRandom=(array) => {
return array[Math.floor(Math.random()*array.length)]
}

let topSuit = document.getElementById("topSuit")
let iconTopSuit = document.createElement("p")
topSuit.appendChild(iconTopSuit);

let bottomSuit = document.getElementById("bottomSuit")
let iconBottomSuit = document.createElement("p")
bottomSuit.appendChild(iconBottomSuit);

let cardBody = document.getElementById("cardBody")
let iconCardBody = document.createElement("p")
cardBody.appendChild(iconCardBody);


const generateNewCard= ()=>
{
randomSuit = generateRandom(suit);
let color= ""
randomSuit=="♦"|| randomSuit=="♥" ? color="red":color="black";


iconTopSuit.innerHTML = randomSuit;
topSuit.style.color=color;


bottomSuit.style.transform="rotate(180deg)"
iconBottomSuit.innerHTML = randomSuit;
bottomSuit.style.color=color;

randomCardBody= generateRandom(card)

iconCardBody.innerHTML = randomCardBody;
cardBody.style.color=color;
}

generateNewCard();


const button = document.getElementById("button")
button.addEventListener("click",buttonEvent=()=>
{
generateNewCard()
})


const body = document.getElementById("fullCard")


const height = document.getElementById("height")
height.addEventListener("click",heightEvent=()=>
{
let inputValue = document.getElementById("heightValue").value;
body.style.height=`${inputValue}px`
})

const width = document.getElementById("width")
width.addEventListener("click",widthEvent=()=>
{
let inputValue = document.getElementById("widthValue").value;
body.style.width=`${inputValue}px`
})


setTimeout(function(){generateNewCard()},10000)






    


  
