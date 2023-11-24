let cart = [];
let cartVisible = false;

function addToCart(product, price) {
  cart.push({ product, price });
  if (cartVisible) showCart();
}

function showCart() {
  const cartList = document.getElementById('cart');
  const totalElement = document.getElementById('total');
  cartList.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.product} - R$ ${item.price}`;
    cartList.appendChild(li);
    total += item.price;
  });

  totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function toggleCart() {
  const cartContainer = document.getElementById('cartContainer');
  cartVisible = !cartVisible;
  if (cartVisible) {
    showCart();
    cartContainer.style.display = 'block';
  } else {
    cartContainer.style.display = 'none';
  }
}

function checkout() {
  if (cart.length > 0) {
    alert('Compra realizada com sucesso!');
    cart = [];
    showCart();
    toggleCart();
  } else {
    alert('Adicione produtos ao carrinho antes de finalizar a compra.');
  }
}
