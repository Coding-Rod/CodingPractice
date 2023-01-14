"strict-mode";
//! Variables
const API_URL = "https://api.thecatapi.com/v1/";
const limit = "2";
const API_KEY = "cf5f08a7-26d8-42a4-9d4f-abbb4f0e87ba";

const button = document.querySelector("#get_cat");
const save_button_1 = document.querySelector("#btn-1");
const save_button_2 = document.querySelector("#btn-2");
const upload_button = document.querySelector("#upload-btn")

//! EventListeners
button.addEventListener("click", (e) => {
    e.preventDefault();
    for (let index = 0; index < 2; index++) {
        loadRandomCat("#img"+(index+1));
    }
})

upload_button.addEventListener("click", (e) => {
    e.preventDefault();
    uploadCatPhoto();
})

document.querySelector("body").addEventListener("click", (e) => {
    if (e.target === save_button_1 || e.target === save_button_2){
        e.preventDefault();
        saveFavoriteCat(document.querySelector("#img"+e.target.id[e.target.id.length - 1]).alt.split(" ").at(-1));
    }
})

//! Async functions
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

const loadRandomCat = async (element) => {
    const response = await fetch(
                                API_URL
                                +"images/search?"
                                +"limit="+limit
                                +"&api_key="+API_KEY);
    const data = await response.json();
    
    const img = document.querySelector(element);
    img.src = data[parseInt(element[element.length-1]-1)].url
    img.alt += " " + data[parseInt(element[element.length-1]-1)].id
}

const loadFavoriteCats = async () => {
    const response = await fetch(
        API_URL
        +"favourites",{
            method: "GET",
            headers: {
                'X-API-KEY': API_KEY,
            }
        }
    );
    const data = await response.json();
        
    const section_favorites = document.querySelector("#favoriteCats").querySelector("div");
    section_favorites.innerHTML = "";
    data.forEach((element,index) => {
        const article = document.createElement("article");
        
        let img = document.createElement("img");
        img.id="img_fav"+(index+1);
        img.src = element.image.url;
        img.alt = "Foto de gato "+element.image.id;
        img.width= "300";
        article.appendChild(img);
        
        let button = document.createElement("button");
        button.id="btn-"+(index+1);
        button.innerHTML = "Quitar de favoritos";
        button.onclick = () => deletefavoriteCat(element.id);
        article.appendChild(button);
        
        section_favorites.appendChild(article);
    });
    document.querySelector("#favoriteCats").innerHTML = "";
    document.querySelector("#favoriteCats").appendChild(section_favorites);

    if (response.status == 200){
        console.log(data);
    }else{
        document.querySelector("#error").innerHTML = "ERROR: "+response.status+data.message;
    }
}

const saveFavoriteCat = async (id) => {
    const response = await fetch(
        API_URL
        +"favourites?"
        ,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': API_KEY,
                },
            body: JSON.stringify({
                image_id: id
            })
        }
    );
    const data = await response.json();

    if (response.status == 200){
        console.log(data);
        loadFavoriteCats();
    }else{
        document.querySelector("#error").innerHTML = "ERROR: "+response.status+data.message;
    }
}

const deletefavoriteCat = async (id) => {
    const response = await fetch(
        API_URL
        +"favourites/"+id
        ,{
            method: "DELETE",
            headers:{
                'x-API-Key': API_KEY
            }
        }
    );
    const data = await response.json();
    if(response.status == 200){
        loadFavoriteCats();
    }else{
        document.querySelector("#error").innerHTML = "ERROR: "+response.status+data.message;
    }
}

const uploadCatPhoto = () => {
    const form = document.getElementById("uploadingForm");
    const formData = new FormData(form);

    console.log(formData.get("file"));

    const response = fetch(
        API_URL
        +"images/upload",
        {
            method: "POST",
            headers: {
                "X-API-Key": API_KEY,
            },
            body: formData
        }
    )
}

//! First functions calls
loadRandomCat("#img1");
loadRandomCat("#img2");
loadFavoriteCats();