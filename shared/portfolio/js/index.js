import CardCarousel from './CardCarousel.js'

const data = {
    1: {
        img: "assets/jpg/card1.jpg",
        h5: "Web Development",
        h3: "Mulazamah TV Website"
    },
    2: {
        img: "assets/jpg/card2.jpg",
        h5: "Frontend Development",
        h3: "Depa's Infection Website",
        p: "A landing page site project for an event held by Dental Dept. of Gajah Mada University.",
        a: "View Case Study"
    },
    3: {
        img: "assets/jpg/card3.jpg",
        h5: "UI/UX Design",
        h4: "Currinda V2 Dashboard"
    },
    4: {
        img: "assets/jpg/card4.jpg",
        h5: "World news",
        h4: "Another Hong Kong pro-democracy news outlet shuts down after a police raid and arrests"
    },
    5: {
        img: "assets/jpg/card5.jpg",
        h5: "kitchen",
        h4: "Robo-chef cooks up customized veggie burgers at Israeli restaurant"
    }
};
const button1 = document.getElementById("button-card-left");
const button2 = document.getElementById("button-card-right");
const card1 = document.querySelector("#card-1");
const card2 = document.querySelector("#card-2");
const card3 = document.querySelector("#card-3");

const cardCarousel = new CardCarousel(data, card1, card2, card3);

button1.addEventListener("click",function(){
    cardCarousel.prevPage();
});

button2.addEventListener("click",function(){
    cardCarousel.nextPage();
});
