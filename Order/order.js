// Burger data
const burgers = [
    { name: 'Classic Burger', price: 8.99 },
    { name: 'Double Cheeseburger', price: 10.99 },
    // Add more burger options as needed
  ];
  
  // DOM elements
  const burgerItems = document.querySelector('.burger-items');
  const orderSummary = document.querySelector('.order-summary');
  const placeOrderBtn = document.getElementById('place-order-btn');
  
  // Display burger options
  burgers.forEach(burger => {
    const burgerItem = document.createElement('div');
    burgerItem.classList.add('burger-item');
    burgerItem.innerHTML = `
      <h3>${burger.name}</h3>
      <p>Price: $${burger.price.toFixed(2)}</p>
      <button class="btn add-to-order" data-name="${burger.name}" data-price="${burger.price}">Add to Order</button>
    `;
    burgerItems.appendChild(burgerItem);
  });
  
  // Order functionality
  const orderedItems = [];
  
  burgerItems.addEventListener('click', event => {
    if (event.target.classList.contains('add-to-order')) {
      const name = event.target.getAttribute('data-name');
      const price = parseFloat(event.target.getAttribute('data-price'));
      orderedItems.push({ name, price });
      updateOrderSummary();
    }
  });
  
  function updateOrderSummary() {
    orderSummary.innerHTML = '';
    let total = 0;
    
    orderedItems.forEach(item => {
      orderSummary.innerHTML += `
        <p>${item.name} - $${item.price.toFixed(2)}</p>
      `;
      total += item.price;
    });
    
    orderSummary.innerHTML += `<p>Total: $${total.toFixed(2)}</p>`;
  }
  
  placeOrderBtn.addEventListener('click', () => {
    alert('Order placed successfully!');
    orderedItems.length = 0;
    updateOrderSummary();
  });
  