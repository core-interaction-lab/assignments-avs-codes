const fetchMovies = async () => {
    const response = await fetch('https://api.airtable.com/v0/appPdXh1WlpDOMQ2i/Table%201?api_key=keyx3iNHEhOlUODAL').then(data => data.json())

    console.log(response);

    const moviesContainer =  document.getElementById('movies-container');

    response.records.forEach(movie => {
        console.log(movie.fields);
        const articleEl = document.createElement('article');
        const titleEl = document.createElement('div');
        const genreEl = document.createElement('div');
        const imdbUrlEl = document.createElement('a');
        const releaseDateEl = document.createElement('div');

        titleEl.innerHTML = movie.fields.Title;
        releaseDateEl.innerHTML = movie.fields.release_date;
        genreEl.innerHTML = movie.fields.Genre;
        imdbUrlEl.innerHTML = "IMDB Page";
        imdbUrlEl.classList.add('imdb-link');

        articleEl.append(titleEl, releaseDateEl, genreEl, imdbUrlEl, posterl);

        imdbUrlEl.href = movie.fields.imdb_url;

        moviesContainer.appendChild(articleEl);

    });

    const linkTags = document.querySelectorAll('.imdb-link');
    linkTags.forEach((link) => {
        const linkColor = link.style.color;

        link.id = `my-link-${index}`;

        link.addEventListener('mouseover', evt => {
            link.style.color = 'cornflowerblue';            
        });

        link.addEventListener('mouseout', evt => {
            link.style.color = linkColor;
        });
    });

};

fetchMovies();