const products = [
  {name:"MK Box Single",price:"KSh 25",icon:"▣",photo:"",message:"MK Box Single - KSh 25"},
  {name:"MK Double",price:"KSh 35",icon:"▤",photo:"",message:"MK Double - KSh 35"},
  {name:"1 Gang 2 Way Switch",price:"KSh 120",icon:"◻",photo:"",message:"1 Gang 2 Way Switch - KSh 120"},
  {name:"Light Gauge Meter Box",price:"KSh 350",icon:"▣",photo:"",message:"Light Gauge Meter Box - KSh 350"},
  {name:"Galvanised Meter Box",price:"KSh 1,500",icon:"▣",photo:"",message:"Galvanised Meter Box - KSh 1,500"},
  {name:"Single Breakers",price:"KSh 230",icon:"ϟ",photo:"",message:"Single Breaker - KSh 230"},
  {name:"Power King Extension 4 Way",price:"KSh 400",icon:"▤",photo:"",message:"Power King Extension 4 Way - KSh 400"},
  {name:"LED Bulbs",price:"KSh 50–500",icon:"💡",photo:"",message:"LED Bulbs (price range KSh 50–500)"},
  {name:"Double Socket",price:"KSh 250–350",icon:"▦",photo:"",message:"Double Socket (price range KSh 250–350)"}
];
const grid=document.getElementById("productGrid");
const phone="254720547236";
function render(list){
  grid.innerHTML="";
  document.getElementById("resultCount").textContent=`${list.length} product${list.length===1?"":"s"}`;
  if(!list.length){grid.innerHTML='<p>No products match your search. Try another name.</p>';return;}
  list.forEach(p=>{
    const msg=encodeURIComponent(`Hello Amos, I would like to order: ${p.message}. Please confirm availability and delivery.`);
    const card=document.createElement("article");card.className="product";
    card.innerHTML=`<div class="product-photo">${p.photo?`<img src="${p.photo}" alt="${p.name}">`:`<span class="photo-placeholder" aria-hidden="true">${p.icon}</span>`}</div><div class="product-info"><h3>${p.name}</h3><p class="price">${p.price}</p><a class="order-btn" href="https://wa.me/${phone}?text=${msg}" target="_blank" rel="noopener">Order on WhatsApp ↗</a></div>`;
    grid.appendChild(card);
  });
}
function search(){const q=document.getElementById("searchInput").value.toLowerCase().trim();render(products.filter(p=>p.name.toLowerCase().includes(q)));}
document.getElementById("searchBtn").addEventListener("click",search);
document.getElementById("searchInput").addEventListener("input",search);
document.getElementById("year").textContent=new Date().getFullYear();
render(products);
