// DOM Elements
const loginBtn = document.getElementById("loginBtn");
const cartBtn = document.getElementById("cartBtn");
const cartCount = document.getElementById("cartCount");
const categoriesContainer = document.getElementById("categoriesContainer");
const offersContainer = document.getElementById("offersContainer");

// Sample Data
const categories = [
  { name: "Medicines", icon: "💊" },
  { name: "Lab Tests", icon: "🩺" },
  { name: "Healthcare", icon: "🏥" },
  { name: "Health Blogs", icon: "📚" },
  { name: "Plus", icon: "⭐" },
  { name: "Offers", icon: "🎁" },
];

const offers = [
  { title: "Vitamin D3 60K", price: 199, originalPrice: 249, image: "offer1.jpg" },
  { title: "Multivitamin Tablets", price: 299, originalPrice: 399, image: "offer2.jpg" },
  { title: "Blood Test Package", price: 599, originalPrice: 999, image: "offer3.jpg" },
  { title: "Diabetes Care", price: 449, originalPrice: 599, image: "offer4.jpg" },
  { title: "Immunity Boosters", price: 349, originalPrice: 499, image: "offer5.jpg" },
];

// Cart State
let cartItems = 0;

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderOffers();
  setupEventListeners();
});

// Render Categories
function renderCategories() {
  categoriesContainer.innerHTML = categories
    .map(
      (category) => `
        <div class="category-card">
            <div class="category-icon">${category.icon}</div>
            <p>${category.name}</p>
        </div>
    `
    )
    .join("");
}

// Render Offers
function renderOffers() {
  offersContainer.innerHTML = offers
    .map(
      (offer) => `
        <div class="offer-card">
            <img src="assets/images/${offer.image}" alt="${offer.title}">
            <div class="offer-details">
                <h3 class="offer-title">${offer.title}</h3>
                <p class="offer-price">₹${offer.price} <small>₹${offer.originalPrice}</small></p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        </div>
    `
    )
    .join("");
}

// Setup Event Listeners
function setupEventListeners() {
  // Login Button
  loginBtn.addEventListener("click", () => {
    alert("Login/Signup functionality would go here");
  });

  // Cart Button
  cartBtn.addEventListener("click", () => {
    alert("Cart view functionality would go here");
  });

  // Add to Cart buttons (delegated event)
  offersContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
      cartItems++;
      updateCartCount();
      showAddedToCartMessage();
    }
  });
}

// Update Cart Count
function updateCartCount() {
  cartCount.textContent = cartItems;
}

// Show Added to Cart Message
function showAddedToCartMessage() {
  const message = document.createElement("div");
  message.className = "cart-message";
  message.textContent = "Item added to cart!";
  document.body.appendChild(message);

  setTimeout(() => {
    message.classList.add("show");
  }, 10);

  setTimeout(() => {
    message.classList.remove("show");
    setTimeout(() => {
      document.body.removeChild(message);
    }, 300);
  }, 2000);
}

// You could add more functionality like:
// - Search functionality
// - Category filtering
// - Product details modal
// - User authentication flow
