const messages = [
    "oscar",
    "ana",
    "Ivan",
    "Jose",
    "Pablo",
    "Rodri",
    "Franco"
];


const randomMSG = () =>{
    const message = messages[Math.floor(Math.random()*messages.length)];
    console.log(message);
}

module.exports = {randomMSG};