  const API_KEY = '984261d4ee1c09e0c2a016aeb196cb1f';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const IMG_BASE  = 'https://image.tmdb.org/t/p/w500';

  let lastScreen = 'home';

  function showScreen(screenId) {
      document.getElementById('home').style.display = 'none';
      document.getElementById('results').style.display = 'none';
      document.getElementById('detail').style.display = 'none';
      document.getElementById(screenId).style.display = 'block';
  }

  function goHome() {
        lastScreen = 'home';
      showScreen('home');
  }

  function focusSearch() {
      goHome();
      setTimeout(() => document.getElementById('search-input').focus(), 100);
  }

 
  function createCard(movie, container) {
      const card = document.createElement('div');
      card.className = 'movie-card';

      card.innerHTML = `
          ${movie.poster_path
              ? `<img src="${IMG_BASE}${movie.poster_path}" alt="${movie.title}" />`
              : `<div class="no-poster">🎬</div>`
          }
          <div class="movie-card-body">
              <p class="movie-card-title">${movie.title}</p>
              <div class="movie-card-meta">
                  <span>${movie.release_date?.split('-')[0] ?? '—'}</span>
                  <span class="movie-card-rating">★ ${movie.vote_average.toFixed(1)}</span>
              </div>
          </div>
      `;

     
      card.addEventListener('click', () => {
            lastScreen = document.getElementById('results').style.display === 'block'
                ? 'results'
                : 'home';

            getMovieDetail(movie.id);
        });
      container.appendChild(card);
  }

  
  async function getPopularMovies() {
      const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR`;
      const response = await fetch(url);
      const data = await response.json();

      const container = document.getElementById('popular-grid');
      container.innerHTML = '';
      data.results.forEach(movie => createCard(movie, container));
  }

  
  async function searchMovies(query) {
      if (!query.trim()) return;
      const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${query}`;
      const response = await fetch(url);
      const data = await response.json();

      showScreen('results');
      lastScreen = 'results';

      document.getElementById('results-title').textContent = `Resultados para "${query}"`;

      const container = document.getElementById('results-grid');
      container.innerHTML = '';
      data.results.forEach(movie => createCard(movie, container));
  }

 
  async function getMovieDetail(movieId) {
      const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`;
      const response = await fetch(url);
      const data = await response.json();

      showScreen('detail');

      const container = document.getElementById('detail-content');
      container.innerHTML = `
          <div class="detail-banner-wrap">
              <img class="detail-banner" src="https://image.tmdb.org/t/p/w1280${data.backdrop_path}" alt="${data.title}" />
              <div class="detail-banner-overlay"></div>
          </div>
          <div class="detail-body">
              <button id="detail-back-btn">← Voltar</button>
              <h2 class="detail-title">${data.title}</h2>
              <div class="detail-meta">
                  <span class="detail-badge rating">★ ${data.vote_average.toFixed(1)}</span>
                  <span class="detail-badge">${data.release_date?.split('-')[0] ?? '—'}</span>
                  <span class="detail-badge">${data.runtime ? data.runtime + ' min' : '—'}</span>
              </div>
              <p class="detail-overview">${data.overview || 'Sinopse não disponível.'}</p>
          </div>
      `;

      document.getElementById('detail-back-btn').addEventListener('click', () => {
          showScreen(lastScreen);
      });
  }

  
  document.getElementById('search-btn').addEventListener('click', () => {
      const query = document.getElementById('search-input').value;

      saveSearch(query);
      searchMovies(query);
      
  });

  document.getElementById('back-btn').addEventListener('click', () => {
      showScreen('home');
  });

  getPopularMovies();

  function saveSearch(query) {
    if (!query) return;

    let history = JSON.parse(localStorage.getItem('searchHistory')) || [];

    if (!history.includes(query)) {
        history.push(query);
    }

    if (history.length > 10) {
        history.shift(); 
    }

    localStorage.setItem('searchHistory', JSON.stringify(history));
}