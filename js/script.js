const variants = {
    100: {
        sku: "арт. 01306",
        price: "326,40 ₽",
        oldPrice: "349,20 ₽",
        discount: "Выгода 7%"
    },
    500: {
        sku: "арт. 01307",
        price: "1 432 ₽",
        oldPrice: "1 646 ₽",
        discount: "Выгода 13%"
    },
    1000: {
        sku: "арт. 01308",
        price: "2 064 ₽",
        oldPrice: "2 592 ₽",
        discount: "Выгода 21%"
    },
    5000: {
        sku: "арт. 01309",
        price: "6 320 ₽",
        oldPrice: "8 710 ₽",
        discount: "Выгода 28%"
    }
};

const form = document.querySelector(".purchase-form");
const sku = document.querySelector("#product-sku");
const currentPrice = document.querySelector("#current-price");
const oldPrice = document.querySelector("#old-price");
const discountBadge = document.querySelector("#discount-badge");
const cartButton = document.querySelector(".add-to-cart");
const cartButtonText = document.querySelector(".add-to-cart__text");

let feedbackTimer;

function updateVariant(weight) {
    const variant = variants[weight];

    if (!variant) {
        return;
    }

    sku.textContent = variant.sku;
    currentPrice.textContent = variant.price;
    oldPrice.textContent = variant.oldPrice;
    discountBadge.textContent = variant.discount;
    oldPrice.hidden = !variant.oldPrice;
    discountBadge.hidden = !variant.discount;
}

if (form) {
    form.addEventListener("change", function (event) {
        if (event.target.matches('input[name="weight"]')) {
            updateVariant(event.target.value);
        }
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!cartButton || !cartButtonText) {
            return;
        }

        clearTimeout(feedbackTimer);

        cartButton.classList.add("is-added");
        cartButtonText.textContent = "Добавлено";
        cartButton.setAttribute("aria-label", "Товар добавлен");

        feedbackTimer = setTimeout(function () {
            cartButton.classList.remove("is-added");
            cartButtonText.textContent = "В корзину";
            cartButton.removeAttribute("aria-label");
        }, 1600);
    });
}
