fetch('anime.json')
  .then(response => response.json())
  .then(data => {
    const catalogo = document.getElementById('catalogo');
    catalogo.innerHTML = '';

    if (!data.A) {
      catalogo.innerHTML = '<p>No hay animes en la letra A</p>';
      return;
    }

    data.A.forEach(anime => {
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
  })
  .catch(error => {
    console.error(error);
    document.getElementById('catalogo').innerHTML =
      '<p>Error cargando el catálogo</p>';
  });
