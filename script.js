// Hero WhatsApp link
const heroBtn = document.getElementById('heroOrderBtn');
heroBtn.href = `https://wa.me/${whatsappNumber}?text=Hello,%20I%20would%20like%20to%20place%20an%20order.`;

// Populate featured products
const productGrid = document.getElementById('productGrid');
featuredProducts.forEach(product => {
  const div = document.createElement('div');
  div.className = 'product';
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.size} - UGX ${product.price.toLocaleString()}</p>
    <a href="https://wa.me/${whatsappNumber}?text=I%20want%20to%20order%20${encodeURIComponent(product.name)}%20${product.size}%20-%20UGX%20${product.price}" target="_blank" class="btn">Order Now</a>
  `;
  productGrid.appendChild(div);
});

// Populate seasonal offers
const offerGrid = document.getElementById('offerGrid');
seasonalOffers.forEach(offer => {
  const div = document.createElement('div');
  div.className = 'offer';
  div.innerHTML = `
    <img src="${offer.image}" alt="${offer.name}">
    <h3>${offer.name}</h3>
    <p>${offer.description}</p>
    <p>UGX ${offer.price.toLocaleString()}</p>
    <a href="https://wa.me/${whatsappNumber}?text=I%20want%20to%20order%20${encodeURIComponent(offer.name)}%20-%20UGX%20${offer.price}" target="_blank" class="btn">Order Now</a>
  `;
  offerGrid.appendChild(div);
});