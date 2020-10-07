'use strict';

let totalPrice = 0;
let existingLocalStorage = [];
function Device(name, category, quantity) {
  this.name = name;
  this.category = category;
  this.price = getRandNum(350, 750);
  this.quantity = quantity;
  totalPrice += quantity*this.price;
  Device.all.push(this);
}
Device.all = [];

let formEl = document.getElementById('form');
formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let name = event.target.name.value;
  let category = event.target.category.value;
  let quantity = event.target.quantity.value;
  let device = new Device(name, category, quantity);
  saveToLocalStorage(device);
  render();
}

function saveToLocalStorage(device) {
  existingLocalStorage.push(device);
  localStorage.setItem('Devices', JSON.stringify(existingLocalStorage));
}

function getFromLocalStorage() {
  existingLocalStorage = JSON.parse(localStorage.getItem('Devices')) || [];
}

function render() {
  formEl.reset();
  let sectionEl = document.getElementById('tableSection');
  sectionEl.textContent = '';
  getFromLocalStorage();
  let tableEl = document.createElement('table');
  sectionEl.appendChild(tableEl);
  let thElName = document.createElement('th');
  tableEl.appendChild(thElName);
  thElName.textContent = 'Device Name';
  let thElQuantity = document.createElement('th');
  tableEl.appendChild(thElQuantity);
  thElQuantity.textContent = 'Quantity';
  let thElPrice = document.createElement('th');
  tableEl.appendChild(thElPrice);
  thElPrice.textContent = 'Unit Price';
  let thElCategory= document.createElement('th');
  tableEl.appendChild(thElCategory);
  thElCategory.textContent = 'Category';
  for (let i = 0; i < existingLocalStorage.length; i++) {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    let tdElName = document.createElement('td');
    trEl.appendChild(tdElName);
    tdElName.textContent = existingLocalStorage[i].name;
    let tdElQuantity = document.createElement('td');
    trEl.appendChild(tdElQuantity);
    tdElQuantity.textContent = existingLocalStorage[i].quantity;
    let tdElPrice = document.createElement('td');
    trEl.appendChild(tdElPrice);
    tdElPrice.textContent = existingLocalStorage[i].price;
    let tdElCategory = document.createElement('td');
    trEl.appendChild(tdElCategory);
    tdElCategory.textContent = existingLocalStorage[i].category;
  }
  let pEl = document.createElement('p');
  sectionEl.appendChild(pEl);
  pEl.textContent = `Total: ${totalPrice}`;
}

function getRandNum(min, max) {
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  return (random);
}

render();
