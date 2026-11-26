
const products = [
  {
    id:1,
    title: "Wireless Noise-Canceling Headphones",
    price: 199.99,
    description: "Over-ear Bluetooth headphones with active noise cancellation, 30-hour battery life, and plush memory foam ear cushions.",
    imgUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id:2,
    title: "Minimalist Leather Watch",
    price: 129.50,
    description: "Classic analog watch featuring a stainless steel case, scratch-resistant mineral glass, and a genuine brown leather strap.",
    imgUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
  },
  {
    id:3,
    title: "Mechanical Gaming Keyboard",
    price: 89.99,
    description: "Compact 75% mechanical keyboard with tactile switches, customizable RGB backlighting, and a detachable USB-C cable.",
    imgUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id:4,
    title: "Ceramic Pour-Over Coffee Dripper",
    price: 28.00,
    description: "Handcrafted ribbed ceramic coffee dripper designed for optimal water flow and balanced extraction.",
    imgUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
  },
  {
    id:5,
    title: "Canvas Everyday Backpack",
    price: 64.95,
    description: "Water-resistant waxed canvas backpack with a padded 15-inch laptop sleeve and multiple interior organizer pockets.",
    imgUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
  }
];


const cart=[]

// selectors

const productsRow=document.querySelector(".products-section .row")



//functions

function displayproducts(){

products.forEach((p)=>{
productsRow.innerHTML+= `
 <div class=" col-12 md:col-6 lg:col-4 mb-4">
                 <div class="product bg-info bg-30 overflow-hidden rounded h-100 d-flex flex-column">

                <img class="w-100" src="${p.imgUrl}" alt="${p.title}">
                <div class="content p-5 d-flex flex-column gap-4">
                    <h3 class="mb-0">${p.title} ${p.price} ${p.description}</h3>
                    <p class="mb-0">${p.description}</p>

                    <span>$${p.price}</span>
                    <button onclick="addtocart(${p.id})" class="btn btn-info">buy now</button>
                </div>

            </div>
        </div>

`


    })
}
displayproducts()

function addtocart(id){

    const product=products.find((p) => p.id==id)
    cart.push(product)
    localStorage.setItem("cart",JSON.stringify(cart))
    console.log(cart)

}
