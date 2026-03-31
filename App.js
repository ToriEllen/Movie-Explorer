const API_KEY = '984261d4ee1c09e0c2a016aeb196cb1f';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_BASE  = 'https://image.tmdb.org/t/p/w500';

async function searchMovies(query) {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${query}`;
    
    const response = await fetch(url);
    const data = await response.json();
    const movies = data.results

    showScreen('results');

    const container = document.getElementById('results-grid')
    container.innerHTML = '';

    movies.forEach(movie => {
        const card = document.createElement('div')

        card.innerHTML = `
        <img src="${IMG_BASE}${movie.poster_path}" alt="${movie.title}" width="150" />
        <h3>${movie.title}</h3>
        <p>Nota: ${movie.vote_average}</p>
        <p>${movie.overview}</p>`
        container.appendChild(card)
    });


   /* console.log(movies[0])
    console.log('Título', movies[0].title)
    console.log('Nota', movies[0].vote_average)
    console.log('Poster', IMG_BASE + movies[0].poster_path)
    
    console.log(data);*/
   
  }

   const btn = document.getElementById('search-btn')
    const input = document.getElementById('search-input')
  
    btn.addEventListener('click', () => {
      const query = input.value
      searchMovies(query)
    })
    
  searchMovies('');

  document.getElementById('back-btn').addEventListener('click', () => {
    showScreen('home');
});

  function showScreen(screenId) {
    document.getElementById('home').style.display = 'none';
    document.getElementById('results').style.display = 'none';
    document.getElementById('detail').style.display = 'none';

    document.getElementById(screenId).style.display = 'block';
}