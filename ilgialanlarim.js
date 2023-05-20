async function search() {
    const input = document.getElementById('searchInput').value;
    const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${encodeURIComponent(input)}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '06de2339f5msh0cdd6e33c764113p131cfajsn38990755d4be',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const data = await response.json();
  
      const moviesList = document.getElementById('moviesList');
      moviesList.innerHTML = '';
  
      if (data && data.d && data.d.length > 0) {
        const movies = data.d;
        let count = 0;
  
        movies.forEach(movie => {
          if (movie.l.toLowerCase().startsWith(input.toLowerCase()) && count < 6) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
              <img src="${movie.i ? movie.i.imageUrl : ''}" alt="${movie.l ? movie.l : ''}">
              <h2>${movie.l ? movie.l : ''}</h2>
            `;
            moviesList.appendChild(listItem);
            count++;
          }
        });
  
        if (count === 0) {
          const error = document.createElement('div');
          error.textContent = 'Sonuç bulunamadı.';
          moviesList.appendChild(error);
        }
      } else {
        const error = document.createElement('div');
        error.textContent = 'Sonuç bulunamadı.';
        moviesList.appendChild(error);
      }
    } catch (error) {
      console.error(error);
    }
  }
  