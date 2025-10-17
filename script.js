// Etsy RSS Feed URL (your shop)
const rssURL = "https://www.etsy.com/shop/MrM3DPrints/rss";

// The container where we’ll show products
const productGrid = document.getElementById("product-grid");

// Function to fetch and parse RSS feed
async function loadEtsyProducts() {
    try {
        // Use a public RSS-to-JSON API
        const apiURL = `https://api.rss2json.com/v1/api.json?rss_url=${rssURL}`;
        const response = await fetch(apiURL);
        const data = await response.json();

        // Clear previous message
        productGrid.innerHTML = "";

        // Loop through items
        data.items.slice(0, 6).forEach((item) => {
            const card = document.createElement("div");
            card.className = "product-card";
            card.innerHTML = `
        <img src="images\IMG_8622 2.jpg" alt="${item.title}">
        <h3>${item.title}</h3>
        <a href="${item.link}" target="_blank" class="btn">View on Etsy</a>`;
            productGrid.appendChild(card);
        });
    } catch (error) {
        console.error("Error loading Etsy products:", error);
        productGrid.innerHTML = "<p>⚠️ Could not load products right now.</p>";
    }
}

// Load products when the page starts
loadEtsyProducts();
