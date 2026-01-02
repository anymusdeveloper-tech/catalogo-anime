fetch('anime.json')
  .then(res => res.json())
  .then(data => {
    const catalogo = document.getElementById('catalogo');
    const animesA = data["A"];

    animesA.forEach(anime => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <img src="${anime.imagen}" alt="${anime.nombre}">
        <div class="info">
          <h3>${anime.nombre}</h3>
          <p>${anime.anio}</p>
        </div>
      `;

      catalogo.appendChild(card);
    });
  });
