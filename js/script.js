// Search functionality to filter products
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', () => {
  const filter = searchInput.value.toLowerCase();
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(card => {
    const productName = card.textContent.toLowerCase();
    if (productName.includes(filter)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});
// Add to Cart function
function addToCart(productName, price) {
    alert(`${productName} has been added to your cart for $${price.toFixed(2)}.`);
    // Add additional code for cart handling as needed
  }
  function filterByCategory(category) {
    // Fetch products from database or API, or filter products on the page
    alert(`Showing products for category: ${category}`);
    
    // Example filtering logic (Assuming you have product elements with data-category attribute)
    const products = document.querySelectorAll('.product-item'); // Adjust selector as needed
    products.forEach(product => {
      if (product.getAttribute('data-category') === category || category === 'all') {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  }
  
  