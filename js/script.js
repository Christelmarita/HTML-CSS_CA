// SELECT ELEMENT //
const games = document.querySelector(".featured");
const basketItems = document.querySelector(".cart_product");
const addToBasketBtn = document.querySelector(".add-to-basket");

// RENDER PRODUCT //
function renderGames(){
    products.forEach( (products) => {
        games.innerHTML += `
        <div class="card">
            <div class="card-image">
                <a href="../products/details.html"><img src="${products.imgSrc}" alt="${products.name}"></a>
            </div>
            <div>
                <p class="product_name">${products.name}</p>
                <p class="product_console">${products.console}</p>
                <p class="product_price">€${products.price}</p>
                <p>
                <a href="../products/details.html" class="product_link">Read more</a>
                </p>
            </div>
                <button type="button" class="add-to-basket" onClick="showMessage()">Add to basket</button>
        </div>
        `;
    });
}

renderGames ();

function showMessage() {
    alert("The product is successfully added to your basket!");
}