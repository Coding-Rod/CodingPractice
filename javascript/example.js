// function sum(a,b,c,d) {
    //     return [a + b + c, d.toString()];
    // }
    
// console.log(sum(1,2,3,40));

// var numbers = [1,2,3,4,5];
// console.log(numbers);

// numbers.unshift(0);
// console.log(numbers);

// numbers.push(6);
// console.log(numbers);

// numbers.push(7);
// console.log(numbers);

// numbers = numbers.filter(x => x>1 && x<5)
// console.log(numbers);

// console.log(sum);
// var sum = numbers.reduce((sum, x) => sum + x);
// console.log(sum);

// sum = 0;
// console.log(sum);
// for (let index = 0; index < numbers.length; index++) {
//     sum += numbers[index];
// }
// console.log(sum);

// function greeting() {
//     return "Hello";
// }

// function farewell() {
//     return "Bye";
// }

// function callback(say) {

//     console.log(say);
// }

// setTimeout(() => callback(farewell()),1000);

// callback(greeting())

// #region info
let info = {
        "highlighted": {
                "title": "NFTs: Wetin Non Fungible Token blockchain like Crypto be, why some dey worth millions?",
                "summary": "NFTs na \"one of a kind\" thing for di digital world wey you fit buy or sell like any oda property but you no fit use hand hold am. Dem dey come in digital tokens wey be certificate of ownership for di digital assets. So e mean say na you own di rights to certain memes, tweets, digital artwork, etc even if dem still dey share am for social media. Look am like this, if you own di Mona Lisa painting no mean say pipo no fit buy di print of di . Or, e no mean say dem no fit take picture of di painting, but di original painting wey be one of a kind na di owner still get am. NFTs dey operate like crypto-currency on top say dem dey work with blockchain technology to keep record of who be di besin wey own dis NFT. You fit also add smart contract for NFT so when everr you sell am, for future, di creator (e.g, artist) go fit chop sometin inside.",
                "url": "https://www.bbc.com/pidgin/world-59055385",
                "img": "https://ichef.bbci.co.uk/news/800/cpsprodpb/12531/production/_121275057_nftwetinnonfungibletokenblockchainlikecryptobewhysomedeyworthmillions.jpg"
            },
            "article 1": {
                    "title": "Semifinales de 'League of Legends' de 2021: enfrentamientos, fechas, horarios y dónde ver",
                    "summary": "Este fin de semana se disputarán las semifinales del mundial de 'League of Lengeds'. O lo que es lo mismo, las dos series al mejor de 5 que decidirán quienes son los 2 mejores equipos del mundo. ¡Y tenemos muchas ganas de ver qué ocurre! Por un lado tendremos el enfrentamiento entre DAMWON KIA y T1, dos de los mejores equipos de corea y del mundo. Por la otra parte, Gen.G se batirá en duelo contra EDward Gaming en otra semifinal para la historia.",
                    "url": "https://www.marca.com/esports/league-of-legends/2021/10/29/617c0cc1e2704e0eae8b45b6.html",
                    "img": "https://phantom-marca.unidadeditorial.es/b9cf5dfe500d5dd5b0a0eaa45202fbc1/resize/660/f/webp/assets/multimedia/imagenes/2021/10/29/16355196538598.jpg",
                    "liked": false,
                    "likes": 12,
                    "date": "22-nov-2021"
                },
                "article 2": {
                        "title": "Video Friday: TurtleBot 4 Programacion backend ",
                        "summary": "Cognitive Pilot's autonomous tech is now being integrated into production Kirovets K-7M tractors, and they've got big plans: \"The third phase of the project envisages a fully self-driving tractor control mode without the need for human involvement. It includes group autonomous operation with a 'leader', the movement of a group of self-driving tractors on non-public roads, the autonomous movement of a robo-tractor paired with a combine harvester not equipped with an autonomous control system, and the use of an expanded set of farm implements with automated control and functionality to monitor their condition during operation.\"",
                        "url": "https://spectrum.ieee.org/video-friday-turtlebot-4",
                        "img": "https://spectrum.ieee.org/media-library/an-irobot-roomba-create-3-with-a-computing-core-and-sensors-sitting-on-a-desk-with-an-overlay-that-says-turtlebot-4.png?id=27724603&amp;width=1920&amp;height=1080",
                        "liked": false,
                        "likes": 32,
                        "date": "23-nov-2021"
                
                    },
                    "article 3": {
                            "title": "¡La robótica no es aburrida! Conoce a Aziel Medina, ingeniera que te da hacks de tecnología",
                            "summary": "Existen muchos tipos de ingenierías, algunas de ellas pueden confundirse, pero sin duda escuchar sobre ingeniería en robótica puede sorprendernos de inmediato. Aunque es una carrera que puede ser demandante, eso no implica que sea aburrida, algo de lo que se ha encargado de desmentir Aziel Medina. https://www.milenio.com/virales/aziel-medina-ingeniera-robotica-comparte-hacks-tiktok",
                            "url": "https://www.milenio.com/virales/aziel-medina-ingeniera-robotica-comparte-hacks-tiktok",
                            "img": "https://imagenes.milenio.com/F5x2rAiciaA2b4G7EsAWegcSHLY=/958x596/smart/https://www.milenio.com/uploads/media/2021/10/19/aziel-medina-demostrado-robotica-util.jpg",
                            "liked": false,
                            "likes": 99,
                            "date": "24-nov-2021"
                        }
                    };
// #endregion info
                    
// const myPromise = new Promise((resolve, reject) => {
//     let connection = false;

//     if (connection){
//         resolve(info); // Return 1
//     }else{
//         reject(null); // Return 2
//     }
// });

// myPromise
// .then((message) => console.log(message)) // Return 1
// .catch((message) => console.log(message)); // Return 2

function lower(value) {
    return new Promise((resolve, reject) => {
        var x = false;
        if (x) {
            resolve(value.toLowerCase());
        } else {
            reject(null);
        }
    });
}

async function message(x) {
    try {
        const message = await lower(x);
        console.log(message);
    } catch (error) {
        console.log("No se pudo joven, el error es: " + error)
    }
}
// console.log(lower("IVAN"));

message("Ivan")