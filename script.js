let cart = [];

fetch("products.json")
.then(res => res.json())
.then(data => {
  let container = document.getElementById("products");
  data.forEach((p,i)=>{
    container.innerHTML += `
    <div class="product">
      <img src="${p.img}" width="100%">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <button onclick="add(${i})">Add</button>
    </div>`;
  });

  window.products = data;
});

function add(i){
  cart.push(products[i]);
  alert("Added");
}

function openCart(){
  document.getElementById("cartBox").style.display = "block";
  renderCart();
}

function renderCart(){
  let div = document.getElementById("cartItems");
  div.innerHTML = "";
  cart.forEach(p=>{
    div.innerHTML += `<p>${p.name}</p>`;
  });
}

function checkout(){
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let payment = document.getElementById("payment").value;

  let orders = JSON.parse(localStorage.getItem("orders")||"[]");
  orders.push({name,phone,payment,cart});
  localStorage.setItem("orders",JSON.stringify(orders));

  alert("Order sent!");
  window.location.href="admin.html";
}
