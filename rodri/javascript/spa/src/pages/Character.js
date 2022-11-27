const Character = () => {
    const view = `
        <div class="Characters-inner">
            <article class="Characters-card">
                <img src="image" alt="name" />
                <h2>Name</h2>
            </article>
            <article class="Characters-card">
                <h3>Episodes: <span>episode</span></h3>
                <h3>Status: <span>status</span></h3>
                <h3>Species: <span>species</span></h3>
                <h3>Gender: <span>gender</span></h3>
                <h3>Origin: <span>origin</span></h3>
                <h3>Last location: <span>location</span></h3>
            </article>
        </div>
    `;
    return view;
};

export default Character;