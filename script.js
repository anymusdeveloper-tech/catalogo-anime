async function loadAnimes() {
  const res = await fetch('anime.json');
  const animes = await res.json();
  const container = document.getElementById('anime-container');

  animes.forEach(anime => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${anime.image}" />
      <h3>${anime.title}</h3>
      <button onclick="addFullAnime(${anime.id})">Agregar Completo</button>
      <a href="detail.html?id=${anime.id}">Ver Detalles</a>
    `;
    container.appendChild(card);
  });
}

function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
  document.getElementById('cart-count').textContent = getCart().length;
}

async function addFullAnime(id) {
  const res = await fetch('anime.json');
  const animes = await res.json();
  const anime = animes.find(a => a.id === id);

  const cart = getCart();
  cart.push({
    name: anime.title + " Completo",
    gb: anime.full.gb,
    price: anime.full.price
  });

  saveCart(cart);
  updateCartCount();
}

function openCartModal() {
  renderCart();
  document.getElementById('cart-modal').style.display = "block";
}

function closeCartModal() {
  document.getElementById('cart-modal').style.display = "none";
}

function renderCart() {
  const cart = getCart();
  const list = document.getElementById('cart-items');
  const totalGb = document.getElementById('total-gb');
  const totalPrice = document.getElementById('total-price');

  list.innerHTML = "";
  let gb = 0;
  let price = 0;

  cart.forEach((item, i) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.name} 
      <button onclick="removeItem(${i})">X</button>`;
    list.appendChild(li);

    gb += item.gb;
    price += item.price;
  });

  totalGb.textContent = gb;
  totalPrice.textContent = price;
}

function removeItem(i) {
  const cart = getCart();
  cart.splice(i, 1);
  saveCart(cart);
  renderCart();
  updateCartCount();
}

document.getElementById('clear-cart-btn')?.addEventListener('click', () => {
  localStorage.removeItem('cart');
  renderCart();
  updateCartCount();
});

document.getElementById('buy-btn')?.addEventListener('click', () => {
  const cart = getCart();
  if (cart.length === 0) return;

  let message = "Hola quiero comprar:\n\n";
  cart.forEach(item => message += "• " + item.name + "\n");

  window.open(`https://wa.me/5350000000?text=${encodeURIComponent(message)}`);
});

loadAnimes();
updateCartCount();
