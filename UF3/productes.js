const products = [
  { category: "Electrònica", price: 499.99, name: "Telèfon Intel·ligent" },
  { category: "Electrònica", price: 799.99, name: "Portàtil" },
  { category: "Electrònica", price: 299.99, name: "Auriculars sense fils" },
  { category: "Electrònica", price: 199.99, name: "Televisor Intel·ligent" },
  { category: "Electrònica", price: 149.99, name: "Relotge Intel·ligent" },
  { category: "Llar", price: 249.99, name: "Rentadora" },
  { category: "Llar", price: 149.99, name: "Assecadora" },
  { category: "Llar", price: 99.99, name: "Cafetera" },
  { category: "Llar", price: 79.99, name: "Torradora" },
  { category: "Llar", price: 199.99, name: "Aspiradora" },
];


const productSelect = document.querySelector('select[name="product"]');
const quantityInput = document.querySelector('input[name="quantity"]');
const priceInput = document.querySelector('input[name="price"]');
const addProduct = document.getElementById('add-product');
const llistaProductes = document.getElementById("llista-productes");

function ponerProducte(product){
    // Posar la opción de un producte a la llista
    const producte = document.createElement("option");
    producte.value = product.name
    producte.textContent = product.name + " - " + product.price + "€";
    productSelect.appendChild(producte);
}

function ponerProductos(){
    // Posar tots els productes amb un for
    for(let i = 0; i < products.length; i++){
        ponerProducte(products[i]);
    }
}

function addProducte(){
    // Valors actuals
    const product = productSelect.value;
    const quantity = quantityInput.value;
    const totalPrice = priceInput.value * quantity;
    // Creem l'element de la llista
    const listItem = document.createElement("div");
    listItem.textContent = product + " - Quantitat: " + quantity + ", Preu Total: " + totalPrice+"€";

    // Afegim l'element a la llista de productes
    llistaProductes.appendChild(listItem);
}

function selectProduct(){
    quantityInput.value = "1";
    for(let i = 0; i < products.length; i++){
        if(products[i].name == productSelect.value){
            //console.log(priceInput);
            priceInput.value = products[i].price;
        }
    }
}

// Carreguem els productes disponibles al carregar la pàgina del document
window.addEventListener("load", ponerProductos);

// addEventListeners
addProduct.addEventListener("click", addProducte)
productSelect.addEventListener("change", selectProduct)
