// Script.js

window.addEventListener('DOMContentLoaded', () => {

  // TODO
  localStorage = window.localStorage;
  if (localStorage.getItem('items') === null ) {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json() )
    .then(data => localStorage.setItem('items', JSON.stringify(data)));
  }
  data = JSON.parse(localStorage.getItem('items'));
  console.log(data[0]);
  //data = data.json();
  container = document.getElementById('product-list');
  for(let i = 0; i < data.length; i++){
    let child = new ProductItem(data[i].id, data[i].image, data[i].title, data[i].title, data[i].price);
    //console.log(data[i].image);

    container.appendChild(child);
  }
});
