// ====== UTILIDADES ======

function getCart(){
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart){
  localStorage.setItem("cart", JSON.stringify(cart));
}

// ====== CONTADOR ======

function updateCartCount(){
  const countEl = document.getElementById("cartCount");
  if(!countEl) return;

  const cart = getCart();
  countEl.innerText = cart.length;
}

// ====== MODAL ======

function openCart(){
  const modal = document.getElementById("cartModal");
  if(modal){
    modal.style.display = "flex";
    renderCart();
  }
}

function closeCart(){
  const modal = document.getElementById("cartModal");
  if(modal) modal.style.display = "none";
}

// ====== RENDER ======

function renderCart(){
  const cart = getCart();

  const container = document.getElementById("cartItems");
  const totalGbEl = document.getElementById("totalGb");
  const totalPriceEl = document.getElementById("totalPrice");

  if(!container) return;

  container.innerHTML = "";

  let totalGb = 0;
  let totalPrice = 0;

  if(cart.length === 0){
    container.innerHTML = "<p>El carrito está vacío.</p>";
  }

  cart.forEach((item,index)=>{
    totalGb += item.gb;
    totalPrice += item.price;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span>${item.name} - ${item.gb}GB - ${item.price} CUP</span>
      <button onclick="removeFromCart(${index})">❌</button>
    `;
    container.appendChild(div);
  });

  if(totalGbEl) totalGbEl.textContent = totalGb.toFixed(2);
  if(totalPriceEl) totalPriceEl.textContent = totalPrice;
}

// ====== AGREGAR ======

function addToCart(item, btn=null){
  const cart = getCart();

  if(cart.some(i => i.name === item.name)) return;

  cart.push(item);
  saveCart(cart);

  updateCartCount();
  syncButtons();

  if(btn){
    btn.textContent = "Agregado";
    btn.disabled = true;
    btn.classList.add("added");
  }
}

// ====== ELIMINAR ======

function removeFromCart(index){
  const cart = getCart();

  cart.splice(index,1);
  saveCart(cart);

  updateCartCount();
  renderCart();
  syncButtons();
}

// ====== VACIAR ======

function clearCart(){
  saveCart([]);

  updateCartCount();
  renderCart();
  syncButtons();
}

// ====== WHATSAPP ======

function sendToWhatsApp(){
  const cart = getCart();
  if(cart.length === 0) return;

  let msg = "Hola, quiero comprar:%0A%0A";
  let totalGb = 0;
  let totalPrice = 0;

  cart.forEach(item=>{
    msg += `• ${item.name} - ${item.gb}GB - ${item.price} CUP%0A`;
    totalGb += item.gb;
    totalPrice += item.price;
  });

  msg += `%0A📦 Total GB: ${totalGb.toFixed(2)}GB%0A💰 Total: ${totalPrice} CUP`;

  window.open(`https://wa.me/5351711962?text=${msg}`,"_blank");
}

// ====== SINCRONIZAR BOTONES ======

function syncButtons(){
  const cart = getCart();

  document.querySelectorAll("[data-name]").forEach(btn=>{
    const name = btn.getAttribute("data-name");

    if(cart.some(i => i.name === name)){
      btn.textContent = "Agregado";
      btn.disabled = true;
      btn.classList.add("added");
    }else{
      btn.textContent = "Agregar al carrito";
      btn.disabled = false;
      btn.classList.remove("added");
    }
  });
}

// ====== EVENTOS ======

document.addEventListener("DOMContentLoaded",()=>{
  updateCartCount();
  syncButtons();
});

const cartBtn = document.getElementById("cartBtn");
if(cartBtn) cartBtn.addEventListener("click", openCart);

const whatsappBtn = document.getElementById("whatsappBtn");
if(whatsappBtn) whatsappBtn.textContent = "📲 Comprar";
if(whatsappBtn) whatsappBtn.addEventListener("click", sendToWhatsApp);
