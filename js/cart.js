const cartData = JSON.parse(localStorage.getItem("cart")) || [];
const cartItemsDiv = document.getElementById("cartItems");

cartData.forEach((item, index) => {
  cartItemsDiv.innerHTML += `
    <div style="background:${item.color};padding:10px;margin:10px;">
      <p>${item.slogan}</p>
      <img src="${item.image}" width="100" />
      <p>Price: $${item.price}</p>
    </div>
  `;
});

function proceedToPayment() {
  fetch("http://localhost:5000/api/payment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items: cartData })
  })
    .then((res) => res.json())
    .then((data) => {
      window.location.href = data.url;
    });
}
