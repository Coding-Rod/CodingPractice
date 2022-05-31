const getTweets = async () => {
    fetch("http://127.0.0.1:8000")
        .then(response => response.json())
            .then(data => {
                console.log(data);
                const container = document.querySelector(".row");
                container.innerHTML = "";
                data.forEach(element => {
                    console.log(element);
                    console.log(element.by);
                    const card = `
                    <div class="card col-md col-sm-12">
                        <div class="card-body">
                        <h5 class="card-title">${element.by.first_name} ${element.by.last_name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${element.updated_at.split("T")[0]}</h6>
                        <p class="card-text">${element.content}</p>
                        </div>
                    </div>
                    `;
                    container.innerHTML += card; 
                })
            });
}

getTweets();