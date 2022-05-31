const URL = "https://api.thecatapi.com/v1/images/search";

const button = document.querySelector("#get_cat");

button.addEventListener("click", (e) => {
    e.preventDefault();
    reload();
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

const reload = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    const img = document.querySelector("img");
    img.src = data[0].url;;
}

reload();