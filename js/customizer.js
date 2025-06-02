const colorPicker = document.getElementById("colorPicker");
const sloganInput = document.getElementById("slogan");
const designUpload = document.getElementById("designUpload");
const preview = document.getElementById("tshirtPreview");

let imageUrl = "";

colorPicker.addEventListener("input", () => {
  preview.style.backgroundColor = colorPicker.value;
});

sloganInput.addEventListener("input", () => {
  preview.innerHTML = `<p>${sloganInput.value}</p>`;
});

designUpload.addEventListener("change", (e) => {
  const file = URL.createObjectURL(e.target.files[0]);
  imageUrl = file;
  preview.innerHTML += `<img src="${file}" width="100" />`;
});

function addToCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({
    color: colorPicker.value,
    slogan: sloganInput.value,
    image: imageUrl,
    price: 20
  });
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "cart.html";
}
