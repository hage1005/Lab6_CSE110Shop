// Script.js

window.addEventListener('DOMContentLoaded', () => {

  // TODO
  localStorage = window.localStorage;
  if (localStorage.getItem('count') === null) {
    localStorage.setItem('count', 0);
  } else {
    var count = document.getElementById("cart-count");
    count.textContent = localStorage.getItem('count');
  }
  if (localStorage.getItem('items') === null) {
    console.log("fetching...");
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
          console.log("finished fetching!");
          localStorage.setItem('items', JSON.stringify(data));
          container = document.getElementById('product-list');
          for (let i = 0; i < data.length; i++) {
            let child = new ProductItem(data[i].id, data[i].image, data[i].title, data[i].title, data[i].price);
            container.appendChild(child);
          }
        });
      }
    else {
      data = localStorage.getItem('items');
      container = document.getElementById('product-list');
      for (let i = 0; i < data.length; i++) {
        let child = new ProductItem(data[i].id, data[i].image, data[i].title, data[i].title, data[i].price);
        container.appendChild(child);
      }
      //console.log(data[0]);
    }
  } );
