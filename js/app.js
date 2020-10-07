'use strict';

let totalPrice = 0;
function Device(name, category, quantity) {
  this.name = name;
  this.category = category;
  this.quantity = quantity;
  Device.all.push(this);
}
Device.all = [];

let formEl = document.getElementById('form');
formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();
  let name = event.target.name.value;
  let category = event.target.category.value;
  let quantity = event.target.quantity.value;
  let device = new Device(name, category, quantity);
  
}