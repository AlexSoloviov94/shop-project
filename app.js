// add to cart

let productsCountEl = document.getElementById("product-count");
let addToCartBtns = document.querySelectorAll(".add-btn");
// console.log(productsCountEl);
// console.log(addToCartBtns);

// for (let i = 0; i < addToCartBtns.length; i++) {
//   addToCartBtns[i].addEventListener("click", function () {
//     productsCountEl.textContent = +productsCountEl.textContent + 1;
//   });
// }

// let wishBtn = document.querySelectorAll(".wish-list");
// let wishImg = document.querySelectorAll(".wish-img");

// for (let i = 0; i < wishBtn.length; i++) {
//   wishBtn[i].addEventListener("click", function () {
//     let src = wishImg[i].getAttribute("src");

//     if (src === "images/icon 5.png") {
//       wishImg[i].setAttribute("src", "images/icon 7.png");
//       wishBtn[i].classList.add("wish-list-liked");
//     } else {
//       wishImg[i].setAttribute("src", "images/icon 5.png");
//       wishBtn[i].classList.remove("wish-list-liked");
//     }
//   });
// }

for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function () {
        productsCountEl.textContent = +productsCountEl.textContent + 1;
    });
}
// change like state

let likeBtns = document.querySelectorAll(".wish-list");
console.log(likeBtns);

likeBtns.forEach((btn) =>
    btn.addEventListener("click", function (e) {
        e.target.classList.toggle("liked");
        e.target.style.transition = "all 3s ease-out";
    })
);

let moreDetailsBtns = document.querySelectorAll(".more-btn");
let modal = document.querySelector(".modal");
// let btnClose = document.querySelector(".btn-close");

// moreDetailsBtns.forEach((item) => {
//     item.addEventListener("click", openModal);
// });

// btnClose.addEventListener("click", closeModal);

// function openModal() {
//     modal.classList.add("show");
//     modal.classList.remove("hide");
// }

// function closeModal() {
//     modal.classList.add("hide");
//     modal.classList.remove("show");
// }

// modal.addEventListener("click", function (e) {
//     if (e.target === modal) {
//         closeModal();
//     }
// });

let closeBtn = document.querySelector(".btn-close");

moreDetailsBtns.forEach((item) => item.addEventListener("click", openModal));
closeBtn.addEventListener("click", closeModal);

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

function closeModal() {
    modal.classList.remove("show");
    modal.classList.add("hide");
}

modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        closeModal();
    }
});

document.querySelector(".submit-form").addEventListener("click", function (e) {
    e.preventDefault();
});

// slider

$(".slider-block").slick({
    dots: true,
});

// window.addEventListener("scroll", openModalScroll);

// function openModalScroll() {
//     if (window.pageYOffset > document.body.scrollHeight / 2) {
//         modal.classList.add("show");
//         modal.classList.remove("hide");
//         window.removeEventListener("scroll", openModalScroll);
//     }
// }

function showModalByScroll() {
    if (window.scrollY >= document.body.scrollHeight / 2) {
        openModal();
        window.removeEventListener("scroll", showModalByScroll);
    }
}

window.addEventListener("scroll", showModalByScroll);

// setTimeout(openModal, 5000);
// setInterval(openModal, 5000);

AOS.init();
