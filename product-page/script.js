const menu_btn = document.querySelector("#menu-toggle");
const settings = document.querySelector("#setting-btn");
const menu_dropdown = document.querySelector(".menu-dropdown");
const dark_toggle = document.querySelector(".darkMode-btn");

menu_btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        menu_dropdown.classList.toggle("show");
        if (menu_btn.innerHTML === "☰"){
            menu_btn.textContent = "⌵";
        }
        else{
            menu_btn.textContent = "☰"
        }
});

settings.addEventListener("click", (e) =>{
    e.stopPropagation();

    menu_dropdown.classList.toggle("show");
});
document.addEventListener("click", () =>{
    menu_dropdown.classList.remove("show")
});

dark_toggle.addEventListener("click", (e) =>{
    e.preventDefault();
    e.stopPropagation();
    document.documentElement.classList.toggle("dark");
});


let quantity = 1;

const unitprice = 345.99;

const add = document.querySelector("#quantity-add");
const minus = document.querySelector("#quantity-minus");

const quantityText = document.querySelector("#quantity");
const priceText = document.querySelector("#price");
const discountPrice = document.querySelector("#discount-price");

add.addEventListener("click", () =>{
    quantity++;

    updateDisplay();

});

minus.addEventListener("click", () => {
    if(quantity > 1){
        quantity--;
    }
    updateDisplay();
});

function updateDisplay(){
    let price = quantity * unitprice;
    const discount =  price * 0.2;
    quantityText.innerHTML = quantity;
    priceText.innerHTML = price.toFixed(2);
    discountPrice.innerHTML = (price - discount).toFixed(2);
}

const add_cart = document.querySelector("#add-cart");
const add_cartText = document.querySelector("#add-cartText");


add_cart.addEventListener("click", () => {
    add_cartText.innerHTML = "Added ✓";

    setTimeout(() =>{
    add_cartText.innerHTML = "Add to Cart";

    }, 2000);
});

