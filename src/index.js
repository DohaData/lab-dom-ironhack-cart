// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span").innerText;
  const quantity = product.querySelector(".quantity input").value;
  const subtotal = Number(price) * Number(quantity);
  product.querySelector(".subtotal span").innerText = subtotal;
  //console.log(typeof quantity)
  //... your code goes here
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  const allProducts = document.querySelectorAll(".product");

  const subtotalArray = [...allProducts].map((product) => {
    return updateSubtotal(product);
  });

  const total = subtotalArray.reduce((acc, value) => acc + value, 0);

  document.querySelector("#total-value span").innerText = total;

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  target.parentNode.parentNode.remove();
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  const productCreated = document.createElement("tr");
  productCreated.className = "product";
  productCreatedProductName = document.querySelector(
    '.create-product input[placeholder="Product Name"]'
  ).value;
  productCreatedProductPrice = document.querySelector(
    '.create-product input[placeholder="Product Price"]'
  ).value;
  productCreated.innerHTML = `<td class="name">
  <span>${productCreatedProductName}</span>
</td>
<td class="price">$<span>${productCreatedProductPrice}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`;
  document.querySelector("tbody").appendChild(productCreated);
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeButtons = document.querySelectorAll(".btn-remove");
  [...removeButtons].forEach((button) => {
    button.addEventListener("click", removeProduct);
  });

  const createButton = document.getElementById("create");
  createButton.addEventListener("click", createProduct);

  //... your code goes here
});
