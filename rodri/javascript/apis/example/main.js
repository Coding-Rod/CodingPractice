const URL = "https://api.thecatapi.com/v1/images/search";
const limit = "3"
const API_KEY = "cf5f08a7-26d8-42a4-9d4f-abbb4f0e87ba"
const button = document.querySelector("#get_cat");

button.addEventListener("click", (e) => {
    e.preventDefault();
    for (let index = 0; index < 3; index++) {
        reload_cat("#img"+(index+1));
    }
})

// #region fetch
// const reload = () => {
//     fetch(URL)
//         .then(response => response.json())
//             .then(data => {
//                 const img = document.querySelector("img");
//                 // console.log(data[0].url);
//                 img.src = data[0].url;
//             })
// }
// #endregion fetch

const reload_cat = async (element) => {
    const response = await fetch(
                                URL+"?"
                                +"limit="+limit
                                +"&api_key="+API_KEY);
    const data = await response.json();
    const img = document.querySelector(element);
    // console.log(response.status);
    img.src = data[parseInt(element[element.length-1]-1)].url;
}

reload_cat("#img1");
reload_cat("#img2");
reload_cat("#img3");