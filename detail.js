function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
  document.getElementById('cart-count').textContent = getCart().length;
}

async function loadDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));

  const res = await fetch('anime.json');
  const animes = await res.json();
  const anime = animes.find(a => a.id === id);

  const container = document.getElementById('detail-container');

  container.innerHTML = `
    <h2>${anime.title}</h2>
    <img src="${anime.image}" />
    <h3>Temporadas</h3>
  `;

  anime.seasons.forEach(season => {
    const btn = document.createElement('button');
    btn.textContent = `${season.name} - ${season.price} CUP`;
    btn.onclick = () => addToCart(anime.title + " " + season.name, season.gb, season.price);
    container.appendChild(btn);
  });

  const fullBtn = document.createElement('button');
  fullBtn.textContent = `Completo - ${anime.full.price} CUP`;
  fullBtn.onclick = () => addToCart(anime.title + " Completo", anime.full.gb, anime.full.price);
  container.appendChild(fullBtn);
}

function addToCart(name, gb, price) {
  const cart = getCart();
  cart.push({ name, gb, price });
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

loadDetail();
updateCartCount();
