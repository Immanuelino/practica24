document.addEventListener('DOMContentLoaded', () => {
    const showsList = document.getElementById('shows-list');
    const actorsList = document.getElementById('actors-list');
  
    async function fetchShows() {
      try {
        const response = await axios.get('https://api.tvmaze.com/shows');
        const shows = response.data.slice(0, 10); // Get the first 10 shows
        shows.forEach(show => {
          const showCard = document.createElement('div');
          showCard.classList.add('card');
          showCard.innerHTML = `
            <img src="${show.image ? show.image.medium : 'placeholder.jpg'}" alt="${show.name}">
            <h3>${show.name}</h3>
            <p>${show.summary}</p>
          `;
          showsList.appendChild(showCard);
        });
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    }
  
    async function fetchActors() {
      try {
        const response = await axios.get('https://api.tvmaze.com/people');
        const actors = response.data.slice(0, 10); // Get the first 10 actors
        actors.forEach(actor => {
          const actorCard = document.createElement('div');
          actorCard.classList.add('card');
          actorCard.innerHTML = `
            <img src="${actor.image ? actor.image.medium : 'placeholder.jpg'}" alt="${actor.name}">
            <h3>${actor.name}</h3>
          `;
          actorsList.appendChild(actorCard);
        });
      } catch (error) {
        console.error('Error fetching actors:', error);
      }
    }
  
    fetchShows();
    fetchActors();
  });
  