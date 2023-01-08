// add to cart

let productsCountEl = document.getElementById("product-count");
let addToCartBtns = document.querySelectorAll(".add-btn");
// console.log(productsCountEl);
// console.log(addToCartBtns);

for (let i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  });
}

let wishBtn = document.querySelectorAll(".wish-list");
let wishImg = document.querySelectorAll(".wish-img");

for (let i = 0; i < wishBtn.length; i++) {
  wishBtn[i].addEventListener("click", function () {
    let src = wishImg[i].getAttribute("src");

    if (src === "images/icon 5.png") {
      wishImg[i].setAttribute("src", "images/icon 7.png");
      wishBtn[i].classList.add("wish-list-liked");
    } else {
      wishImg[i].setAttribute("src", "images/icon 5.png");
      wishBtn[i].classList.remove("wish-list-liked");
    }
  });
}
